import fetch from 'cross-fetch';
import fs from 'fs';

export async function download(filepath: string, url: string) {
  const response = await fetch(url);
  // @ts-ignore TODO check what type this should be
  const b = await response.buffer();
  await fs.promises.writeFile(filepath, b);
}
