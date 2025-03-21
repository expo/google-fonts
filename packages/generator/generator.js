const spawnAsync = require('@expo/spawn-async');
const cliProgress = require('cli-progress');
const fetch = require('cross-fetch');
const ejs = require('ejs');
const fs = require('fs');
const fsExtra = require('fs-extra');
const { default: PQueue } = require('p-queue');
const path = require('path');
const physicalCpuCount = require('physical-cpu-count');
const prettier = require('prettier');

const contributors = require('./contributors');
const getGoogleFontsApiKey = require('./google-fonts-api-key');
const PackageVersion = require('../../package.json').version;

// Constants

const WeightNames = {
  100: 'Thin',
  200: 'ExtraLight',
  300: 'Light',
  400: 'Regular',
  500: 'Medium',
  600: 'SemiBold',
  700: 'Bold',
  800: 'ExtraBold',
  900: 'Black',
};

const VariantNames = {
  100: 'Thin',
  200: 'Extra Light',
  300: 'Light',
  regular: 'Regular',
  500: 'Medium',
  600: 'Semi Bold',
  700: 'Bold',
  800: 'Extra Bold',
  900: 'Black',
  '100italic': 'Thin Italic',
  '200italic': 'Extra Light Italic',
  '300italic': 'Light Italic',
  italic: 'Italic',
  '500italic': 'Medium Italic',
  '600italic': 'Semi Bold Italic',
  '700italic': 'Bold Italic',
  '800italic': 'Extra Bold Italic',
  '900italic': 'Black Italic',
};

const ProjectRootDir = path.join(__dirname, '..', '..');
const FontPackagesDir = path.join(ProjectRootDir, 'font-packages');
const FontAssetsDir = path.join(ProjectRootDir, 'font-assets');
const FontImagesDir = path.join(ProjectRootDir, 'font-images');
const FontDirectoryPackageDir = path.join(ProjectRootDir, 'font-packages', 'font-directory');
const DevPackageDir = path.join(FontPackagesDir, 'dev');

const PackageScope = '@expo-google-fonts/';

const PrettierOptions = {
  printWidth: 100,
  tabWidth: 2,
  singleQuote: true,
  jsxBracketSameLine: true,
  trailingComma: 'es5',
  arrowParens: 'always',
};

const CPUBoundConcurrency = Math.max(1, physicalCpuCount - 1);
const NetworkBoundConcurrency = 3;

const fontPrefix = 'font';

async function main({ images, download } = { images: true, download: true }) {
  console.log('Getting directory');
  const fontDirectory = await getDirectory();
  console.log('done.');

  if (download) {
    console.log('Downloading all fonts...');
    await downloadAllFonts(fontDirectory);
    console.log('done.');
  }

  if (images) {
    console.log('Generating image previews for all fonts...');
    await generateImagesForFonts(fontDirectory);
    console.log('done.');
  }

  console.log('Generating all font packages...');
  await generateAllFontPackages(fontDirectory);
  console.log('done.');

  console.log('Generating dev package...');
  await generateDevPackage(fontDirectory);
  console.log('done.');

  console.log('Generating font directory package...');
  await generateFontDirectoryPackage(fontDirectory);
  console.log('done.');

  console.log('Generating root README and GALLERY markdown files...');
  await generateRootReadme(fontDirectory);
  await generateGalleryFile(fontDirectory);
  console.log('done.');
}

async function createFileFromTemplate(outputPath, templatePath, data) {
  const content = await ejs.renderFile(templatePath, data);
  await fs.promises.writeFile(outputPath, content, 'utf8');
}

function infoForVariantKey(variantKey) {
  const weight = parseInt(variantKey, 10) || 400; // `regular` and `italic` don't have a number before them
  const isItalic = variantKey.endsWith('italic');
  const weightName = WeightNames[weight];
  let suffix = '_' + weight + weightName;
  if (isItalic) {
    suffix += '_Italic';
  }
  return {
    weight,
    isItalic,
    weightName,
    suffix,
  };
}

