import cliProgress from 'cli-progress';
import fsExtra from 'fs-extra';
import PQueue from 'p-queue';
import path from 'path';

import { FontLicensesDir, FontLicenseTypes } from './constants';
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

const materialLicense =
  'https://raw.githubusercontent.com/google/material-design-icons/refs/heads/master/LICENSE';

const materialIcons = [
  'Material Symbols',
  'Material Icons Two Tone',
  'Material Icons Sharp',
  'Material Icons Round',
  'Material Icons Outlined',
  'Material Icons',
  'Material Symbols Outlined',
  'Material Symbols Rounded',
  'Material Symbols Sharp',
];

async function checkLicense(font: FontItem) {
  if (materialIcons.includes(font.family)) {
    return { type: FontLicenseTypes.Apache, url: materialLicense, family: font.family };
  }

  // No license file
  // It's marked as OFL and the other font by the same author has the license file so we'll reuse it
  if (font.family === 'Kumar One Outline') {
    return {
      type: FontLicenseTypes.OFL,
      url: 'https://raw.githubusercontent.com/google/fonts/refs/heads/main/ofl/kumarone/OFL.txt',
      family: font.family,
    };
  }

  // No license file
  // It's marked as OFL and the other font by the same author has the license file so we'll reuse it
  if (font.family === 'M PLUS Rounded 1c') {
    return {
      type: FontLicenseTypes.OFL,
      url: 'https://raw.githubusercontent.com/google/fonts/refs/heads/main/ofl/mpluscodelatin/OFL.txt',
      family: font.family,
    };
  }

  // missing license file for the new fonts form the same author
  if (
    [
      'Edu VIC WA NT Hand Pre',
      'Edu QLD Hand',
      'Edu SA Hand',
      'Edu NSW ACT Hand',
      'Edu VIC WA NT Hand',
      'Edu NSW ACT Cursive',
      'Edu NSW ACT Hand Pre',
    ].includes(font.family)
  ) {
    return {
      type: FontLicenseTypes.OFL,
      url: 'https://raw.githubusercontent.com/google/fonts/refs/heads/main/ofl/edunswacthand/OFL.txt',
      family: font.family,
    };
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
    await download(filepath, license.url);
  }
}
