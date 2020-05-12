let fs = require('fs');
let path = require('path');

let cliProgress = require('cli-progress');
let { default: PQueue } = require('p-queue');
let fetch = require('cross-fetch');
let fsExtra = require('fs-extra');
let physicalCpuCount = require('physical-cpu-count');
let prettier = require('prettier');
let spawnAsync = require('@expo/spawn-async');

let contributors = require('./contributors');
let googleFontsApiKey = require('./google-fonts-api-key');

// Constants

let WeightNames = {
  '100': 'Thin',
  '200': 'ExtraLight',
  '300': 'Light',
  '400': 'Regular',
  '500': 'Medium',
  '600': 'SemiBold',
  '700': 'Bold',
  '800': 'ExtraBold',
  '900': 'Black',
};

let ProjectRootDir = path.join(__dirname, '..', '..');
let FontPackagesDir = path.join(ProjectRootDir, 'dist2', 'font-packages');
let FontAssetsDir = path.join(ProjectRootDir, 'dist2', 'font-assets');
let FontImagesDir = path.join(ProjectRootDir, 'dist2', 'font-images');

let PackageScope = '@expo-google-fonts/';
let PackageVersion = require('../../package.json').version;

let PrettierOptions = {
  printWidth: 100,
  tabWidth: 2,
  singleQuote: true,
  jsxBracketSameLine: true,
  trailingComma: 'es5',
  arrowParens: 'always',
};

let ReexportHook = `
export { useFonts } from './useFonts';
`;

let CPUBoundConcurrency = Math.max(1, physicalCpuCount - 1);
let NetworkBoundConcurrency = 12;
let IOBoundConcurrency = 2;

async function main({ images } = { images: true }) {
  console.log('Getting directory');
  let fontDirectory = await getDirectory();
  console.log('done.');

  console.log('Downloading all fonts...');
  await downloadAllFonts(fontDirectory);
  console.log('done.');

  if (images) {
    console.log('Generating image previews for all fonts...');
    console.log('done.');
  }
}

function infoForVariantKey(variantKey) {
  let weight = parseInt(variantKey) || 400; // `regular` and `italic` don't have a number before them
  let isItalic = variantKey.endsWith('italic');
  let weightName = WeightNames[weight];
  let suffix = '_' + weight + weightName;
  if (isItalic) {
    suffix += '_Italic';
  }
  return {
    weight,
    isItalic,
    weightName,
    suffix,
  };
}

function varNameForWebfont(webfont) {
  return webfont.family.replace(/\s+/g, '');
}

function varNameForFontVariant(webfont, variantKey) {
  let info = infoForVariantKey(variantKey);
  return varNameForWebfont(webfont) + info.suffix;
}

async function getDirectory() {
  let url = `https://www.googleapis.com/webfonts/v1/webfonts?key=${googleFontsApiKey}&prettyPrint=false&sort=date`;
  let response = await fetch(url);
  return await response.json();
}

function filenameForFontVariant(webfont, variantKey) {
  return varNameForFontVariant(webfont, variantKey) + '.ttf';
}

function filepathForFontVariant(webfont, variantKey) {
  return path.join(FontAssetsDir, filenameForFontVariant(webfont, variantKey));
}

async function downloadAllFonts(fontDirectory) {
  await fsExtra.ensureDir(FontAssetsDir);

  let totalFonts = 0;
  for (let webfont of fontDirectory.items) {
    totalFonts += webfont.variants.length;
  }

  let concurrency = NetworkBoundConcurrency;
  let q = new PQueue({ concurrency });

  let bar = new cliProgress.SingleBar(
    {
      format: ` {bar} {percentage}% | x${concurrency} | ETA: {eta}s | {value}/{total} | {font}`,
      clearOnComplete: true,
    },
    cliProgress.Presets.shades_classic
  );

  let i = 0;
  bar.start(totalFonts, i);
  try {
    for (let webfont of fontDirectory.items) {
      for (let variantKey of webfont.variants) {
        let ttfUrl = webfont.files[variantKey];
        let filepath = filepathForFontVariant(webfont, variantKey);
        let p = q.add(() => download(filepath, ttfUrl));
        p.font = varNameForFontVariant(webfont, variantKey);
        (async () => {
          await p;
          i++;
          bar.update(i, { font: p.font });
        })();
      }
    }
    await q.onEmpty();
  } catch (e) {
    throw e;
  } finally {
    bar.stop();
  }
}

