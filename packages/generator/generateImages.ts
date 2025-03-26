import fsExtra from 'fs-extra';

import { FontImagesDir, generateImageForFontVariant } from './shared';
import { FontItem } from './types';

export async function generateImages(webfont: FontItem) {
  await fsExtra.ensureDir(FontImagesDir);

  for (const variantKey of webfont.variants) {
    await generateImageForFontVariant(webfont, variantKey);
  }
}
