import fs from 'fs';
import path from 'path';
import semver from 'semver';

import { PackageVersion } from '../constants';

export function getNextPackageVersion(packageDir: string, options?: { patch?: boolean }) {
  if (!options || !options.patch || !fs.existsSync(packageDir)) {
    return PackageVersion;
  }

  const packageJson = require(path.join(packageDir, 'package.json'));
  return semver.inc(packageJson.version, 'patch');
}
