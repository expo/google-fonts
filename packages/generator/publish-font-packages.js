const spawnAsync = require('@expo/spawn-async');
const cliProgress = require('cli-progress');
const { default: PQueue } = require('p-queue');
const path = require('path');

const generator = require('./generator');

async function publishAllFontPackages() {
  const fontDirectory = await generator.getDirectory();
  const { FontPackagesDir } = generator;
  let i = 0;
  const errors = [];
  const concurrency = 4;
  const q = new PQueue({ concurrency });
  const bar = new cliProgress.SingleBar(
    {
      format: ` {bar} {percentage}% | x${concurrency} | ETA: {eta}s | {value}/{total} | {errorCount} errors | {font}`,
      clearOnComplete: true,
    },
    cliProgress.Presets.shades_classic
  );
  bar.start(fontDirectory.items.length + 2, i);
  bar.update(i, { font: 'dev', errorCount: errors.length });
  try {
    const devPkgDir = path.join(FontPackagesDir, 'dev');
    try {
      await spawnAsync('npm', ['publish', '--otp=185035'], { cwd: devPkgDir });
    } catch (e) {
      errors.push(['dev', e]);
    } finally {
      i++;
    }

    bar.update(i, { font: 'font-directory' });
    const dirPkgDir = path.join(FontPackagesDir, 'font-directory');
    try {
      await spawnAsync('npm', ['publish'], { cwd: dirPkgDir });
    } catch (e) {
      errors.push(['font-directory', e]);
    } finally {
      i++;
    }

    for (const webfont of fontDirectory.items) {
      const pkgDir = path.join(FontPackagesDir, generator.getPackageNameForWebfont(webfont));
      const p = q.add(() => spawnAsync('npm', ['publish'], { cwd: pkgDir }));
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
  for (const [name, e] of errors) {
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
