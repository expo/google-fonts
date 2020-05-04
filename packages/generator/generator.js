let crypto = require('crypto');
let fs = require('fs');
let path = require('path');

let cliProgress = require('cli-progress');
let fetch = require('cross-fetch');
let fsExtra = require('fs-extra');
let letfPad = require('left-pad');
let prettier = require('prettier');
let protocolBuffers = require('protocol-buffers');

let fontAssetsDir = path.join(__dirname, '..', '..', 'font-assets');
let fontPackagesDir = path.join(__dirname, '..', '..', 'font-packages');
let packageScope = '@expo-google-fonts/';
let packageVersion = '0.0.0'; // require('../../package.json').version;

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

let PrettierOptions = {
  printWidth: 100,
  tabWidth: 2,
  singleQuote: true,
  jsxBracketSameLine: true,
  trailingComma: 'es5',
  arrowParens: 'always',
};

async function main({ verify } = { verify: true }) {
  console.log('Getting latest font directory...');
  let protoUrl = await _getProtoUrl();
  console.log(`Got font directory. Using ${protoUrl}`);

  let fontDirectory = await _readFontsProtoData(protoUrl);
  console.log('Download all font files and validating font URLs and file contents...');
  await downloadAllFonts(fontDirectory);
  console.log('done.');

  console.log('Generating all font packages...');
  await generateAllFontFamilyPackages(fontDirectory);
  console.log('done .');
}

// /// Gets the latest font directory.
// ///
// /// Versioned directories are hosted on the Google Fonts server. We try to fetch
// /// each directory one by one until we hit the last one. We know we reached the
// /// end if requesting the next version results in a 404 response.
// /// Other types of failure should not occur. For example, if the internet
// /// connection gets lost while downloading the directories, we just crash. But
// /// that's okay for now, because the generator is only executed in trusted
// /// environments by individual developers.
async function _getProtoUrl({ initialVersion } = { initialVersion: 1 }) {
  let directoryVersion = initialVersion;

  let url = () => {
    let paddedVersion = letfPad(directoryVersion + '', 3, '0');
    return `http://fonts.gstatic.com/s/f/directory${paddedVersion}.pb`;
  };

  let didReachLatestUrl = false;
  while (!didReachLatestUrl) {
    let response = await fetch(url(directoryVersion));
    if (response.status === 200) {
      directoryVersion++;
    } else if (response.status === 404) {
      didReachLatestUrl = true;
      directoryVersion--;
    } else {
      throw new Error(`Request failed: ${response}`);
    }
  }

  return url(directoryVersion);
}
function filenameForFont(font) {
  return `${_hashToString(font.file.hash)}.ttf`;
}
function _urlForFont(font) {
  return `https://fonts.gstatic.com/s/a/${filenameForFont(font)}`;
}

async function downloadFont(url, font) {
  try {
    let response = await fetch(url);
    let fileContents = await response.buffer();
    let actualFileLength = fileContents.byteLength;
    let hash = crypto.createHash('sha256');
    hash.update(fileContents);
    let actualFileHash = hash.digest('hex');
    if (font.file.file_size !== actualFileLength) {
      throw new Error(
        `Font from ${url} did not match length\nfont.file.file_size=${font.file.file_size} actualFileLength=${actualFileLength}`
      );
    }
    if (_hashToString(font.file.hash) !== actualFileHash) {
      throw new Error(
        `Font from ${url} did not match checksum\nfont.file.hash=${font.file.hash}\nactualFileHash=${actualFileHash}`
      );
    }

    let filename = filenameForFont(font);
    let outputFilePath = path.join(fontAssetsDir, filename);
    await fs.promises.writeFile(outputFilePath, fileContents);
  } catch (e) {
    console.error(`Failed to load font from ${url}\n${e}`);
    throw e;
  }
}

async function isFontDownloaded(font) {
  let filename = filenameForFont(font);
  let fontPath = path.join(fontAssetsDir, filename);
  if (!fs.existsSync(fontPath)) {
    return false;
  }

  // TODO: Add some checking to verify the size and hash of the file (maybe?)
  return true;
}

