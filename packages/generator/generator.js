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
let projectRootDir = path.join(__dirname, '..', '..');
let packageScope = '@expo-google-fonts/';
let packageVersion = require('../../package.json').version;

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

async function main({ images } = { images: true }) {
  console.log('Getting latest font directory...');
  let protoUrl = await _getProtoUrl();
  // console.log(`Got font directory. Using ${protoUrl}`);
  console.log('done.');

  let fontDirectory = await _readFontsProtoData(protoUrl);
  console.log('Download all font files and validating font URLs and file contents...');
  await downloadAllFonts(fontDirectory);
  console.log('done.');

  if (images) {
    console.log('Generating image previews for all fonts...');
    await generateImagesForFonts(fontDirectory);
    console.log('done.');
  }

  console.log('Generating all font packages...');
  await generateAllFontFamilyPackages(fontDirectory);
  console.log('done.');

  console.log('Generating dev font package...');
  await generateDevPackage(fontDirectory);
  console.log('done.');

  console.log('Generating Root README');
  await generateRootReadme(fontDirectory);
  console.log('done.');

  console.log('Generating Gallery...');
  await generateGalleryFile(fontDirectory);
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
      format: ' {bar} {percentage}% | ETA: {eta}s | {value}/{total} | {font}',
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
          // await downloadFont(urlString, font);
          let p = q.add(() => downloadFont(urlString, font));
          p.font = varNameForFont(font, family);
          (async () => {
            await p;
            i++;
            bar.update(i, { font: p.font });
          })();
        }
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
  let concurrency = Math.max(1, physicalCpuCount - 1);
  let q = new PQueue({ concurrency });
  let i = 0;
  try {
    bar.start(familyCount, 0);

    await fsExtra.emptyDir(fontPackagesDir);

    let i = 0;
    for (let family of fontDirectory.family) {
      let p = q.add(() => generateFontFamilyPackage(family));
      p.fontFamily = family.name;
      (async () => {
        await p;
        i++;
        bar.update(i, { fontFamily: p.fontFamily });
      })();
      // await generateFontFamilyPackage(family);
    }
    await q.onEmpty();
  } catch (e) {
    throw e;
  } finally {
    bar.stop();
  }
}

let devPackageMarkdown = `
If you are trying out lots of different fonts, you can try using the [\`@expo-google-fonts/dev\` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.`;

