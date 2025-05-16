import cliProgress from 'cli-progress';
import fsExtra from 'fs-extra';
import PQueue from 'p-queue';

import { FontAssetsDir } from './constants';
import { FontItem } from './types';
import { download } from './utils/download';
import { filepathForFontVariant, varNameForFontVariant } from './utils/name';

const NetworkBoundConcurrency = 3;

export async function downloadFonts(fonts: FontItem[]) {
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