function varNameForWebfont(webfont) {
  const variant = webfont.family.replace(/\s+/g, '');
  return variant.match(/^\d/) ? fontPrefix + variant : variant;
}

function varNameForFontVariant(webfont, variantKey) {
  const info = infoForVariantKey(variantKey);
  return varNameForWebfont(webfont) + info.suffix;
}

async function getDirectory() {
  const url = `https://www.googleapis.com/webfonts/v1/webfonts?key=${getGoogleFontsApiKey()}&prettyPrint=false&sort=date`;
  const response = await fetch(url);
  return await response.json();
}

function filenameForFontVariant(webfont, variantKey) {
  return varNameForFontVariant(webfont, variantKey) + '.ttf';
}

function filepathForFontVariant(webfont, variantKey) {
  return path.join(FontAssetsDir, filenameForFontVariant(webfont, variantKey));
}

async function downloadAllFonts(fontDirectory) {
  await fsExtra.ensureDir(FontAssetsDir);

  let totalFonts = 0;
  for (const webfont of fontDirectory.items) {
    totalFonts += webfont.variants.length;
  }

  const concurrency = NetworkBoundConcurrency;
  const q = new PQueue({ concurrency });

  const bar = new cliProgress.SingleBar(
    {
      format: ` {bar} {percentage}% | x${concurrency} | ETA: {eta}s | {value}/{total} | {font}`,
      clearOnComplete: true,
    },
    cliProgress.Presets.shades_classic
  );

  let i = 0;
  bar.start(totalFonts, i);
  try {
    for (const webfont of fontDirectory.items) {
      for (const variantKey of webfont.variants) {
        const ttfUrl = webfont.files[variantKey];
        const filepath = filepathForFontVariant(webfont, variantKey);
        const p = q.add(() => download(filepath, ttfUrl));
        p.font = varNameForFontVariant(webfont, variantKey);
        (async () => {
          await p;
          i++;
          bar.update(i, { font: p.font });
        })();
      }
    }
    await q.onEmpty();
  } catch (e) {
    throw e;
  } finally {
    bar.stop();
  }
}

async function download(filepath, url) {
  const response = await fetch(url);
  const b = await response.buffer();
  await fs.promises.writeFile(filepath, b);
}

async function generateImagesForFonts(fontDirectory) {
  await fsExtra.emptyDir(FontImagesDir);
  let totalFonts = 0;
  for (const webfont of fontDirectory.items) {
    totalFonts += webfont.variants.length;
  }

  const concurrency = CPUBoundConcurrency;
  const q = new PQueue({ concurrency });

  const bar = new cliProgress.SingleBar(
    {
      format: ` {bar} {percentage}% | x${concurrency} | ETA: {eta}s | {value}/{total} | {font}`,
      clearOnComplete: true,
    },
    cliProgress.Presets.shades_classic
  );
  let i = 0;
  const errors = [];
  try {
    bar.start(totalFonts, i);
    for (const webfont of fontDirectory.items) {
      for (const variantKey of webfont.variants) {
        const p = q.add(() => generateImageForFontVariant(webfont, variantKey));
        p.font = varNameForFontVariant(webfont, variantKey);
        (async () => {
          try {
            await p;
          } catch (e) {
            errors.push([p.font, e]);
            throw e;
          } finally {
            i++;
            bar.update(i, { font: p.font });
          }
        })();
      }
    }
    await q.onEmpty();
  } catch (e) {
    throw e;
  } finally {
    bar.stop();
  }
  if (errors.length > 0) {
    console.error('Image Generation Errors:\n' + errors.map((x) => x[0]).join(', '));
  }
}

async function generateImageForFontVariant(webfont, variantKey) {
  let phrase = varNameForFontVariant(webfont, variantKey) + '\n';
  phrase += 'Pack my box with five\ndozen liquor jugs, please.';
  const outputFilepath = path.join(
    FontImagesDir,
    filenameForFontVariant(webfont, variantKey) + '.png'
  );
  await generatePng(outputFilepath, phrase, webfont, variantKey, 40);
}

