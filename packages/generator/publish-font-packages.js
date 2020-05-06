let path = require('path');

let { default: PQueue } = require('p-queue');
let spawnAsync = require('@expo/spawn-async');
let cliProgress = require('cli-progress');

let generator = require('./generator');

async function publishAllFontPackages() {
  let fontDirectory = await generator.getDirectory();
  let { fontPackagesDir } = generator;
  let i = 0;
  let errors = [];
  let concurrency = 12;
  let q = new PQueue({ concurrency });
  let bar = new cliProgress.SingleBar(
    {
      format: ' {bar} {percentage}% | ETA: {eta}s | {value}/{total} | {errorCount} errors | {font}',
      clearOnComplete: true,
    },
    cliProgress.Presets.shades_classic
  );
  bar.start(fontDirectory.family.length + 1, i);
  bar.update(i, { font: 'dev' });
  try {
    let devPkgDir = path.join(fontPackagesDir, 'dev');
    try {
      await spawnAsync('npm', ['publish'], { cwd: devPkgDir });
    } catch (e) {
      errors.push(['dev', e]);
    } finally {
      i++;
    }

    for (let family of fontDirectory.family) {
      let pkgDir = path.join(generator.fontPackagesDir, generator.getPackageNameForFamily(family));
      let p = q.add(() => spawnAsync('npm', ['publish'], { cwd: pkgDir }));
      p.fontFamily = family.name;
      (async () => {
        try {
          await p;
        } catch (e) {
          errors.push([family.name, e]);
        } finally {
          i++;
          bar.update(i, { font: p.fontFamily, errorCount: errors.length });
        }
      })();
    }
    await q.onEmpty();
  } catch (e) {
    throw e;
  } finally {
    bar.stop();
  }

  console.log(`${errors.length} errors`);
  for (let [name, e] of errors) {
    console.error(name + '\n' + e + '\n\n');
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
