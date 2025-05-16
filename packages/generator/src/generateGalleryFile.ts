import path from 'path';

import { ProjectRootDir } from './constants';
import { FontItem } from './types';
import { createFileFromTemplate } from './utils/createFileFromTemplate';
import { generateTableForVariants } from './utils/generateTableForVariants';
import { getPackageNameForWebfont } from './utils/name';

export async function generateGalleryFile(fonts: FontItem[]) {
  const dc: FontItem[] = JSON.parse(JSON.stringify(fonts));
  dc.sort((a, b) => (a.family < b.family ? -1 : 1));

  await createFileFromTemplate(
    path.join(ProjectRootDir, 'GALLERY.md'),
    path.join(__dirname, 'templates/GALLERY.md'),
    {
      fontFamilies: dc
        .map((webfont) => {
          return `[${
            webfont.family
          }](https://github.com/expo/google-fonts/tree/main/font-packages/${getPackageNameForWebfont(
            webfont
          )}#readme)`;
        })
        .join(', '),
      styles: fonts
        .map((webfont) => {
          const pkgUrl =
            'https://github.com/expo/google-fonts/tree/main/font-packages/' +
            getPackageNameForWebfont(webfont) +
            '#readme';
          return `### [${webfont.family}](${pkgUrl})\n` + generateTableForVariants(webfont, pkgUrl);
        })
        .join('\n'),
    }
  );
}
