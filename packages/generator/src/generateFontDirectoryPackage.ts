import fs from 'fs';
import fsExtra from 'fs-extra';
import path from 'path';

import { PackageScope, FontDirectoryPackageDir } from './constants';
import { FontItem } from './types';
import { createFileFromTemplate } from './utils/createFileFromTemplate';
import { getNextPackageVersion } from './utils/getNextPackageVersion';
import { getPackageNameForWebfont } from './utils/name';

export async function generateFontDirectoryPackage(
  fonts: FontItem[],
  options?: { patch?: boolean }
) {
  const version = getNextPackageVersion(FontDirectoryPackageDir, options);
  await fsExtra.emptyDir(FontDirectoryPackageDir);

  // Clone the object
  const items = JSON.parse(JSON.stringify(fonts));

  for (const webfont of items) {
    const packageName = getPackageNameForWebfont(webfont);
    webfont.expoGoogleFontsPackage = PackageScope + packageName;
    webfont.expoGoogleFontsPackageHomepage = `https://github.com/expo/google-fonts/tree/main/font-packages/${packageName}`;
  }

  await fs.promises.writeFile(
    path.join(FontDirectoryPackageDir, 'fontDirectory.json'),
    JSON.stringify({ kind: 'webfonts#webfontList', items }),
    'utf8'
  );

  await createFileFromTemplate(
    path.join(FontDirectoryPackageDir, 'package.json'),
    path.join(__dirname, 'templates/package/package.json'),
    {
      packageName: 'font-directory',
      version,
      description: 'A directory of metadata about the fonts available in `expo-google-fonts`',
      main: 'fontDirectory.json',
      directory: 'font-packages/font-directory',
      license: 'MIT',
    }
  );

  await createFileFromTemplate(
    path.join(FontDirectoryPackageDir, 'README.md'),
    path.join(__dirname, 'templates/font-directory/README.md'),
    {}
  );
}
