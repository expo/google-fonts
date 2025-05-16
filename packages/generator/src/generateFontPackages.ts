import cliProgress from 'cli-progress';
import PQueue from 'p-queue';
import physicalCpuCount from 'physical-cpu-count';

import { FontItem } from './types';
import { generateFontPackage } from './utils/generateFontPackage';

const CPUBoundConcurrency = Math.max(1, physicalCpuCount - 1);

export async function generateFontPackages(fonts: FontItem[], options?: { patch?: boolean }) {
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
      const p = q.add(() => generateFontPackage(webfont, options));
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