async function generatePng(outputFilepath, text, webfont, variantKey, pointsize, density) {
  const fill = '#1B1F23';
  const background = '#FFFFFF';
  const fontFilepath = filepathForFontVariant(webfont, variantKey);
  pointsize = pointsize || 40;
  density = density || 144; // 458; // iPhone 11 Pro Max = 458
  const units = 'pixelsperinch';
  const args = [
    '-background',
    background,
    '-fill',
    fill,
    '-units',
    '' + units,
    '-density',
    '' + density,
    '-font',
    fontFilepath,
    '-pointsize',
    '' + pointsize,
    'label:' + text,
    '-bordercolor',
    background,
    '-border',
    '32x16',
    '-strip',
    outputFilepath,
  ];
  try {
    //await spawnAsync('./magick', args);
    await spawnAsync('magick', args);
  } catch (e) {
    // Some fonts, like Noto Color Emoji Compat, break ImageMagick here
    // and so we just link the empty png but rethrow the error so that the
    // caller needs to catch it and isn't surprised by an error
    await fs.promises.link('./empty.png', outputFilepath);
    throw e;
  }
}

async function generateAllFontPackages(fontDirectory) {
  await fsExtra.emptyDir(FontPackagesDir);

  const webfontCount = fontDirectory.items.length;

  const concurrency = CPUBoundConcurrency;

  const bar = new cliProgress.SingleBar(
    {
      format: ` {bar} {percentage}% | x${concurrency} | ETA: {eta}s | {value}/{total} | {family}`,
      clearOnComplete: true,
    },
    cliProgress.Presets.shades_classic
  );
  const q = new PQueue({ concurrency });
  let i = 0;
  bar.start(webfontCount, i);
  try {
    for (const webfont of fontDirectory.items) {
      const p = q.add(() => generateFontPackage(webfont));
      p.webfont = webfont;
      p.family = webfont.family;
      (async () => {
        await p;
        i++;
        bar.update(i, { family: p.family });
      })();
    }
    await q.onEmpty();
  } catch (e) {
    throw e;
  } finally {
    bar.stop();
  }
}

