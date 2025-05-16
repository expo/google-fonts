import cliProgress from 'cli-progress';
import fsExtra from 'fs-extra';
import { default as PQueue } from 'p-queue';
import physicalCpuCount from 'physical-cpu-count';

import { FontAssetsDir, FontImagesDir, FontPackagesDir } from '../src/constants';
import { generateDevPackage } from '../src/generateDevPackage';
import { generateFontDirectoryPackage } from '../src/generateFontDirectoryPackage';
import { generateFontPackage } from '../src/generateFontPackage';
import { generateGalleryFile } from '../src/generateGalleryFile';
import { generateImageForFontVariant } from '../src/generateImages';
import { generateRootReadme } from '../src/generateRootReadme';
import { FontItem } from '../src/types';
import { download } from '../src/utils/download';
import { filepathForFontVariant, varNameForFontVariant } from '../src/utils/name';

const CPUBoundConcurrency = Math.max(1, physicalCpuCount - 1);
const NetworkBoundConcurrency = 3;

const options = {
  shouldDownloadFonts: true,
  shouldGenerateImages: true,
  shouldGeneratePackages: true,
  shouldGenerateDevPackage: true,
  shouldGenerateFontDirectoryPackage: true,
  shouldGenerateRootReadme: true,
  shouldGenerateGalleryFile: true,
};

async function generateAll() {
  const fontDirectory = require('../data/directory-data.json');
  const fonts: FontItem[] = fontDirectory.items;

  if (options.shouldDownloadFonts) {
    console.log('Downloading all fonts...');
    await downloadAllFonts(fonts);
    console.log('done.');
  }

  if (options.shouldGenerateImages) {
    console.log('Generating image previews for all fonts...');
    await generateImagesForFonts(fonts);
    console.log('done.');
  }

  if (options.shouldGeneratePackages) {
    console.log('Generating all font packages...');
    await generateAllFontPackages(fonts);
    console.log('done.');
  }

  if (options.shouldGenerateDevPackage) {
    console.log('Generating dev package...');
    await generateDevPackage(fonts);
    console.log('done.');
  }

  if (options.shouldGenerateFontDirectoryPackage) {
    console.log('Generating font directory package...');
    await generateFontDirectoryPackage(fonts);
    console.log('done.');
  }

  if (options.shouldGenerateRootReadme) {
    console.log('Generating root README...');
    await generateRootReadme(fonts);
    console.log('done.');
  }

  if (options.shouldGenerateGalleryFile) {
    console.log('Generating gallery file...');
    await generateGalleryFile(fonts);
    console.log('done.');
  }
}

async function downloadAllFonts(fonts: FontItem[]) {
  await fsExtra.ensureDir(FontAssetsDir);

  let totalFonts = 0;
  for (const webfont of fonts) {
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
    for (const webfont of fonts) {
      for (const variantKey of webfont.variants) {
        const ttfUrl = webfont.files[variantKey];
        const filepath = filepathForFontVariant(webfont, variantKey);
        const p = q.add(() => download(filepath, ttfUrl));
        // @ts-ignore
        p.font = varNameForFontVariant(webfont, variantKey);
        (async () => {
          await p;
          i++;
          // @ts-ignore
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

async function generateImagesForFonts(fonts: FontItem[]) {
  await fsExtra.emptyDir(FontImagesDir);
  let totalFonts = 0;
  for (const webfont of fonts) {
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
  const errors: [string, Error][] = [];
  try {
    bar.start(totalFonts, i);
    for (const webfont of fonts) {
      for (const variantKey of webfont.variants) {
        const p = q.add(() => generateImageForFontVariant(webfont, variantKey));
        // @ts-ignore
        p.font = varNameForFontVariant(webfont, variantKey);
        (async () => {
          try {
            await p;
          } catch (e) {
            // @ts-ignore
            errors.push([p.font, e as Error]);
            throw e;
          } finally {
            i++;
            // @ts-ignore
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

async function generateAllFontPackages(fonts: FontItem[]) {
  await fsExtra.emptyDir(FontPackagesDir);

  const webfontCount = fonts.length;

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
    for (const webfont of fonts) {
      const p = q.add(() => generateFontPackage(webfont));
      // @ts-ignore
      p.webfont = webfont;
      // @ts-ignore
      p.family = webfont.family;
      (async () => {
        await p;
        i++;
        // @ts-ignore
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

generateAll();
