const spawnAsync = require('@expo/spawn-async');
const fetch = require('cross-fetch');
const ejs = require('ejs');
const fs = require('fs');
const fsExtra = require('fs-extra');
const path = require('path');
const prettier = require('prettier');
const semver = require('semver');

const contributors = require('./contributors');
const PackageVersion = require('../../package.json').version;

const ProjectRootDir = path.join(__dirname, '..', '..');
const FontAssetsDir = path.join(ProjectRootDir, 'font-assets');
const FontImagesDir = path.join(ProjectRootDir, 'font-images');
const FontPackagesDir = path.join(ProjectRootDir, 'font-packages');
const DevPackageDir = path.join(FontPackagesDir, 'dev');
const fontPrefix = 'font';
const FontDirectoryPackageDir = path.join(ProjectRootDir, 'font-packages', 'font-directory');
const ArchivedDataPath = path.join(__dirname, 'archived-data.json');
const PackageScope = '@expo-google-fonts/';

const PrettierOptions = {
  printWidth: 100,
  tabWidth: 2,
  singleQuote: true,
  jsxBracketSameLine: true,
  trailingComma: 'es5',
  arrowParens: 'always',
};

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

async function download(filepath, url) {
  const response = await fetch(url);
  const b = await response.buffer();
  await fs.promises.writeFile(filepath, b);
}

function varNameForWebfont(webfont) {
  const variant = webfont.family.replace(/\s+/g, '');
  return variant.match(/^\d/) ? fontPrefix + variant : variant;
}

function varNameForFontVariant(webfont, variantKey) {
  const info = infoForVariantKey(variantKey);
  return varNameForWebfont(webfont) + info.suffix;
}

function filenameForFontVariant(webfont, variantKey) {
  return varNameForFontVariant(webfont, variantKey) + '.ttf';
}

function filepathForFontVariant(webfont, variantKey) {
  return path.join(FontAssetsDir, filenameForFontVariant(webfont, variantKey));
}

function getNextPackageVersion(packageDir, options) {
  if (!options || !options.patch || !fs.existsSync(packageDir)) {
    return PackageVersion;
  }

  const packageJson = require(path.join(packageDir, 'package.json'));
  return semver.inc(packageJson.version, 'patch');
}

