import fsExtra from 'fs-extra';
import path from 'path';
import semver from 'semver';

import { PackageVersion } from '../constants';

export async function getNextPackageVersion(packageDir: string, options?: { patch?: boolean }) {
  const packagePath = path.join(packageDir, 'package.json');

  // Check if the font package file exists
  if (!(await fsExtra.exists(packagePath))) {
    return PackageVersion;
  }
  const { version: currentVersion } = JSON.parse(await fsExtra.readFile(packagePath, 'utf-8'));
  if ((!options || !options.patch) && semver.lt(currentVersion, PackageVersion)) {
    return PackageVersion;
  }

  return semver.inc(currentVersion, 'patch');
}
