let path = require('path');

let { default: PQueue } = require('p-queue');
let spawnAsync = require('@expo/spawn-async');
let cliProgress = require('cli-progress');

let generator = require('./generator');

async function publishAllFontPackages() {
  let fontDirectory = await generator.getDirectory();
  let { FontPackagesDir } = generator;
  let i = 0;
  let errors = [];
  let concurrency = 4;
  let q = new PQueue({ concurrency });
  let bar = new cliProgress.SingleBar(
    {
      format: ` {bar} {percentage}% | x${concurrency} | ETA: {eta}s | {value}/{total} | {errorCount} errors | {font}`,
      clearOnComplete: true,
    },
    cliProgress.Presets.shades_classic
  );
  bar.start(fontDirectory.items.length + 2, i);
  bar.update(i, { font: 'dev', errorCount: errors.length });
  try {
    let devPkgDir = path.join(FontPackagesDir, 'dev');
    try {
      await spawnAsync('npm', ['publish'], { cwd: devPkgDir });
    } catch (e) {
      errors.push(['dev', e]);
    } finally {
      i++;
    }

    bar.update(i, { font: 'font-directory' });
    let dirPkgDir = path.join(FontPackagesDir, 'font-directory');
    try {
      await spawnAsync('npm', ['publish'], { cwd: dirPkgDir });
    } catch (e) {
      errors.push(['font-directory', e]);
    } finally {
      i++;
    }

    for (let webfont of fontDirectory.items) {
      let pkgDir = path.join(FontPackagesDir, generator.getPackageNameForWebfont(webfont));
      let p = q.add(() => spawnAsync('npm', ['publish'], { cwd: pkgDir }));
      p.fontFamily = webfont.family;
      (async () => {
        try {
          await p;
        } catch (e) {
          console.error(e);
          errors.push([webfont.family, e]);
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
