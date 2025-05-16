import fsExtra from 'fs-extra';

import { FontAssetsDir } from './constants';
import { FontItem } from './types';
import { download } from './utils/download';
import { filepathForFontVariant } from './utils/name';

export async function downloadFontAssets(webfont: FontItem) {
  await fsExtra.ensureDir(FontAssetsDir);

  for (const variantKey of webfont.variants) {
    const ttfUrl = webfont.files[variantKey];
    const filepath = filepathForFontVariant(webfont, variantKey);
    await download(filepath, ttfUrl);
  }
}
