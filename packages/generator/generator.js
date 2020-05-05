let crypto = require('crypto');
let fs = require('fs');
let path = require('path');

let cliProgress = require('cli-progress');
let fetch = require('cross-fetch');
let fsExtra = require('fs-extra');
let letfPad = require('left-pad');
let { default: PQueue } = require('p-queue');
let physicalCpuCount = require('physical-cpu-count');
let prettier = require('prettier');
let protocolBuffers = require('protocol-buffers');
let spawnAsync = require('@expo/spawn-async');

let fontAssetsDir = path.join(__dirname, '..', '..', 'font-assets');
let fontPackagesDir = path.join(__dirname, '..', '..', 'font-packages');
let fontImagesDir = path.join(__dirname, '..', '..', 'font-images');
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
  // console.log(`Got font directory. Using ${protoUrl}`);
  console.log('done.');

  let fontDirectory = await _readFontsProtoData(protoUrl);
  console.log('Download all font files and validating font URLs and file contents...');
  await downloadAllFonts(fontDirectory);
  console.log('done.');

  console.log('Generating all font packages...');
  await generateAllFontFamilyPackages(fontDirectory);
  console.log('done .');

  console.log('Generating dev font package...');
  await generateDevPackage(fontDirectory);
  console.log('done.');
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

  let bar = new cliProgress.SingleBar(
    {
      format: ' {bar} {percentage}% | ETA: {eta}s | {value}/{total} | {fontFamily}',
      clearOnComplete: true,
    },
    cliProgress.Presets.shades_classic
  );
  bar.start(totalFonts, 0);

  let q = new PQueue({ concurrency: 12 });

  try {
    let i = 0;
    for (let family of fontDirectory.family) {
      for (let font of family.fonts) {
        if (!(await isFontDownloaded(font))) {
          let urlString = _urlForFont(font);
          bar.update(i, { fontFamily: family.name });
          await q.add(() => downloadFont(urlString, font));
          // await downloadFont(urlString, font);
        }
        i++;
      }
    }
    await q.onEmpty();
  } catch (e) {
    throw e;
  } finally {
    bar.stop();
  }

  return { totalFonts };
}

async function generateAllFontFamilyPackages(fontDirectory) {
  let familyCount = fontDirectory.family.length;
  let bar = new cliProgress.SingleBar(
    {
      format: ' {bar} {percentage}% | ETA: {eta}s | {value}/{total} | {fontFamily}',
      clearOnComplete: true,
    },
    cliProgress.Presets.shades_classic
  );
  try {
    bar.start(familyCount, 0);

    await fsExtra.emptyDir(fontPackagesDir);

    let i = 0;
    for (let family of fontDirectory.family) {
      await generateFontFamilyPackage(family);
      i++;
      bar.update(i, { fontFamily: family.name });
    }
  } catch (e) {
    throw e;
  } finally {
    bar.stop();
  }
}

async function generateReadmeForFamily(family) {
  let familyUrl = `https://fonts.google.com/specimen/${family.name.replace(/ /g, '+')}`;
  let packageName = _packageNameForFamily(family);
  let fontStyleVars = family.fonts.map((font) => varNameForFont(font, family));

  let jsExample = `
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import { AppLoading } from "expo";
import { useFonts } from "@use-expo/font";
import {${fontStyleVars.join(',')}} from '@expo-google-fonts/${packageName}';

export default () => {

  let [fontsLoaded] = useFonts({
    ${fontStyleVars.join(',')}
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      ${fontStyleVars
        .map(
          (fsv) => `
        <Text style={{ fontSize, paddingVertical, fontFamily: ${JSON.stringify(
          fsv
        )} }}>${fsv}</Text>
      `
        )
        .join('\n')}
      </View>
    );
  }
};

  `;

  let md = `# @expo-google-fonts/${packageName}

This package lets you use the **${
    family.name
  }** font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## ${family.name}

[${family.name} on Google Fonts](${familyUrl})

The ${family.name} font family contains ${family.fonts.length} style${
    family.fonts.length > 1 ? 's' : ''
  }.

${fontStyleVars.map((fsv) => '- `' + fsv + '`').join('\n')}

## Usage

Run this command frpm the shell to install the package in your project
\`\`\`sh
yarn add @expo-google-fonts/${packageName} expo-font @use-expo/font
\`\`\`

Now add code like this to your project
\`\`\`js
${prettier.format(jsExample, { ...PrettierOptions, parser: 'babel' })}
\`\`\`


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
`;

  return md;
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
        description: `Use the ${family.name} font family from Google Fonts in your Expo app`,
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
    code += `export const ${v} = require(${JSON.stringify('./' + ffn)});\n`;
    dts += `export const ${v}: number;\n`;
    await fs.promises.link(path.join(fontAssetsDir, ffn), path.join(pkgDir, ffn));
  }

  await fs.promises.writeFile(
    path.join(pkgDir, 'index.js'),
    prettier.format(code, { ...PrettierOptions, parser: 'babel' }),
    'utf8'
  );

  await fs.promises.writeFile(path.join(pkgDir, 'index.d.ts'), dts, 'utf8');

  await fs.promises.writeFile(
    path.join(pkgDir, 'README.md'),
    await generateReadmeForFamily(family),
    'utf8'
  );
}