async function generateReadmeForFamily(family) {
  let familyUrl = `https://fonts.google.com/specimen/${family.name.replace(/ /g, '+')}`;
  let packageName = getPackageNameForFamily(family);
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

This package lets you use the [**${
    family.name
  }**](${familyUrl}) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v${packageVersion}

## ${family.name}

![${family.name}](./font-family.png)

This font family contains [${family.fonts.length} style${
    family.fonts.length > 1 ? 's' : ''
  }](#gallery).

${fontStyleVars.map((fsv) => '- `' + fsv + '`').join('\n')}

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
\`\`\`sh
expo install @expo-google-fonts/${packageName} expo-font @use-expo/font
\`\`\`

Now add code like this to your project
\`\`\`js
${prettier.format(jsExample, { ...PrettierOptions, parser: 'babel' })}
\`\`\`

## Gallery

${family.fonts
  .map((font) => {
    let styleImagePath = './' + filenameForFont(font) + '.png';
    let fi = varNameForFont(font, family);
    return `##### ${fi}
![${fi}](${styleImagePath})
`;
  })
  .join('\n')}

## Use During Development
${devPackageMarkdown}

## Links

- [${family.name} on Google Fonts](${familyUrl})
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/${packageName})
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/${packageName})
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [\`@expo-google-fonts/dev\` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
`;

  return md;
}

function getPackageNameForFamily(family) {
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
  let packageName = getPackageNameForFamily(family);

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

  // Add a .prettierrc file to this package
  await fs.promises.writeFile(
    path.join(pkgDir, '.prettierrc'),
    prettier.format(JSON.stringify(PrettierOptions), { ...PrettierOptions, parser: 'json' }),
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
    await fs.promises.link(path.join(fontImagesDir, ffn + '.png'), path.join(pkgDir, ffn + '.png'));
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

  let packageImageFilePath = path.join(pkgDir, 'font-family.png');
  try {
    await generatePackageImage(packageImageFilePath, family);
  } catch (e) {
    // TODO: Maybe log an error?
  }
}

async function generatePackageImage(outputFilePath, family) {
  let font = getStandardFontForFamily(family);
  let name = family.name;
  await generatePng(outputFilePath, name, font, family, 96);
}

async function generatePreviewImages(fontDirectory) {
  let dir = path.join(projectRootDir, 'font-family-small-preview-images');
  await fsExtra.emptyDir(dir);
  for (let family of fontDirectory.family) {
    let font = getStandardFontForFamily(family);
    let name = family.name;
    let outputFilePath = path.join(dir, varNameForFamily(family) + '.png');
    await generatePng(outputFilePath, name, font, family, 24, 72);
  }
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

  // Add a .prettierrc file to this package
  await fs.promises.writeFile(
    path.join(pkgDir, '.prettierrc'),
    prettier.format(JSON.stringify(PrettierOptions), { ...PrettierOptions, parser: 'json' }),
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
  console.log(`Generating ${concurrency} images at a time`);

  let bar = new cliProgress.SingleBar(
    {
      format: ' {bar} {percentage}% | ETA: {eta}s | {value}/{total} | {fontFamily}',
      clearOnComplete: true,
    },
    cliProgress.Presets.shades_classic
  );
  let errors = [];
  try {
    bar.start(totalFonts, 0);
    let q = new PQueue({ concurrency });
    let i = 0;
    // q.on('active', () => {
    //   i++;
    //   bar.update(i, { fontFamily: '?' });
    // });

    await fsExtra.emptyDir(fontImagesDir);
    for (let family of fontDirectory.family) {
      for (let font of family.fonts) {
        let p = q.add(() => generateImageForFont(font, family));
        p.font = varNameForFont(font, family);
        (async () => {
          try {
            await p;
          } catch (e) {
            errors.push([p.font, e]);
          } finally {
            i++;
            bar.update(i, { fontFamily: p.font });
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
  // let fill = 'black';
  // let background = 'none';
  // let fontFilePath = path.join(fontAssetsDir, filenameForFont(font));
  // let density = 144;
  // let pointsize = 28;
  outputFilePath = outputFilePath || path.join(fontImagesDir, filenameForFont(font) + '.png');
  // let args = [
  //   '-background',
  //   background,
  //   '-fill',
  //   fill,
  //   '-font',
  //   fontFilePath,
  //   '-pointsize',
  //   '' + pointsize,
  //   '-density',
  //   '' + density,
  //   'label:' + phrase,
  //   outputFilePath,
  // ];
  // // console.log(args);
  // // Use try/catch because there is always an error here:
  // //  ███████████████████████████░░░░░░░░░░░░░ 66% | ETA: 284s | 1839/2774 | Noto Co0
  // // with Noto Color Emoji
  // try {
  //   await spawnAsync('./magick', args);
  // } catch (e) {
  //   // console.error(e);
  //   // console.error('Failed to generate image for ' + varNameForFont(font, family));
  //   await fs.promises.link('./empty.png', outputFilePath);
  //   throw e;
  // }
  await generatePng(outputFilePath, phrase, font, family, 40);
}

async function generatePng(outputFilePath, text, font, family, pointsize, density) {
  // TODO: Add padding to these images so that they don't cut off parts of fonts that
  // extend past the normal bounding box. See the 'A' in Allan for an example.
  let fill = 'black';
  let background = 'none';
  let fontFilePath = path.join(fontAssetsDir, filenameForFont(font));
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
    fontFilePath,
    '-pointsize',
    '' + pointsize,
    'label:' + text,
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
    // console.error('Failed to generate image for ' + varNameForFont(font, family));
    await fs.promises.link('./empty.png', outputFilePath);
    throw e;
  }
}

function getStandardFontForFamily(family) {
  let standard = family.fonts[0];
  for (let font of family.fonts) {
    if (font.weight.start === 400) {
      // Don't replace 400 fonts with italic fonts
      if (font.italic.start === 1 && standard.weight.start !== 400) {
        standard = font;
      }
    }
  }
  return standard;
}

async function getMarkdownTableOfFamilies(fontDirectory) {
  let rows = [];
  let rowSize = 5;
  let row = [];
  for (let family of fontDirectory.family) {
    let name = family.name;
    let filePath = './font-family-small-preview-images/' + varNameForFamily(family) + '.png';
    row.push([name, filePath, getPackageNameForFamily(family)]);
    if (row.length >= rowSize) {
      rows.push(row);
      row = [];
    }
  }
  let md = '\n';
  md += '|' + Array(rowSize).fill(' ').join('|') + '|\n';
  md += '|' + Array(rowSize).fill('-').join('|') + '|\n';
  for (let row of rows) {
    md +=
      '|' +
      row
        .map(
          ([name, filePath, packageName]) =>
            `[![${name}](${filePath})](https://github.com/expo/google-fonts/tree/master/font-packages/${packageName}#readme)`
        )
        .join('|') +
      '|';
    for (let i = row.length; i < rowSize; i++) {
      md += '|';
    }
    md += '\n';
  }
  md += '\n';
  return md;
}

async function generateRootReadme(fontDirectory) {
  let pkgVersion = require(path.join('..', '..', 'package.json')).version;
  let outputFilePath = path.join('..', '..', 'README.md');

  let md = `# expo-google-fonts

The \`@expo-google-fonts\` packages for Expo allow you to easily use 
any of ${fontDirectory.family.length} fonts (and their variants) from 
[fonts.google.com](https://fonts.google.com) in your Expo app.

v${pkgVersion}

## Usage

Here is an example of using the [Nunito font family](https://fonts.google.com/specimen/Nunito) in a very simple project.

#### Install the package for the font you want

\`\`\`sh
expo install @expo-google-fonts/nunito expo-font @use-expo/font
\`\`\`

#### In your app

\`\`\`js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Nunito_Regular400,
  Nunito_SemiBold600_Italic,
} from '@expo-google-fonts/nunito';

export default () => {
  let [fontsLoaded] = useFonts({
    Nunito_Regular400,
    Nunito_SemiBold600_Italic,
  });

  let fontSize = 24;
  let paddingVrtical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Nunito_Regular400' }}>
          Nunito_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Nunito_SemiBold600_Italic' }}>
          Nunito_SemiBold600_Italic
        </Text>

      </View>
    );
  }
};

\`\`\`


### Example Project

Here is a [minimal but complete example](https://github.com/expo/google-fonts/tree/master/example)

Each individual font family package README includes a complete example of using that font family.

## Available Fonts

Browse all of these on [fonts.google.com](https://fonts.google.com).

${await getMarkdownTableOfFamilies(fontDirectory)}

${
  ''
  //   fontDirectory.family
  //   .map((family) => ${fontDirectory.family
  // {
  //     return `[${
  //       family.name
  //     }](https://github.com/expo/google-fonts/tree/master/font-packages/${getPackageNameForFamily(
  //       family
  //     )}#readme)`;
  //   })
  //   .join(', ')
}


## @expo-google-fonts/dev

${devPackageMarkdown}

${
  ''
  // ## Gallery

  // The best way to browse available Google Fonts to find one you want to use
  // is probably to just look at the directory at [fonts.google.com](https://fonts.google.com/).

  // But there is a [gallery](./GALLERY.md) you can use to scan through previews of all available fonts and styles.
}

## License

Licensed under the MIT License

## Contributing

Contributions are very welcome! Note that everything under \`font-packages\` and also this README are generated.
So, please make any changes you want to make to the [generator](https://github.com/expo/google-fonts/tree/master/packages/generator#readme) instead of the packages themselves.

## Links

- [Google Fonts](https://fonts.google.com)
- [Using Custom Fonts Guide in the Expo docs](https://docs.expo.io/guides/using-custom-fonts/)
- [\`google_fonts\` Flutter Package](https://pub.dev/packages/google_fonts)
- [Gallery of all available styles in Expo Google Fonts](./GALLERY.md)
- [Generation of these packages and this readme](https://github.com/expo/google-fonts/tree/master/packages/generator#readme)

`;

  await fs.promises.writeFile(outputFilePath, md, 'utf8');
}

async function generateGalleryFile(fontDirectory) {
  let md = `# Expo Google Fonts Gallery

A visual gallery showing you every font style available in Expo Fonts Google packages.
Each image links to the package containing that font style.

`;
  for (let family of fontDirectory.family) {
    let pkgUrl =
      'https://github.com/expo/google-fonts/tree/master/font-packages/' +
      getPackageNameForFamily(family) +
      '#readme';
    md += `### [${family.name}](${pkgUrl})\n`;
    for (let font of family.fonts) {
      let styleImagePath =
        './font-packages/' + getPackageNameForFamily(family) + '/' + filenameForFont(font) + '.png';
      let fi = varNameForFont(font, family);
      md += `#### ${fi}
[![${fi}](${styleImagePath})](${pkgUrl})

`;
    }
  }

  let outputFilePath = path.join(projectRootDir, 'GALLERY.md');
  await fs.promises.writeFile(outputFilePath, md, 'utf8');
}

async function __getPb() {
  let protoUrl = await _getProtoUrl();
  let r = await fetch(protoUrl);
  let pb = await r.text();
  return pb;
}

async function getDirectory() {
  let pu = await _getProtoUrl();
  return _readFontsProtoData(pu);
}

async function test(n = 0, n2 = 0) {
  let d = await getDirectory();
  let family = d.family[n];
  let font = family.fonts[n2];
  await generateImageForFont(font, family, './z.png');
}

async function test2() {
  let fontDirectory = await getDirectory();
  await generateImagesForFonts(fontDirectory);
}

async function test3() {
  let fontDirectory = await getDirectory();
  await generateRootReadme(fontDirectory);
}

async function test4() {
  let fontDirectory = await getDirectory();
  await generateGalleryFile(fontDirectory);
}

async function test5() {
  let fontDirectory = await getDirectory();
  await generatePreviewImages(fontDirectory);
}

module.exports = {
  test5,
  test,
  test2,
  getDirectory,
  _getProtoUrl,
  _readFontsProtoData,
  main,
  __getPb,
  _hashToString,
  _familyToMethodName,
  downloadAllFonts,
  downloadFont,
  _urlForFont,
  getPackageNameForFamily,
  generateAllFontFamilyPackages,
  generateFontFamilyPackage,
  generateImagesForFonts,
  fontPackagesDir,
  varNameForFont,
  generateRootReadme,
  test3,
  test4,
};

if (require.main === module) {
  (async () => {
    await main();
  })();
}
