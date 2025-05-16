import { FontItem } from '../types';
import {
  getPackageNameForWebfont,
  filenameForFontVariant,
  varNameForFontVariant,
  infoForVariantKey,
} from './name';

export function generateTableForVariants(webfont: FontItem, pkgUrl?: string) {
  let fontPackagesPrefix = './font-packages/' + getPackageNameForWebfont(webfont) + '/';
  if (!pkgUrl) {
    fontPackagesPrefix = './';
  }

  let md = `
||||
|-|-|-|
`;
  const variantImageCells = [];
  for (const variantKey of webfont.variants) {
    const variantFolderName = infoForVariantKey(variantKey).variantFolderName;
    const styleImagePath =
      fontPackagesPrefix +
      variantFolderName +
      '/' +
      filenameForFontVariant(webfont, variantKey) +
      '.png';
    const fi = varNameForFontVariant(webfont, variantKey);
    if (pkgUrl) {
      variantImageCells.push(`[![${fi}](${styleImagePath})](${pkgUrl})`);
    } else {
      variantImageCells.push(`![${fi}](${styleImagePath})`);
    }
  }

  for (let row = 0; variantImageCells.length > 0; row++) {
    md += '|';
    for (let col = 0; col < 3; col++) {
      const cell = variantImageCells.shift() || '';
      md += cell + '|';
    }
    md += '|\n';
  }

  return md;
}
