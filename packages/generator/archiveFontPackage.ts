import fsExtra from 'fs-extra';
import path from 'path';

import {
  ArchivedDataPath,
  FontPackagesDir,
  getPackageNameForWebfont,
  ProjectRootDir,
} from './shared';
import { FontItem } from './types';

const FontArchiveDir = path.join(ProjectRootDir, 'font-archive');

export async function archiveFontPackage(webfont: FontItem) {
  await fsExtra.ensureDir(FontArchiveDir);

  const dirName = getPackageNameForWebfont(webfont);
  if (!(await fsExtra.exists(path.join(FontPackagesDir, dirName)))) {
    console.warn(`Font package ${webfont.family} not found at ${dirName}`);
    return;
  }
  if (await fsExtra.exists(path.join(FontArchiveDir, dirName))) {
    console.warn(`Font package ${webfont.family} is already archived, replacing with the new one`);
    await fsExtra.remove(path.join(FontArchiveDir, dirName));
  }
  await fsExtra.move(path.join(FontPackagesDir, dirName), path.join(FontArchiveDir, dirName));

  const archivedData = JSON.parse(await fsExtra.readFile(ArchivedDataPath, 'utf8'));
  archivedData.items.push(webfont);
  await fsExtra.writeFile(ArchivedDataPath, JSON.stringify(archivedData, null, 2));
}