async function downloadAllFonts(fontDirectory) {
  await fsExtra.ensureDir(fontAssetsDir);

  let totalFonts = 0;
  for (let family of fontDirectory.family) {
    totalFonts += family.fonts.length;
  }

  // TODO: We could probably parallelize these network requests and do
  // something like 4 - 10 at a time and this would be faster
  let bar = new cliProgress.SingleBar(
    {
      format: ' {bar} {percentage}% | ETA: {eta}s | {value}/{total} | {fontFamily}',
      clearOnComplete: true,
    },
    cliProgress.Presets.shades_classic
  );
  bar.start(totalFonts, 0);
  try {
    let i = 0;
    for (let family of fontDirectory.family) {
      for (let font of family.fonts) {
        if (!(await isFontDownloaded(font))) {
          let urlString = _urlForFont(font);
          await downloadFont(urlString, font);
        }
        i++;
        bar.update(i, { fontFamily: family.name });
      }
    }
  } catch (e) {
    throw e;
  } finally {
    bar.stop();
  }

  return { totalFonts };
}

async function generateAllFontFamilyPackages(fontDirectory) {
  await fsExtra.emptyDir(fontPackagesDir);

  for (let family of fontDirectory.family) {
    await generateFontFamilyPackage(family);
  }
}

function _packageNameForFamily(family) {
  return family.name
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

function varNameForFamily(family) {
  return family.name.replace(/\s+/g, '');
}

function varNameForFont(font, family) {
  let weightNumber = font.weight.start;
  let weightName = WeightNames[weightNumber] || '';
  let fontIdentifier = varNameForFamily(family);

  let weightPart = '' + weightName + weightNumber;
  if (weightPart) {
    fontIdentifier += '_' + weightPart;
  }
  let isItalic = font.italic.start === 1;
  if (isItalic) {
    fontIdentifier += '_Italic';
  }
  return fontIdentifier;
}

async function generateFontFamilyPackage(family) {
  let packageName = _packageNameForFamily(family);

  let pkgDir = path.join(fontPackagesDir, packageName);
  await fsExtra.emptyDir(pkgDir);
  await fs.promises.writeFile(
    path.join(pkgDir, 'package.json'),
    prettier.format(
      JSON.stringify({
        name: packageScope + packageName,
        version: packageVersion,
        description: 'Desc',
        main: 'index.js',
        repository: 'https://github.com/expo/google-fonts.git',
        author: 'Expo Team <team@expo.io>',
        license: 'MIT',
      }),
      { ...PrettierOptions, parser: 'json' }
    ),
    'utf8'
  );

  let generatedHeaderComment = `/// Generated by expo-google-fonts/generator
/// Do not edit by hand unless you know what you are doing
///

`;

  let code = generatedHeaderComment;
  let dts = generatedHeaderComment;

  for (let font of family.fonts) {
    let v = varNameForFont(font, family);
    let ffn = filenameForFont(font);
    code += `export const ${v} = require(${JSON.stringify('./' + ffn)});`;
    dts += `export const ${v}: number;\n`;
    await fs.promises.link(path.join(fontAssetsDir, ffn), path.join(pkgDir, ffn));
  }

  await fs.promises.writeFile(
    path.join(pkgDir, 'index.js'),
    prettier.format(code, { ...PrettierOptions, parser: 'babel' }),
    'utf8'
  );

  await fs.promises.writeFile(path.join(pkgDir, 'index.d.ts'), dts, 'utf8');
}

function _hashToString(bytes) {
  return bytes.toString('hex');
}

async function _readFontsProtoData(protoUrl) {
  let protoDef = await fs.promises.readFile(path.join(__dirname, 'fonts.proto'));
  let messages = protocolBuffers(protoDef);
  let response = await fetch(protoUrl);
  let fontsProtoFile = await response.buffer();
  let directory = messages.Directory.decode(fontsProtoFile);
  return directory;
}

function _familyToMethodName(family) {
  let words = family.split(/\s+/);
  let x = [];
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let isFirst = i === 0;
    let isUpperCase = word === word.toUpperCase();
    x.push(
      (isFirst ? word[0].toLowerCase() : word[0].toUpperCase()) +
        (isUpperCase ? word.substr(1).toLowerCase() : word.substr(1))
    );
  }
  return x.join('');
}

async function __getPb() {
  let protoUrl = await _getProtoUrl();
  let r = await fetch(protoUrl);
  let pb = await r.text();
  return pb;
}

async function _getDirectory() {
  let pu = await _getProtoUrl();
  return _readFontsProtoData(pu);
}

module.exports = {
  _getDirectory,
  _getProtoUrl,
  _readFontsProtoData,
  main,
  __getPb,
  _hashToString,
  _familyToMethodName,
  downloadAllFonts,
  downloadFont,
  _urlForFont,
  _packageNameForFamily,
  generateAllFontFamilyPackages,
  generateFontFamilyPackage,
};

if (require.main === module) {
  (async () => {
    await main();
  })();
}
