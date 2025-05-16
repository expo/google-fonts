import ejs from 'ejs';
import fs from 'fs';
import fsExtra from 'fs-extra';
import path from 'path';

import { ArchivedDataPath, DevPackageDir } from './constants';
import { FontItem } from './types';
import { createFileFromTemplate } from './utils/createFileFromTemplate';
import { getNextPackageVersion } from './utils/getNextPackageVersion';
import { varNameForFontVariant } from './utils/name';

export async function generateDevPackage(fonts: FontItem[], options?: { patch?: boolean }) {
  const pkgDir = DevPackageDir;
  const version = getNextPackageVersion(pkgDir, options);
  await fsExtra.emptyDir(pkgDir);

  await createFileFromTemplate(
    path.join(pkgDir, 'package.json'),
    path.join(__dirname, 'templates/package/package.json'),
    {
      packageName: 'dev',
      version,
      description: `Load ${fonts.length} font families from Google Fonts over the network while developing your Expo app`,
      main: 'index.js',
      directory: 'font-packages/dev',
    }
  );

  function validateFontUrlUsesHttps(fontUrl: string) {
    const url = new URL(fontUrl);
    if (url.protocol === 'http:') url.protocol = 'https:';
    return url.toString();
  }

  const variants = [];
  for (const webfont of fonts) {
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