function infoForVariantKey(variantKey) {
  const weight = parseInt(variantKey, 10) || 400; // `regular` and `italic` don't have a number before them
  const isItalic = variantKey.endsWith('italic');
  const weightName = WeightNames[weight];
  let suffix = '_' + weight + weightName;
  let variantFolderName = weight + weightName;
  if (isItalic) {
    suffix += '_Italic';
    variantFolderName += '_Italic';
  }
  return {
    weight,
    isItalic,
    weightName,
    suffix,
    variantFolderName,
  };
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

function getPackageNameForWebfont(webfont) {
  return webfont.family
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

async function createFileFromTemplate(outputPath, templatePath, data) {
  const content = await ejs.renderFile(templatePath, data);
  await fs.promises.writeFile(outputPath, content, 'utf8');
}

function getDisplayNameForFontVariant(webfont, variantKey) {
  return webfont.family + ' ' + VariantNames[variantKey];
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

async function generatePackageHeaderImage(outputFilepath, webfont) {
  const variantKey = getDefaultVariantKeyForWebfont(webfont);
  const name = webfont.family;
  await generatePng(outputFilepath, name, webfont, variantKey, 96);
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
    const variantFolderName = infoForVariantKey(variantKey).variantFolderName;
    const styleImagePath =
      fontPackagesPrefix +
      variantFolderName +
      '/' +
      filenameForFontVariant(webfont, variantKey) +
      '.png';
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

async function generateFontPackage(webfont, options) {
  const packageName = getPackageNameForWebfont(webfont);
  const pkgDir = path.join(FontPackagesDir, packageName);
  const version = getNextPackageVersion(pkgDir, options);

  // empty dir
  await fsExtra.emptyDir(pkgDir);

  // package.json
  await createFileFromTemplate(
    path.join(pkgDir, 'package.json'),
    path.join(__dirname, 'templates/package/package.json'),
    {
      packageName,
      version,
      description: `Use the ${webfont.family} font family from Google Fonts in your Expo app`,
      main: 'index.js',
      directory: 'font-packages/' + packageName,
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
    const { variantFolderName } = infoForVariantKey(variantKey);

    const variantDirectory = path.join(pkgDir, `${variantFolderName}`);
    await fsExtra.ensureDir(variantDirectory);

    // link fonts and image previews
    await fs.promises.link(
      path.join(FontAssetsDir, ffn),
      path.join(pkgDir, variantFolderName, ffn)
    );
    await fs.promises.link(
      path.join(FontImagesDir, ffn + '.png'),
      path.join(pkgDir, variantFolderName, ffn + '.png')
    );

    const variantName = varNameForFontVariant(webfont, variantKey);
    await createFileFromTemplate(
      path.join(pkgDir, variantFolderName, 'index.js'),
      path.join(__dirname, 'templates/package/variant/index.js.ejs'),
      { variantName }
    );
    await createFileFromTemplate(
      path.join(pkgDir, variantFolderName, 'index.d.ts'),
      path.join(__dirname, 'templates/package/variant/index.d.ts.ejs'),
      { variantName }
    );
  }

  const variants = webfont.variants.map((variantKey) => {
    const { variantFolderName } = infoForVariantKey(variantKey);
    return {
      name: varNameForFontVariant(webfont, variantKey),
      path: variantFolderName + '/' + filenameForFontVariant(webfont, variantKey),
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
      packageName,
      fontName: webfont.family,
      fontVariants: webfont.variants.map((variantKey) =>
        varNameForFontVariant(webfont, variantKey)
      ),
      fontVariantsWithDisplayName: webfont.variants.map((variantKey) => ({
        varName: varNameForFontVariant(webfont, variantKey),
        displayName: getDisplayNameForFontVariant(webfont, variantKey),
        path:
          '@expo-google-fonts/' +
          packageName +
          '/' +
          infoForVariantKey(variantKey).variantFolderName,
      })),
      devPackageDescription: await ejs.renderFile(
        path.join(__dirname, 'templates/dev/DESCRIPTION.md')
      ),
      variantsTable: generateTableForVariants(webfont),
      variantsCount: webfont.variants.length,
    }
  );
}

async function generateDevPackage(fontDirectory, options) {
  const pkgDir = DevPackageDir;
  const version = getNextPackageVersion(pkgDir, options);
  await fsExtra.emptyDir(pkgDir);

  await createFileFromTemplate(
    path.join(pkgDir, 'package.json'),
    path.join(__dirname, 'templates/package/package.json'),
    {
      packageName: 'dev',
      version,
      description: `Load ${fontDirectory.items.length} font families from Google Fonts over the network while developing your Expo app`,
      main: 'index.js',
      directory: 'font-packages/dev',
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

  const archivedData = JSON.parse(await fs.promises.readFile(ArchivedDataPath, 'utf8'));
  const deprecatedVariants = [];
  for (const webfont of archivedData.items) {
    for (const variantKey of webfont.variants) {
      deprecatedVariants.push({
        name: varNameForFontVariant(webfont, variantKey),
        url: validateFontUrlUsesHttps(webfont.files[variantKey]),
      });
    }
  }

  await createFileFromTemplate(
    path.join(pkgDir, 'index.js'),
    path.join(__dirname, 'templates/dev/index.js.ejs'),
    { variants, deprecatedVariants }
  );
  await createFileFromTemplate(
    path.join(pkgDir, 'index.d.ts'),
    path.join(__dirname, 'templates/dev/index.d.ts.ejs'),
    { variants, deprecatedVariants }
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

async function generateFontDirectoryPackage(fontDirectory, options) {
  const version = getNextPackageVersion(FontDirectoryPackageDir, options);
  await fsExtra.emptyDir(FontDirectoryPackageDir);

  // Clone the object
  const fd = JSON.parse(JSON.stringify(fontDirectory));

  for (const webfont of fd.items) {
    const packageName = getPackageNameForWebfont(webfont);
    webfont.expoGoogleFontsPackage = PackageScope + packageName;
    webfont.expoGoogleFontsPackageHomepage = `https://github.com/expo/google-fonts/tree/main/font-packages/${packageName}`;
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
      version,
      description: 'A directory of metadata about the fonts available in `expo-google-fonts`',
      main: 'fontDirectory.json',
      directory: 'font-packages/font-directory',
    }
  );

  await createFileFromTemplate(
    path.join(FontDirectoryPackageDir, 'README.md'),
    path.join(__dirname, 'templates/font-directory/README.md'),
    {}
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
      const { variantFolderName } = infoForVariantKey(variantKey);
      const packageName = getPackageNameForWebfont(webfont);
      const variantFilename = filenameForFontVariant(webfont, variantKey);
      const styleImagePath = `./font-packages/${packageName}/${variantFolderName}/${variantFilename}.png`;
      md += `[![${varNameForWebfont(
        webfont
      )}](${styleImagePath})](https://github.com/expo/google-fonts/tree/main/font-packages/${packageName}#readme)|`;
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
          }](https://github.com/expo/google-fonts/tree/main/font-packages/${getPackageNameForWebfont(
            webfont
          )}#readme)`;
        })
        .join(', '),
      styles: fontDirectory.items
        .map((webfont) => {
          const pkgUrl =
            'https://github.com/expo/google-fonts/tree/main/font-packages/' +
            getPackageNameForWebfont(webfont) +
            '#readme';
          return `### [${webfont.family}](${pkgUrl})\n` + generateTableForVariants(webfont, pkgUrl);
        })
        .join('\n'),
    }
  );
}

module.exports = {
  ProjectRootDir,
  FontAssetsDir,
  FontImagesDir,
  FontPackagesDir,
  PackageVersion,
  ArchivedDataPath,
  varNameForWebfont,
  varNameForFontVariant,
  filenameForFontVariant,
  filepathForFontVariant,
  download,
  generateImageForFontVariant,
  generateFontPackage,
  getPackageNameForWebfont,
  getDefaultVariantKeyForWebfont,
  generatePackageHeaderImage,
  getDisplayNameForFontVariant,
  generateDevPackage,
  generateFontDirectoryPackage,
  generateRootReadme,
  generateGalleryFile,
};
