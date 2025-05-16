import ejs from 'ejs';
import path from 'path';

import { ProjectRootDir } from './constants';
import contributors from './contributors';
import { FontItem } from './types';
import { createFileFromTemplate } from './utils/createFileFromTemplate';
import { getDefaultVariantKeyForWebfont } from './utils/getDefaultVariantKeyForWebfont';
import {
  infoForVariantKey,
  getPackageNameForWebfont,
  varNameForWebfont,
  filenameForFontVariant,
} from './utils/name';

async function getFeaturedGalleryMarkdown(fonts: FontItem[]) {
  const featuredFonts = [
    'Inter',
    'Manrope',
    'Allan',

    'Roboto',
    'Lusitana',
    'Nunito',

    'Bangers',
    'Source Sans 3',
    'Roboto Condensed',

    'Playfair Display',
    'Ubuntu',
    'Oswald',

    'Balsamiq Sans',
    'Jost',
    'Lato',
  ];

  const featured = [];

  // There are more efficient ways to do this but who cares
  for (const fontName of featuredFonts) {
    for (const webfont of fonts) {
      if (webfont.family === fontName) {
        featured.push(webfont);
      }
    }
  }

  let md = `
||||
|-|-|-|
`;

  for (let row = 0; featured.length > 0; row++) {
    md += '|';
    for (let col = 0; col < 3; col++) {
      const webfont = featured.shift();
      if (!webfont) {
        break;
      }
      const variantKey = getDefaultVariantKeyForWebfont(webfont);
      const { variantFolderName } = infoForVariantKey(variantKey);
      const packageName = getPackageNameForWebfont(webfont);
      const variantFilename = filenameForFontVariant(webfont, variantKey);
      const styleImagePath = `./font-packages/${packageName}/${variantFolderName}/${variantFilename}.png`;
      md += `[![${varNameForWebfont(
        webfont
      )}](${styleImagePath})](https://github.com/expo/google-fonts/tree/main/font-packages/${packageName}#readme)|`;
    }
    md += '\n';
  }
  return md;
}

export async function generateRootReadme(fonts: FontItem[]) {
  let variantCount = 0;
  for (const webfont of fonts) {
    variantCount += webfont.variants.length;
  }

  await createFileFromTemplate(
    path.join(ProjectRootDir, 'README.md'),
    path.join(__dirname, 'templates/README.md'),
    {
      fontsCount: fonts.length,
      variantCount,
      contributors: contributors.map(
        (c) => `- ${c.name} ([@${c.github}](https://github.com/${c.github})) - ${c.affiliation}`
      ),
      galleryMarkdown: await getFeaturedGalleryMarkdown(fonts),
      devPackageDescription: await ejs.renderFile(
        path.join(__dirname, 'templates/dev/DESCRIPTION.md')
      ),
    }
  );
}
