import fsExtra from 'fs-extra';

import { FontAssetsDir, filepathForFontVariant, download } from './shared';
import { FontItem } from './types';

export async function downloadFontAssets(webfont: FontItem) {
  await fsExtra.ensureDir(FontAssetsDir);

  for (const variantKey of webfont.variants) {
    const ttfUrl = webfont.files[variantKey];
    const filepath = filepathForFontVariant(webfont, variantKey);
    await download(filepath, ttfUrl);
  }
}
