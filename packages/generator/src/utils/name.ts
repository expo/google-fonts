import path from 'path';

import { FontAssetsDir, fontPrefix, VariantNames, WeightNames } from '../constants';
import { FontItem } from '../types';

export function varNameForWebfont(webfont: FontItem) {
  const variant = webfont.family.replace(/\s+/g, '');
  return variant.match(/^\d/) ? fontPrefix + variant : variant;
}

export function infoForVariantKey(variantKey: string) {
  const weight = parseInt(variantKey, 10) || 400; // `regular` and `italic` don't have a number before them
  const isItalic = variantKey.endsWith('italic');
  const weightName = WeightNames[weight as keyof typeof WeightNames];
  let suffix = '_' + weight + weightName;
  let variantFolderName = weight + weightName;
  if (isItalic) {
    suffix += '_Italic';
    variantFolderName += '_Italic';
  }
  return {
    weight,
    isItalic,
    weightName,
    suffix,
    variantFolderName,
  };
}

export function varNameForFontVariant(webfont: FontItem, variantKey: string) {
  const info = infoForVariantKey(variantKey);
  return varNameForWebfont(webfont) + info.suffix;
}

export function getPackageNameForWebfont(webfont: FontItem) {
  return webfont.family
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

export function filepathForFontVariant(webfont: FontItem, variantKey: string) {
  return path.join(FontAssetsDir, filenameForFontVariant(webfont, variantKey));
}

export function filenameForFontVariant(webfont: FontItem, variantKey: string) {
  return varNameForFontVariant(webfont, variantKey) + '.ttf';
}

export function getDisplayNameForFontVariant(webfont: FontItem, variantKey: string) {
  return webfont.family + ' ' + VariantNames[variantKey as keyof typeof VariantNames];
}