async function download(filepath, url) {
  let response = await fetch(url);
  let b = await response.buffer();
  await fs.promises.writeFile(filepath, b);
}

async function generateImagesForFonts(fontDirectory) {
  await fsExtra.emptyDir(FontImagesDir);
  let totalFonts = 0;
  for (let webfont of fontDirectory.items) {
    totalFonts += webfont.variants.length;
  }

  let concurrency = CPUBoundConcurrency;
  let q = new PQueue({ concurrency });

  let bar = new cliProgress.SingleBar(
    {
      format: ` {bar} {percentage}% | x${concurrency} | ETA: {eta}s | {value}/{total} | {font}`,
      clearOnComplete: true,
    },
    cliProgress.Presets.shades_classic
  );
  let i = 0;
  let errors = [];
  try {
    bar.start(totalFonts, i);
    for (let webfont of fontDirectory.items) {
      for (let variantKey of webfont.variants) {
        let p = q.add(() => generateImageForFontVariant(webfont, variantKey));
        p.font = varNameForFontVariant(webfont, variantKey);
        (async () => {
          try {
            await p;
          } catch (e) {
            throw e;
            errors.push([p.font, e]);
          } finally {
            i++;
            bar.update(i, { font: p.font });
          }
        })();
      }
    }
    await q.onEmpty();
  } catch (e) {
    throw e;
  } finally {
    bar.stop();
  }
  if (errors.length > 0) {
    console.error('Image Generation Errors:\n' + errors.map((x) => x[0]).join(', '));
  }
}

async function generateImageForFontVariant(webfont, variantKey) {
  let phrase = varNameForFontVariant(webfont, variantKey) + '\n';
  phrase += 'Pack my box with five\ndozen liquor jugs, please.';
  let outputFilepath = path.join(
    FontImagesDir,
    filenameForFontVariant(webfont, variantKey) + '.png'
  );
  await generatePng(outputFilepath, phrase, webfont, variantKey, 40);
}

async function generatePng(outputFilepath, text, webfont, variantKey, pointsize, density) {
  let fill = 'black';
  let background = 'none';
  let fontFilepath = filepathForFontVariant(webfont, variantKey);
  pointsize = pointsize || 40;
  density = density || 144; // 458; // iPhone 11 Pro Max = 458
  let units = 'pixelsperinch';
  let args = [
    '-background',
    background,
    '-fill',
    fill,
    '-units',
    '' + units,
    '-density',
    '' + density,
    '-font',
    fontFilepath,
    '-pointsize',
    '' + pointsize,
    'label:' + text,
    outputFilepath,
  ];
  try {
    await spawnAsync('./magick', args);
  } catch (e) {
    // Some fonts, like Noto Color Emoji Compat, break ImageMagick here
    // and so we just link the empty png but rethrow the error so that the
    // caller needs to catch it and isn't surprised by an error
    await fs.promises.link('./empty.png', outputFilepath);
    throw e;
  }
}

async function generateAllFontPackages(fontDirectory) {
  await fsExtra.emptyDir(FontPackagesDir);

  let webfontCount = fontDirectory.items.length;

  let concurrency = IOBoundConcurrency;

  let bar = new cliProgress.SingleBar(
    {
      format: ` {bar} {percentage}% | x${concurrency} | ETA: {eta}s | {value}/{total} | {family}`,
      clearOnComplete: true,
    },
    cliProgress.Presets.shades_classic
  );
  let q = new PQueue({ concurrency });
  let i = 0;
  bar.start(webfontCount, i);
  try {
    for (let webfont of fontDirectory.items) {
      let p = q.add(() => generateFontPackage(webfont));
      p.webfont = webfont;
      p.family = webfont.family;
      (async () => {
        await p;
        i++;
        bar.update(i, { family: p.family });
      })();
    }
    await q.onEmpty();
  } catch (e) {
    throw e;
  } finally {
    bar.stop();
  }
}