function getPackageNameForWebfont(webfont) {
  return webfont.family
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

async function generateFontPackage(webfont) {
  const packageName = getPackageNameForWebfont(webfont);
  const pkgDir = path.join(FontPackagesDir, packageName);

  // empty dir
  await fsExtra.emptyDir(pkgDir);

  // package.json
  await createFileFromTemplate(
    path.join(pkgDir, 'package.json'),
    path.join(__dirname, 'templates/package/package.json'),
    {
      packageName,
      version: PackageVersion,
      description: `Use the ${webfont.family} font family from Google Fonts in your Expo app`,
      main: 'index.js',
    }
  );

  // metadata.json
  await fs.promises.writeFile(
    path.join(pkgDir, 'metadata.json'),
    prettier.format(JSON.stringify(webfont), {
      ...PrettierOptions,
      parser: 'json',
    }),
    'utf8'
  );

  for (const variantKey of webfont.variants) {
    const ffn = filenameForFontVariant(webfont, variantKey);

    // link fonts and image previews
    await fs.promises.link(path.join(FontAssetsDir, ffn), path.join(pkgDir, ffn));
    await fs.promises.link(path.join(FontImagesDir, ffn + '.png'), path.join(pkgDir, ffn + '.png'));
  }

  const variants = webfont.variants.map((variantKey) => {
    return {
      name: varNameForFontVariant(webfont, variantKey),
      path: filenameForFontVariant(webfont, variantKey),
    };
  });

  await createFileFromTemplate(
    path.join(pkgDir, 'index.js'),
    path.join(__dirname, 'templates/package/index.js.ejs'),
    { variants }
  );
  await createFileFromTemplate(
    path.join(pkgDir, 'index.d.ts'),
    path.join(__dirname, 'templates/package/index.d.ts.ejs'),
    { variants }
  );

  // Include the useFonts hook so we can use that
  await fs.promises.link(
    path.join(__dirname, 'templates/package/useFonts.js'),
    path.join(pkgDir, 'useFonts.js')
  );
  await fs.promises.link(
    path.join(__dirname, 'templates/package/useFonts.d.ts'),
    path.join(pkgDir, 'useFonts.d.ts')
  );

  // font-family.png
  const packageImageFilepath = path.join(pkgDir, 'font-family.png');
  try {
    await generatePackageHeaderImage(packageImageFilepath, webfont);
  } catch (e) {
    // TODO: Maybe log an error?
    throw e;
  }

  // README.md
  await createFileFromTemplate(
    path.join(pkgDir, 'README.md'),
    path.join(__dirname, 'templates/package/README.md'),
    {
      packageName: getPackageNameForWebfont(webfont),
      fontName: webfont.family,
      fontVariants: webfont.variants.map((variantKey) =>
        varNameForFontVariant(webfont, variantKey)
      ),
      fontVariantsWithDisplayName: webfont.variants.map((variantKey) => ({
        varName: varNameForFontVariant(webfont, variantKey),
        displayName: getDisplayNameForFontVariant(webfont, variantKey),
      })),
      devPackageDescription: await ejs.renderFile(
        path.join(__dirname, 'templates/dev/DESCRIPTION.md')
      ),
      variantsTable: generateTableForVariants(webfont),
      variantsCount: webfont.variants.length,
    }
  );
}

async function generatePackageHeaderImage(outputFilepath, webfont) {
  const variantKey = getDefaultVariantKeyForWebfont(webfont);
  const name = webfont.family;
  await generatePng(outputFilepath, name, webfont, variantKey, 96);
}

function getDefaultVariantKeyForWebfont(webfont) {
  const Priority = [
    'regular',
    '500',
    '300',
    '600',
    '200',
    '700',
    '100',
    '800',
    '900',
    'italic',
    '500italic',
    '300italic',
    '600italic',
    '200italic',
    '700italic',
    '100italic',
    '800italic',
    '900italic',
  ];
  for (const vk of Priority) {
    if (webfont.variants.includes(vk)) {
      return vk;
    }
  }
  // Weird; this is unexpected, but let's just return the first variant we find
  // since none of the ones we expect are provided
  return webfont.variants[0];
}

async function generateFontDirectoryPackage(fontDirectory) {
  await fsExtra.emptyDir(FontDirectoryPackageDir);

  // Clone the object
  const fd = JSON.parse(JSON.stringify(fontDirectory));

  for (const webfont of fd.items) {
    const packageName = getPackageNameForWebfont(webfont);
    webfont.expoGoogleFontsPackage = PackageScope + packageName;
    webfont.expoGoogleFontsPackageHomepage = `https://github.com/expo/google-fonts/tree/master/font-packages/${packageName}`;
  }

  await fs.promises.writeFile(
    path.join(FontDirectoryPackageDir, 'fontDirectory.json'),
    JSON.stringify(fd),
    'utf8'
  );

  await createFileFromTemplate(
    path.join(FontDirectoryPackageDir, 'package.json'),
    path.join(__dirname, 'templates/package/package.json'),
    {
      packageName: 'font-directory',
      version: PackageVersion,
      description: 'A directory of metadata about the fonts available in `expo-google-fonts`',
      main: 'fontDirectory.json',
    }
  );

  await createFileFromTemplate(
    path.join(FontDirectoryPackageDir, 'README.md'),
    path.join(__dirname, 'templates/font-directory/README.md'),
    {}
  );
}

async function generateDevPackage(fontDirectory) {
  const pkgDir = DevPackageDir;
  await fsExtra.emptyDir(pkgDir);

  await createFileFromTemplate(
    path.join(pkgDir, 'package.json'),
    path.join(__dirname, 'templates/package/package.json'),
    {
      packageName: 'dev',
      version: PackageVersion,
      description: `Load ${fontDirectory.items.length} font families from Google Fonts over the network while developing your Expo app`,
      main: 'index.js',
    }
  );

  function validateFontUrlUsesHttps(fontUrl) {
    const url = new URL(fontUrl);
    if (url.protocol === 'http:') url.protocol = 'https:';
    return url.toString();
  }

  const variants = [];
  for (const webfont of fontDirectory.items) {
    for (const variantKey of webfont.variants) {
      variants.push({
        name: varNameForFontVariant(webfont, variantKey),
        url: validateFontUrlUsesHttps(webfont.files[variantKey]),
      });
    }
  }

  await createFileFromTemplate(
    path.join(pkgDir, 'index.js'),
    path.join(__dirname, 'templates/dev/index.js.ejs'),
    { variants }
  );
  await createFileFromTemplate(
    path.join(pkgDir, 'index.d.ts'),
    path.join(__dirname, 'templates/dev/index.d.ts.ejs'),
    { variants }
  );

  // useFonts.js & useFonts.d.ts
  await fs.promises.link(
    path.join(__dirname, 'templates/package/useFonts.js'),
    path.join(pkgDir, 'useFonts.js')
  );
  await fs.promises.link(
    path.join(__dirname, 'templates/package/useFonts.d.ts'),
    path.join(pkgDir, 'useFonts.d.ts')
  );

  // README.md
  await createFileFromTemplate(
    path.join(pkgDir, 'README.md'),
    path.join(__dirname, 'templates/dev/README.md'),
    {
      devPackageDescription: await ejs.renderFile(
        path.join(__dirname, 'templates/dev/DESCRIPTION.md')
      ),
    }
  );
}

async function generateRootReadme(fontDirectory) {
  let variantCount = 0;
  for (const webfont of fontDirectory.items) {
    variantCount += webfont.variants.length;
  }

  await createFileFromTemplate(
    path.join(ProjectRootDir, 'README.md'),
    path.join(__dirname, 'templates/README.md'),
    {
      fontsCount: fontDirectory.items.length,
      variantCount,
      contributors: contributors.map(
        (c) => `- ${c.name} ([@${c.github}](https://github.com/${c.github})) - ${c.affiliation}`
      ),
      galleryMarkdown: await getFeaturedGalleryMarkdown(fontDirectory),
      devPackageDescription: await ejs.renderFile(
        path.join(__dirname, 'templates/dev/DESCRIPTION.md')
      ),
    }
  );
}

async function getFeaturedGalleryMarkdown(fontDirectory) {
  const featuredFonts = [
    'Inter',
    'Manrope',
    'Allan',

    'Roboto',
    'Lusitana',
    // 'Open Sans',
    'Nunito',

    'Bangers',
    'Source Sans 3',
    'Roboto Condensed',

    'Playfair Display',
    'Ubuntu',
    'Oswald',

    'Balsamiq Sans',
    'Jost',
    'Lato',
  ];

  const featured = [];

  // There are more efficient ways to do this but who cares
  for (const fontName of featuredFonts) {
    for (const webfont of fontDirectory.items) {
      if (webfont.family === fontName) {
        featured.push(webfont);
      }
    }
  }

  let md = `
||||
|-|-|-|
`;

  for (let row = 0; featured.length > 0; row++) {
    md += '|';
    for (let col = 0; col < 3; col++) {
      const webfont = featured.shift();
      const variantKey = getDefaultVariantKeyForWebfont(webfont);
      const styleImagePath =
        './font-packages/' +
        getPackageNameForWebfont(webfont) +
        '/' +
        filenameForFontVariant(webfont, variantKey) +
        '.png';
      const packageName = getPackageNameForWebfont(webfont);
      md += `[![${varNameForWebfont(
        webfont
      )}](${styleImagePath})](https://github.com/expo/google-fonts/tree/master/font-packages/${packageName}#readme)|`;
    }
    md += '\n';
  }
  return md;
}

async function generateGalleryFile(fontDirectory) {
  const dc = JSON.parse(JSON.stringify(fontDirectory));
  dc.items.sort((a, b) => (a.family < b.family ? -1 : 1));

  await createFileFromTemplate(
    path.join(ProjectRootDir, 'GALLERY.md'),
    path.join(__dirname, 'templates/GALLERY.md'),
    {
      fontFamilies: dc.items
        .map((webfont) => {
          return `[${
            webfont.family
          }](https://github.com/expo/google-fonts/tree/master/font-packages/${getPackageNameForWebfont(
            webfont
          )}#readme)`;
        })
        .join(', '),
      styles: fontDirectory.items.map((webfont) => {
        const pkgUrl =
          'https://github.com/expo/google-fonts/tree/master/font-packages/' +
          getPackageNameForWebfont(webfont) +
          '#readme';
        return `### [${webfont.family}](${pkgUrl})\n` + generateTableForVariants(webfont, pkgUrl);
      }),
    }
  );
}

function generateTableForVariants(webfont, pkgUrl) {
  let fontPackagesPrefix = './font-packages/' + getPackageNameForWebfont(webfont) + '/';
  if (!pkgUrl) {
    fontPackagesPrefix = './';
  }

  let md = `
||||
|-|-|-|
`;
  const variantImageCells = [];
  for (const variantKey of webfont.variants) {
    const styleImagePath =
      fontPackagesPrefix + filenameForFontVariant(webfont, variantKey) + '.png';
    const fi = varNameForFontVariant(webfont, variantKey);
    if (pkgUrl) {
      variantImageCells.push(`[![${fi}](${styleImagePath})](${pkgUrl})`);
    } else {
      variantImageCells.push(`![${fi}](${styleImagePath})`);
    }
  }

  for (let row = 0; variantImageCells.length > 0; row++) {
    md += '|';
    for (let col = 0; col < 3; col++) {
      const cell = variantImageCells.shift() || '';
      md += cell + '|';
    }
    md += '|\n';
  }

  return md;
}

function getDisplayNameForFontVariant(webfont, variantKey) {
  return webfont.family + ' ' + VariantNames[variantKey];
}

const t = {
  downloadAllFonts: async () => {
    const d = await getDirectory();
    return await downloadAllFonts(d);
  },
  generateImagesForFonts: async () => {
    const d = await getDirectory();
    return await generateImagesForFonts(d);
  },
  generatePng: async () => {
    const d = await getDirectory();
    return await generatePng('out.png', 'Hello World', d.items[3], '700italic');
  },
  generateFontPackage: async (n = 3) => {
    const d = await getDirectory();
    return await generateFontPackage(d.items[n]);
  },
  generatePackageHeaderImage: async (n = 3) => {
    const d = await getDirectory();
    return await generatePackageHeaderImage('header.png', d.items[n]);
  },

  generateDevPackage: async () => {
    const d = await getDirectory();
    return await generateDevPackage(d);
  },
  generateFontDirectoryPackage: async () => {
    const d = await getDirectory();
    return await generateFontDirectoryPackage(d);
  },
  generateRootReadme: async (directoryData) => {
    const d = directoryData || (await getDirectory());
    return await generateRootReadme(d);
  },
  generateGalleryFile: async () => {
    const d = await getDirectory();
    return await generateGalleryFile(d);
  },
  generateAllFontPackages: async () => {
    const d = await getDirectory();
    return await generateAllFontPackages(d);
  },
  getTotalFontVariants: async () => {
    const d = await getDirectory();
    let t = 0;
    for (const webfont of d.items) {
      t += webfont.variants.length;
    }
    return t;
  },
};

module.exports = {
  t,
  getDirectory,
  downloadAllFonts,
  filepathForFontVariant,
  filenameForFontVariant,
  varNameForFontVariant,
  varNameForWebfont,
  generateImageForFontVariant,
  generateImagesForFonts,
  generatePng,
  getDefaultVariantKeyForWebfont,
  generateFontPackage,
  generatePackageHeaderImage,
  generateRootReadme,
  getDisplayNameForFontVariant,
  FontPackagesDir,
  getPackageNameForWebfont,
  generateAllFontPackages,
  main,
};

if (require.main === module) {
  (async () => {
    await main();
  })();
}
