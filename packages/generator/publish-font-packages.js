let path = require('path');

let { default: pQueue } = require('p-queue');
let spawnAsync = require('@expo/spawn-async');
let cliProgress = require('cli-progress');

let generator = require('./generator');

async function publishAllFontPackages() {
  let fontDirectory = generator._getDirectory();
  let i = 0;
  let bar = new cliProgress.SingleBar(
    {
      format: ' {bar} {percentage}% | ETA: {eta}s | {value}/{total} | {font}',
      clearOnComplete: true,
    },
    cliProgress.Presets.shades_classic
  );
  bar.start(fontDirectory.family.length + 1, i);
  bar.update(i, { font: 'dev' });
  try {
    let devPkgDir = path.join(fontPackagesDir, 'dev');
    await spawnAsync('npm', ['publish'], { cwd: devPkgDir });

    for (let family of fontDirectory) {
      bar.update(i, { font: fontDirectory.family[i].name });
      let pkgDir = path.join(generator.fontPackagesDir, generator.getPackageNameForFamily(family));
      await spawnAsync('npm', ['publish'], { cwd: pkgDir });
    }
  } catch (e) {
    throw e;
  } finally {
    bar.stop();
  }
}

if (require.main === module) {
  (async () => {
    console.log('Publishing all font packages...');
    await publishAllFontPackages();
    console.log('done.');
  })();
}

module.exports = {
  publishAllFontPackages,
};
