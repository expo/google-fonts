import cliProgress from 'cli-progress';
import PQueue from 'p-queue';
import physicalCpuCount from 'physical-cpu-count';

import { FontItem } from './types';
import { generateImageForFontVariant } from './utils/generateImages';
import { varNameForFontVariant } from './utils/name';

const CPUBoundConcurrency = Math.max(1, physicalCpuCount - 1);

export async function generateImagesForFonts(fonts: FontItem[]) {
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
