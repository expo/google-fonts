import cliProgress from 'cli-progress';
import fsExtra from 'fs-extra';
import PQueue from 'p-queue';
import path from 'path';

import { FontLicensesDir, FontLicenseTypes } from './constants';
import { licenseOverrides } from './licenseOverrides';
import { FontItem } from './types';
import { download } from './utils/download';
import { varNameForWebfont } from './utils/name';

const NetworkBoundConcurrency = 3;

export async function downloadLicenses(fonts: FontItem[]) {
  await fsExtra.ensureDir(FontLicensesDir);

  const concurrency = NetworkBoundConcurrency;
  const q = new PQueue({ concurrency });

  const bar = new cliProgress.SingleBar(
    {
      format: ` {bar} {percentage}% | x${concurrency} | ETA: {eta}s | {value}/{total}`,
      clearOnComplete: true,
    },
    cliProgress.Presets.shades_classic
  );

  let i = 0;

  try {
    bar.start(fonts.length, i);
    const promises = fonts.map((font) => {
      return q.add(async () => {
        await checkAndDownloadLicense(font);
        i++;
        bar.update(i);
      });
    });
    await Promise.all(promises);
    await q.onEmpty();
  } catch (e) {
    throw e;
  } finally {
    bar.stop();
  }
}

async function checkLicense(font: FontItem) {
  const override = licenseOverrides.find(([names]) => names.includes(font.family))?.[1];
  if (override) {
    return { ...override, family: font.family };
  }

  const name = font.family.replace(/ /g, '').toLowerCase();

  const ofl = `https://raw.githubusercontent.com/google/fonts/refs/heads/main/ofl/${name}/OFL.txt`;
  const ufl = `https://raw.githubusercontent.com/google/fonts/refs/heads/main/ufl/${name}/LICENCE.txt`;
  const apache = `https://raw.githubusercontent.com/google/fonts/refs/heads/main/apache/${name}/LICENSE.txt`;

  const oflRes = await fetch(ofl, { method: 'HEAD' });
  if (oflRes.ok) {
    return { type: FontLicenseTypes.OFL, url: ofl, family: font.family };
  }

  const apacheRes = await fetch(apache, { method: 'HEAD' });
  if (apacheRes.ok) {
    return { type: FontLicenseTypes.Apache, url: apache, family: font.family };
  }

  const uflRes = await fetch(ufl, { method: 'HEAD' });
  if (uflRes.ok) {
    return { type: FontLicenseTypes.UFL, url: ufl, family: font.family };
  }

  if (oflRes.status === 429 || uflRes.status === 429 || apacheRes.status === 429) {
    console.log('Rate limit hit, waiting 5 seconds');
    await new Promise((resolve) => setTimeout(resolve, 5000));
    return checkLicense(font);
  }

  return { type: 'not found', url: '', family: font.family };
}

async function checkAndDownloadLicense(font: FontItem) {
  const license = await checkLicense(font);
  if (license.type === 'not found') {
    throw new Error(`License not found for ${font.family}`);
  } else {
    const filepath = path.join(FontLicensesDir, varNameForWebfont(font) + '_' + license.type);
    if (license.url) {
      await download(filepath, license.url);
    } else if (license.content) {
      await fsExtra.writeFile(filepath, license.content);
    }
  }
}