async function generateDevPackage(fontDirectory) {
  let packageName = 'dev';
  let pkgDir = path.join(fontPackagesDir, packageName);
  await fsExtra.emptyDir(pkgDir);
  await fs.promises.writeFile(
    path.join(pkgDir, 'package.json'),
    prettier.format(
      JSON.stringify({
        name: packageScope + packageName,
        version: packageVersion,
        description: `Load ${fontDirectory.family.length} font families from Google Fonts over the network while developing your Expo app`,
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

  for (let family of fontDirectory.family) {
    for (let font of family.fonts) {
      let v = varNameForFont(font, family);
      let ttfUrl = _urlForFont(font);
      code += `export const ${v} = ${JSON.stringify(ttfUrl)};\n`;
      dts += `export const ${v}: string;\n`;
    }
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

async function generateImagesForFonts(fontDirectory) {
  let totalFonts = 0;
  for (let family of fontDirectory.family) {
    totalFonts += family.fonts.length;
  }

  let concurrency = Math.max(physicalCpuCount - 1, 1);
  console.log({ concurrency });

  let bar = new cliProgress.SingleBar(
    {
      format: ' {bar} {percentage}% | ETA: {eta}s | {value}/{total} | {fontFamily}',
      clearOnComplete: true,
    },
    cliProgress.Presets.shades_classic
  );
  try {
    bar.start(totalFonts, 0);
    let q = new PQueue({ concurrency });

    await fsExtra.emptyDir(fontImagesDir);
    let i = 0;
    for (let family of fontDirectory.family) {
      for (let font of family.fonts) {
        bar.update(i, { fontFamily: family.name });
        await q.add(() => generateImageForFont(font, family));
        i++;
      }
    }
    await q.onEmpty();
  } catch (e) {
    throw e;
  } finally {
    bar.stop();
  }
}

async function generateImageForFont(font, family, outputFilePath) {
  let phrases = [
    // 'It was funny going along that road.',
    // 'That was when I was a kitchen corporal.',
    // 'I am not really a good bull fighter.',
    // 'It rained all through the evacuation.',
    // // "He had so much equipment on and looked awfully surprised and fell down into the garden.",
    // 'Then three more came over further down the wall.',
    // 'It was a frightfully hot day.',
    // // "We’d jammed an absolutely perfect barricade across the bridge.",
    // 'The other five stood very quietly, against the wall.',
    // 'You and me we’ve made a separate peace.',
    // 'The shelling moved further up the line.',
    // 'The last I heard of him the Swiss had him in jail near Sion.',
    // 'He didn’t listen to me, he was listening so hard for the music to start.',
    // "Pack my box with five dozen liquor jugs",
  ];
  // let phrase = 'Pack my box with five dozen liquor jugs';
  // let phrase = 'That was when I was a kitchen corporal.';
  let phrase = varNameForFont(font, family) + '\n';
  // phrase += 'The quick brown fox' + '\n' + 'jumps over the lazy dog';
  phrase += 'Pack my box with five\ndozen liquor jugs, please.';

  // ccheever@ccheever-XPS-13-7390-2-in-1:~/projects/google-fonts/packages/generator$
  //./magick -background none -fill black -font '../../font-assets/ff034a0073d594043d35a5058bf44df331be4b22576c8a753b210bcc55789e50.ttf' -pointsize 40 -density 300 label:"It was funny going along that road.\nThat was when I was a kitchen corporal." z.png
  // -pointsize 40 -density 300 label:"It was funny going along that road.\nThat was when I was a kitchen corporal." z.png

  // let font = family.fonts[0];
  let fill = 'black';
  let background = 'none';
  let fontFilePath = path.join(fontAssetsDir, filenameForFont(font));
  let density = 144;
  let pointsize = 28;
  outputFilePath = outputFilePath || path.join(fontImagesDir, filenameForFont(font) + '.png');
  let args = [
    '-background',
    background,
    '-fill',
    fill,
    '-font',
    fontFilePath,
    '-pointsize',
    '' + pointsize,
    '-density',
    '' + density,
    'label:' + phrase,
    outputFilePath,
  ];
  // console.log(args);
  // Use try/catch because there is always an error here:
  //  ███████████████████████████░░░░░░░░░░░░░ 66% | ETA: 284s | 1839/2774 | Noto Co0
  // with Noto Color Emoji
  try {
    await spawnAsync('./magick', args);
  } catch (e) {
    // console.error(e);
    console.error('Failed to generate image for ' + varNameForFont(font, family));
    await fs.promises.link('./empty.png', outputFilePath);
  }
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

async function test(n = 0, n2 = 0) {
  let d = await _getDirectory();
  let family = d.family[n];
  let font = family.fonts[n2];
  await generateImageForFont(font, family, './z.png');
}

async function test2() {
  let fontDirectory = await _getDirectory();
  await generateImagesForFonts(fontDirectory);
}

module.exports = {
  test,
  test2,
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
  generateImagesForFonts,
};

if (require.main === module) {
  (async () => {
    await main();
  })();
}
