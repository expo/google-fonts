import { DirectoryDataPath } from '../src/constants';
import { generateRootReadme } from '../src/generateRootReadme';
import { FontItem } from '../src/types';

const fontDirectory = require(DirectoryDataPath);
const fonts: FontItem[] = fontDirectory.items;

async function main() {
  await generateRootReadme(fonts);
}

main();
