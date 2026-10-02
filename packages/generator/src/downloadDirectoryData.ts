import fs from 'fs';

import { addFilledVariants } from './addFilledVariants';
import { DirectoryDataPath } from './constants';
import { getGoogleFontsApiKey } from './googleFontsApiKey';
import { FontItem } from './types';

export async function downloadDirectoryData() {
  const googleFontsApiKey = getGoogleFontsApiKey();

  const url = `https://www.googleapis.com/webfonts/v1/webfonts?key=${googleFontsApiKey}&prettyPrint=false&sort=date`;
  const response = await fetch(url);
  const fetchedDirectoryData = (await response.json()) as { items: FontItem[] };
  await addFilledVariants(fetchedDirectoryData.items);

  await fs.promises.writeFile(DirectoryDataPath, JSON.stringify(fetchedDirectoryData, null, 2));

  return fetchedDirectoryData.items;
}
