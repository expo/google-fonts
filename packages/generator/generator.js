const cliProgress = require('cli-progress');
const fsExtra = require('fs-extra');
const { default: PQueue } = require('p-queue');
const physicalCpuCount = require('physical-cpu-count');

const fontDirectory = require('./directory-data.json');
const {
  download,
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
  getDefaultVariantKeyForWebfont,
  generatePackageHeaderImage,
  getDisplayNameForFontVariant,
  generateDevPackage,
  generateFontDirectoryPackage,
  generateRootReadme,
  generateGalleryFile,
} = require('./shared');

const CPUBoundConcurrency = Math.max(1, physicalCpuCount - 1);
const NetworkBoundConcurrency = 3;

async function main({ images, download } = { images: true, download: true }) {
  // if (download) {
  //   console.log('Downloading all fonts...');
  //   await downloadAllFonts(fontDirectory);
  //   console.log('done.');
  // }

  // if (images) {
  //   console.log('Generating image previews for all fonts...');
  //   await generateImagesForFonts(fontDirectory);
  //   console.log('done.');
  // }

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
