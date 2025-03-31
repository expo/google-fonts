const spawnAsync = require('@expo/spawn-async');
const cliProgress = require('cli-progress');
const fs = require('fs');
const { default: PQueue } = require('p-queue');
const path = require('path');

const ProjectRootDir = path.join(__dirname, '..', '..');
const FontArchiveDir = path.join(ProjectRootDir, 'font-archive');

async function deprecateArchivedFontPackages() {
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
  const packages = (await fs.promises.readdir(FontArchiveDir, { withFileTypes: true }))
    .filter((file) => file.isDirectory())
    .map((dirent) => dirent.name);

  bar.start(packages.length, i);
  try {
    for (const pkg of packages) {
      const packageName = '@expo-google-fonts/' + pkg;
      const p = q.add(() =>
        spawnAsync('npm', [
          'deprecate',
          packageName,
          'This font has been removed from Google Fonts and will no longer receive updates.',
        ])
      );
      p.fontFamily = pkg;
      (async () => {
        try {
          await p;
        } catch (e) {
          console.error(e);
          errors.push([pkg, e]);
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
    console.log('Deprecating archived font packages...');
    await deprecateArchivedFontPackages();
    console.log('done.');
  })();
}

module.exports = { deprecateArchivedFontPackages };
