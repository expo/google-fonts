const cliProgress = require('cli-progress');
const ejs = require('ejs');
const fs = require('fs');
const fsExtra = require('fs-extra');
const { default: PQueue } = require('p-queue');
const path = require('path');
const physicalCpuCount = require('physical-cpu-count');

const contributors = require('./contributors');
const fontDirectory = require('./directory-data.json');
const {
  download,
  ProjectRootDir,
  FontAssetsDir,
  FontImagesDir,
  filepathForFontVariant,
  varNameForFontVariant,
  filenameForFontVariant,
  varNameForWebfont,
  generateImageForFontVariant,
  generatePng,
  FontPackagesDir,
  generateFontPackage,
  getPackageNameForWebfont,
} = require('./shared');
const { createFileFromTemplate } = require('./shared');
const { PackageVersion } = require('./shared');
const { getDefaultVariantKeyForWebfont } = require('./shared');
const { generateTableForVariants } = require('./shared');
const { generatePackageHeaderImage } = require('./shared');
const { getDisplayNameForFontVariant } = require('./shared');

const FontDirectoryPackageDir = path.join(ProjectRootDir, 'font-packages', 'font-directory');
const DevPackageDir = path.join(FontPackagesDir, 'dev');

const PackageScope = '@expo-google-fonts/';

const CPUBoundConcurrency = Math.max(1, physicalCpuCount - 1);
const NetworkBoundConcurrency = 3;

async function main({ images, download } = { images: true, download: true }) {
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

const t = {
  downloadAllFonts: async () => {
    return await downloadAllFonts(fontDirectory);
  },
  generateImagesForFonts: async () => {
    return await generateImagesForFonts(fontDirectory);
  },
  generatePng: async () => {
    return await generatePng('out.png', 'Hello World', fontDirectory.items[3], '700italic');
  },
  generateFontPackage: async (n = 3) => {
    return await generateFontPackage(fontDirectory.items[n]);
  },
  generatePackageHeaderImage: async (n = 3) => {
    return await generatePackageHeaderImage('header.png', fontDirectory.items[n]);
  },

  generateDevPackage: async () => {
    return await generateDevPackage(fontDirectory);
  },
  generateFontDirectoryPackage: async () => {
    return await generateFontDirectoryPackage(fontDirectory);
  },
  generateRootReadme: async () => {
    return await generateRootReadme(fontDirectory);
  },
  generateGalleryFile: async () => {
    return await generateGalleryFile(fontDirectory);
  },
  generateAllFontPackages: async () => {
    return await generateAllFontPackages(fontDirectory);
  },
  getTotalFontVariants: async () => {
    let t = 0;
    for (const webfont of fontDirectory.items) {
      t += webfont.variants.length;
    }
    return t;
  },
};

module.exports = {
  t,
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
