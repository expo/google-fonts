import fsExtra from 'fs-extra';
import path from 'path';

import { FontLicensesDir } from './constants';
import { FontItem } from './types';
import { download } from './utils/download';
import { varNameForWebfont } from './utils/name';

export async function downloadLicenses(fonts: FontItem[]) {
  for (const font of fonts) {
    const license = await checkLicense(font);
    if (license.license === 'not found') {
      console.log(`License not found for ${font.family}`);
    } else {
      await downloadFontLicense({
        font,
        url: license.url,
        type: license.license as 'OFL' | 'UFL' | 'Apache',
      });
    }
  }
}

async function checkLicense(font: FontItem) {
  const name = font.family.replace(/ /g, '').toLowerCase();

  const ofl = `https://raw.githubusercontent.com/google/fonts/refs/heads/main/ofl/${name}/OFL.txt`;
  const ufl = `https://raw.githubusercontent.com/google/fonts/refs/heads/main/ufl/${name}/UFL.txt`;
  const apache = `https://raw.githubusercontent.com/google/fonts/refs/heads/main/apache/${name}/LICENSE.txt`;

  const oflRes = await fetch(ofl, { method: 'HEAD' });
  if (oflRes.ok) {
    return { license: 'OFL', url: ofl, family: font.family };
  }

  const apacheRes = await fetch(apache, { method: 'HEAD' });
  if (apacheRes.ok) {
    return { license: 'Apache', url: apache, family: font.family };
  }

  const uflRes = await fetch(ufl, { method: 'HEAD' });
  if (uflRes.ok) {
    return { license: 'UFL', url: ufl, family: font.family };
  }

  if (oflRes.status === 429 || uflRes.status === 429 || apacheRes.status === 429) {
    console.log('Rate limit hit, waiting 5 seconds');
    await new Promise((resolve) => setTimeout(resolve, 5000));
    return checkLicense(font);
  }

  return { license: 'not found', url: '', family: font.family };
}

async function downloadFontLicense({
  font,
  url,
  type,
}: {
  url: string;
  type: 'OFL' | 'UFL' | 'Apache';
  font: FontItem;
}) {
  await fsExtra.ensureDir(FontLicensesDir);

  const filepath = path.join(FontLicensesDir, varNameForWebfont(font) + '_' + type + '.txt');
  await download(filepath, url);
}
