import { FontItem } from './types';

// These families have a FILL axis, but the Developer API lists only their unfilled (FILL=0) static
// instances. The CSS2 API serves a static instance for any point on the axes, so the filled
// instance of each weight is requested there and added as one more variant.
export const FilledFamilies = [
  'Material Symbols',
  'Material Symbols Outlined',
  'Material Symbols Rounded',
  'Material Symbols Sharp',
];

export function filledVariantKey(variantKey: string) {
  return variantKey === 'regular' ? 'filled' : variantKey + 'filled';
}

export async function addFilledVariants(items: FontItem[]) {
  for (const item of items) {
    if (FilledFamilies.includes(item.family)) {
      await addFilledVariantsToFont(item);
    }
  }
  return items;
}

async function addFilledVariantsToFont(webfont: FontItem) {
  const variantKeys = webfont.variants.filter((variantKey) => !variantKey.endsWith('filled'));
  const weights = variantKeys.map((variantKey) => parseInt(variantKey, 10) || 400);
  const family = webfont.family.replace(/ /g, '+');
  const axes = weights.map((weight) => `1,${weight}`).join(';');
  const url = `https://fonts.googleapis.com/css2?family=${family}:FILL,wght@${axes}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Could not fetch the filled ${webfont.family}: ${response.status} ${url}`);
  }
  const css = await response.text();

  const urlsByWeight = new Map<number, string>();
  for (const [, weight, fontUrl] of css.matchAll(/font-weight: (\d+);\s*src: url\(([^)]+)\)/g)) {
    urlsByWeight.set(parseInt(weight, 10), fontUrl);
  }

  const filledVariants: string[] = [];
  const filledFiles: Record<string, string> = {};
  for (const [i, variantKey] of variantKeys.entries()) {
    const fontUrl = urlsByWeight.get(weights[i]);
    if (!fontUrl || !fontUrl.endsWith('.ttf')) {
      throw new Error(`No filled ${webfont.family} ${variantKey} TTF in ${url}`);
    }
    // A package must not mix two releases of the font: the CSS2 API always serves the latest one.
    if (!fontUrl.includes(`/${webfont.version}/`)) {
      throw new Error(`Filled ${webfont.family} is not at ${webfont.version}: ${fontUrl}`);
    }
    const key = filledVariantKey(variantKey);
    filledVariants.push(key);
    filledFiles[key] = fontUrl;
  }

  webfont.variants = [...variantKeys, ...filledVariants];
  webfont.files = { ...webfont.files, ...filledFiles };
}