function getPackageNameForWebfont(webfont) {
  return webfont.family
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

async function generateFontPackage(webfont) {
  let packageName = getPackageNameForWebfont(webfont);
  let pkgDir = path.join(FontPackagesDir, packageName);

  // empty dir
  await fsExtra.emptyDir(pkgDir);

  // package.json
  await fs.promises.writeFile(
    path.join(pkgDir, 'package.json'),
    prettier.format(
      JSON.stringify({
        name: PackageScope + packageName,
        version: PackageVersion,
        description: `Use the ${webfont.family} font family from Google Fonts in your Expo app`,
        main: 'index.js',
        repository: 'https://github.com/expo/google-fonts.git',
        homepage: `https://github.com/expo/google-fonts/tree/master/font-packages/${packageName}#readme`,
        author: 'Expo Team <team@expo.io>',
        license: 'MIT',
        publishConfig: {
          access: 'public',
        },
      }),
      { ...PrettierOptions, parser: 'json' }
    ),
    'utf8'
  );

  // .prettierrc
  await fs.promises.writeFile(
    path.join(pkgDir, '.prettierrc'),
    prettier.format(JSON.stringify(PrettierOptions), { ...PrettierOptions, parser: 'json' }),
    'utf8'
  );

  // index.js & index.d.ts
  let generatedHeaderComment = `/// Generated by expo-google-fonts/generator
  /// Do not edit by hand unless you know what you are doing
  ///
  
  `;

  let code = generatedHeaderComment;
  let dts = generatedHeaderComment;

  code += ReexportHook + '\n';

  code += `export const __webfontMetadata__ = ${JSON.stringify(webfont)};\n\n`;

  for (let variantKey of webfont.variants) {
    let v = varNameForFontVariant(webfont, variantKey);
    let ffn = filenameForFontVariant(webfont, variantKey);
    code += `export const ${v} = require(${JSON.stringify('./' + ffn)});\n`;
    dts += `export const ${v}: number;\n`; // TODO: Is there an easy way to do type-aliasing so we could refer to this as a module or something?

    // link fonts and image previews
    await fs.promises.link(path.join(FontAssetsDir, ffn), path.join(pkgDir, ffn));
    await fs.promises.link(path.join(FontImagesDir, ffn + '.png'), path.join(pkgDir, ffn + '.png'));

    await fs.promises.writeFile(
      path.join(pkgDir, 'index.js'),
      prettier.format(code, { ...PrettierOptions, parser: 'babel' }),
      'utf8'
    );

    await fs.promises.writeFile(path.join(pkgDir, 'index.d.ts'), dts, 'utf8');

    // Include the useFonts hook so we can use that
    await fs.promises.link('./useFonts.js', path.join(pkgDir, 'useFonts.js'));
    await fs.promises.link('./useFonts.d.ts', path.join(pkgDir, 'useFonts.d.ts'));

    // font-family.png
    let packageImageFilePath = path.join(pkgDir, 'font-family.png');
    try {
      await generatePackageHeaderImage(packageImageFilePath, webfont);
    } catch (e) {
      // TODO: Maybe log an error?
      throw e;
    }
  }
}

async function generatePackageHeaderImage(outputFilePath, webfont) {
  let variantKey = getDefaultVariantKeyForWebfont(webfont);
  let name = webfont.family;
  await generatePng(outputFilePath, name, webfont, variantKey, 96);
}

function getDefaultVariantKeyForWebfont(webfont) {
  let Priority = [
    'regular',
    '500',
    '300',
    '600',
    '200',
    '700',
    '100',
    '800',
    '900',
    'italic',
    '500italic',
    '300italic',
    '600italic',
    '200italic',
    '700italic',
    '100italic',
    '800italic',
    '900italic',
  ];
  for (let vk of Priority) {
    if (webfont.variants.includes(vk)) {
      return vk;
    }
  }
  // Weird; this is unexpected, but let's just return the first variant we find
  // since none of the ones we expect are provided
  return webfont.variants[0];
}

let t = {
  downloadAllFonts: async () => {
    let d = await getDirectory();
    return await downloadAllFonts(d);
  },
  generateImagesForFonts: async () => {
    let d = await getDirectory();
    return await generateImagesForFonts(d);
  },
  generatePng: async () => {
    let d = await getDirectory();
    return await generatePng('out.png', 'Hello World', d.items[3], '700italic');
  },
  generateFontPackage: async (n = 3) => {
    let d = await getDirectory();
    return await generateFontPackage(d.items[n]);
  },
};

module.exports = {
  t,
  getDirectory,
  downloadAllFonts,
  filepathForFontVariant,
  filenameForFontVariant,
  varNameForFontVariant,
  varNameForWebfont,
  generateImageForFontVariant,
  generateImagesForFonts,
  generatePng,
  getDefaultVariantKeyForWebfont,
  generateFontPackage,
};

if (require.main === module) {
  (async () => {
    await main();
  })();
}
