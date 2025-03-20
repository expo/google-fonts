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

let VariantNames = {
  '100': 'Thin',
  '200': 'Extra Light',
  '300': 'Light',
  regular: 'Regular',
  '500': 'Medium',
  '600': 'Semi Bold',
  '700': 'Bold',
  '800': 'Extra Bold',
  '900': 'Black',
  '100italic': 'Thin Italic',
  '200italic': 'Extra Light Italic',
  '300italic': 'Light Italic',
  italic: 'Italic',
  '500italic': 'Medium Italic',
  '600italic': 'Semi Bold Italic',
  '700italic': 'Bold Italic',
  '800italic': 'Extra Bold Italic',
  '900italic': 'Black Italic',
};

let ProjectRootDir = path.join(__dirname, '..', '..');
let FontPackagesDir = path.join(ProjectRootDir, 'font-packages');
let FontAssetsDir = path.join(ProjectRootDir, 'font-assets');
let FontImagesDir = path.join(ProjectRootDir, 'font-images');
let FontDirectoryPackageDir = path.join(ProjectRootDir, 'font-packages', 'font-directory');
let DevPackageDir = path.join(FontPackagesDir, 'dev');

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
let ReexportHookDefinition = `
export { useFonts } from './useFonts';
`;

let CPUBoundConcurrency = Math.max(1, physicalCpuCount - 1);
let NetworkBoundConcurrency = 3;
let IOBoundConcurrency = 2;

const fontPrefix = 'font';

async function main({ images, download } = { images: true, download: true }) {
  console.log('Getting directory');
  let fontDirectory = await getDirectory();
  console.log('done.');

  if (download) {
    console.log('Downloading all fonts...');
    await downloadAllFonts(fontDirectory);
    console.log('done.');
  }

  if (images) {
    console.log('Generating image previews for all fonts...');
    await generateImagesForFonts(fontDirectory);
    console.log('done.');
  }

  console.log('Generating all font packages...');
  await generateAllFontPackages(fontDirectory);
  console.log('done.');

  console.log('Generating dev package...');
  await generateDevPackage(fontDirectory);
  console.log('done.');

  console.log('Generating font directory package...');
  await generateFontDirectoryPackage(fontDirectory);
  console.log('done.');

  console.log('Generating root README and GALLERY markdown files...');
  await generateRootReadme(fontDirectory);
  await generateGalleryFile(fontDirectory);
  console.log('done.');
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
  const variant = webfont.family.replace(/\s+/g, '');
  return (variant.match(/^\d/)) ? fontPrefix + variant : variant

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
  let fill = '#1B1F23';
  let background = '#FFFFFF';
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
    '-bordercolor',
    background, 
    '-border', 
    '32x16',
    '-strip',
    outputFilepath,
  ];
  try {
    //await spawnAsync('./magick', args);
    await spawnAsync('magick', args);
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

  let concurrency = CPUBoundConcurrency;

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
  let packageName = webfont.family
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
  if (packageName.match(/^\d/)) {
    // package name must start with a letter
    packageName = fontPrefix + packageName;
  }
  return packageName;
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
  dts += ReexportHookDefinition + '\n';

  code += `export { default as __metadata__ } from './metadata.json';\n`;
  dts += `export const __metadata__: Any;\n`;

  // metadata.json
  await fs.promises.writeFile(
    path.join(pkgDir, 'metadata.json'),
    prettier.format(JSON.stringify(webfont), {
      ...PrettierOptions,
      parser: 'json',
    }),
    'utf8'
  );

  for (let variantKey of webfont.variants) {
    let v = varNameForFontVariant(webfont, variantKey);
    let ffn = filenameForFontVariant(webfont, variantKey);
    code += `export const ${v} = require(${JSON.stringify('./' + ffn)});\n`;
    dts += `export const ${v}: number;\n`; // TODO: Is there an easy way to do type-aliasing so we could refer to this as a module or something?

    // link fonts and image previews
    await fs.promises.link(path.join(FontAssetsDir, ffn), path.join(pkgDir, ffn));
    await fs.promises.link(path.join(FontImagesDir, ffn + '.png'), path.join(pkgDir, ffn + '.png'));
  }

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
  let packageImageFilepath = path.join(pkgDir, 'font-family.png');
  try {
    await generatePackageHeaderImage(packageImageFilepath, webfont);
  } catch (e) {
    // TODO: Maybe log an error?
    throw e;
  }

  // README.md
  await fs.promises.writeFile(
    path.join(pkgDir, 'README.md'),
    await generateReadmeForWebfont(webfont),
    'utf8'
  );
}

async function generatePackageHeaderImage(outputFilepath, webfont) {
  let variantKey = getDefaultVariantKeyForWebfont(webfont);
  let name = webfont.family;
  await generatePng(outputFilepath, name, webfont, variantKey, 96);
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

let DevPackageMarkdown = `
If you are trying out lots of different fonts, you can try using the [\`@expo-google-fonts/dev\` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.`;

async function generateReadmeForWebfont(webfont) {
  let familyUrl = `https://fonts.google.com/specimen/${webfont.family.replace(/ /g, '+')}`;
  let packageName = getPackageNameForWebfont(webfont);

  let fontStyleVars = webfont.variants.map((variantKey) =>
    varNameForFontVariant(webfont, variantKey)
  );

  let displayNames = webfont.variants.map((variantKey) =>
    getDisplayNameForFontVariant(webfont, variantKey)
  );

  let jsExample = `
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, ${fontStyleVars.join(',')} } from '@expo-google-fonts/${packageName}';

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
        <Text style={{ fontSize, paddingVertical, 
          // Note the quoting of the value for \`fontFamily\` here; it expects a string!
          fontFamily: ${JSON.stringify(fsv)} 
      }}>${displayNames.shift() /* hacky but should work :/ */}</Text>
      `
        )
        .join('\n')}
      </View>
    );
  }
};

`;
  let md = `# @expo-google-fonts/${packageName}

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/${packageName})
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/${packageName})
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/${packageName})

This package lets you use the [**${
    webfont.family
  }**](${familyUrl}) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## ${webfont.family}

![${webfont.family}](./font-family.png)

This font family contains [${webfont.variants.length} style${
    webfont.variants.length > 1 ? 's' : ''
  }](#-gallery).

${fontStyleVars.map((fsv) => '- `' + fsv + '`').join('\n')}

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
\`\`\`sh
expo install @expo-google-fonts/${packageName} expo-font expo-app-loading
\`\`\`

Now add code like this to your project
\`\`\`js
${prettier.format(jsExample, { ...PrettierOptions, parser: 'babel' })}
\`\`\`

## 🔡 Gallery

${
  //   webfont.variants
  //   .map((variantKey) => {
  //     let styleImagePath = './' + filenameForFontVariant(webfont, variantKey) + '.png';
  //     let fi = varNameForFontVariant(webfont, variantKey);
  //     return `##### ${fi}
  // ![${fi}](${styleImagePath})
  // `;
  //   })
  //   .join('\n')
  generateTableForVariants(webfont)
}

## 👩‍💻 Use During Development
${DevPackageMarkdown}

## 📖 License

The \`@expo-google-fonts/${packageName}\` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [${
    webfont.family
  } page on Google Fonts](${familyUrl}) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [${webfont.family} on Google Fonts](${familyUrl})
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/${packageName})
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/${packageName})
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [\`@expo-google-fonts/dev\` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
`;
  return md;
}

async function generateFontDirectoryPackage(fontDirectory) {
  await fsExtra.emptyDir(FontDirectoryPackageDir);

  // Clone the object
  let fd = JSON.parse(JSON.stringify(fontDirectory));

  for (let webfont of fd.items) {
    let packageName = getPackageNameForWebfont(webfont);
    webfont.expoGoogleFontsPackage = PackageScope + packageName;
    webfont.expoGoogleFontsPackageHomepage = `https://github.com/expo/google-fonts/tree/master/font-packages/${packageName}`;
  }

  let a$ = [];
  a$.push(
    fs.promises.writeFile(
      path.join(FontDirectoryPackageDir, 'fontDirectory.json'),
      JSON.stringify(fd),
      'utf8'
    )
  );

  a$.push(
    fs.promises.writeFile(
      path.join(FontDirectoryPackageDir, 'package.json'),
      prettier.format(
        JSON.stringify({
          name: '@expo-google-fonts/font-directory',
          version: PackageVersion,
          description: 'A directory of metadata about the fonts available in `expo-google-fonts`',
          main: 'fontDirectory.json',
          repository: 'https://github.com/expo/google-fonts.git',
          homepage: `https://github.com/expo/google-fonts/tree/master/font-packages/font-directory#readme`,
          author: 'Expo Team <team@expo.io>',
          license: 'MIT',
          publishConfig: {
            access: 'public',
          },
        }),
        { ...PrettierOptions, parser: 'json' }
      ),
      'utf8'
    )
  );

  a$.push(
    fs.promises.writeFile(
      path.join(FontDirectoryPackageDir, 'README.md'),
      `# @expo-google-fonts/font-directory

  This contains the font directory metadata downloaded from Google Fonts 
that is used to generate all the packages in \`expo-google-fonts\`.

This package is generated by the [generator here](https://github.com/expo/google-fonts/tree/master/packages/generator#readme).
  
  `,
      'utf8'
    )
  );

  await Promise.all(a$);
}

async function generateDevPackage(fontDirectory) {
  let pkgDir = DevPackageDir;
  let packageName = 'dev';
  await fsExtra.emptyDir(pkgDir);
  await fs.promises.writeFile(
    path.join(pkgDir, 'package.json'),
    prettier.format(
      JSON.stringify({
        name: PackageScope + packageName,
        version: PackageVersion,
        description: `Load ${fontDirectory.items.length} font families from Google Fonts over the network while developing your Expo app`,
        main: 'index.js',
        repository: 'https://github.com/expo/google-fonts.git',
        homepage: `https://github.com/expo/google-fonts/tree/master/font-packages/${packageName}#readme`,
        author: 'Expo Team <team@expo.io>',
        license: 'MIT',
        publishConfig: {
          access: 'public',
        },
      }),
      {
        ...PrettierOptions,
        parser: 'json',
      }
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

  code += ReexportHook;
  dts += ReexportHookDefinition;

  function validateFontUrlUsesHttps(fontUrl) {
    const url = new URL(fontUrl);
    if (url.protocol === 'http:') url.protocol = 'https:';
    return url.toString();
  }

  for (let webfont of fontDirectory.items) {
    for (let variantKey of webfont.variants) {
      let v = varNameForFontVariant(webfont, variantKey);
      let ttfUrl = validateFontUrlUsesHttps(webfont.files[variantKey]);
      code += `export const ${v} = ${JSON.stringify(ttfUrl)};\n`;
      dts += `export const ${v}: string;\n`;
    }
  }

  // index.js
  await fs.promises.writeFile(
    path.join(pkgDir, 'index.js'),
    prettier.format(code, { ...PrettierOptions, parser: 'babel' }),
    'utf8'
  );

  // index.d.ts
  await fs.promises.writeFile(
    path.join(pkgDir, 'index.d.ts'),
    prettier.format(dts, { ...PrettierOptions, parser: 'typescript' }),
    'utf8'
  );

  // useFonts.js & useFonts.d.ts
  await fs.promises.link('./useFonts.js', path.join(pkgDir, 'useFonts.js'));
  await fs.promises.link('./useFonts.d.ts', path.join(pkgDir, 'useFonts.d.ts'));

  // README.md
  let md = `# @expo-google-fonts/dev

${DevPackageMarkdown}

## Usage

Usage is the same as any individual Expo Google Fonts package except that 
you can important any font variant from any font family from \`@expo-google-fonts/dev\`.

#### Install the package

\`\`\`js
expo install @expo-google-fonts/dev expo-font expo-app-loading
\`\`\`

#### In your app

\`\`\`js
import {
  useFonts,
  Nunito_400Regular,
  Lato_400Regular,
  Inter_900Black,
} from '@expo-google-fonts/dev';
...
\`\`\`

etc.

`;

  await fs.promises.writeFile(path.join(pkgDir, 'README.md'), md, 'utf8');
}

async function generateRootReadme(fontDirectory) {
  let outputFilepath = path.join(ProjectRootDir, 'README.md');

  let variantCount = 0;
  for (let webfont of fontDirectory.items) {
    variantCount += webfont.variants.length;
  }

  let md = `<p align="center">
  <a href="https://github.com/expo/google-fonts">
    <img alt="Expo Google Fonts" src="./gifs/title.gif">
  </a>
</p>

<p align="center">Use any of the ${fontDirectory.items.length} fonts and variants from <a href="https://fonts.google.com" target="_blank">fonts.google.com</a> in your Expo app</p>

<p align="center">
  <a aria-label="npm version" href="https://www.npmjs.com/org/expo-google-fonts" target="_blank">
    <img alt="expo-google-fonts npm version" src="https://flat.badgen.net/npm/v/@expo-google-fonts/dev" />
  </a>
  <a aria-label="Expo is free to use" href="https://github.com/expo/expo/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://flat.badgen.net/github/license/expo/google-fonts" target="_blank" />
  </a>
</p>

<p>
  <a aria-label="Follow @expo on Twitter" href="https://twitter.com/intent/follow?screen_name=expo" target="_blank">
    <img  alt="Twitter: expo" src="https://img.shields.io/twitter/follow/expo.svg?style=flat-square&label=Follow%20%40expo&logo=TWITTER&logoColor=FFFFFF&labelColor=00aced&logoWidth=15&color=lightgray" target="_blank" />
  </a>
  <a aria-label="Follow Expo on Medium" href="https://blog.expo.io">
    <img align="right" alt="Medium: exposition" src="https://img.shields.io/badge/Learn%20more%20on%20our%20blog-lightgray.svg?style=flat-square" target="_blank" />
  </a>
</p>
  
---

# expo-google-fonts

The \`@expo-google-fonts\` packages for Expo allow you to easily use 
any of ${fontDirectory.items.length} fonts (and their variants) from 
[fonts.google.com](https://fonts.google.com) in your Expo app.

These packages and all these fonts work across web, iOS, and Android and 
are free to use and open source.

## Usage

Here is an example of using the [Inter font family](https://fonts.google.com/specimen/Inter) in a very simple project.

#### Install the package for the font you want

\`\`\`sh
expo install @expo-google-fonts/inter expo-font
\`\`\`

#### In your app

\`\`\`js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Inter_900Black,
} from '@expo-google-fonts/inter';

export default () => {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

        <Text style={{ fontFamily: 'Inter_900Black' }}>
          Inter Black
        </Text>

      </View>
    );
  }
};

\`\`\`


### Example Project

Here is a [minimal but complete example](https://github.com/expo/google-fonts/tree/master/example).

Each individual font family package README includes a complete example of using that font family.

## 🔡 Available Fonts

You can browse all available Google Fonts on [fonts.google.com](https://fonts.google.com).

[directory.now.sh](https://directory.now.sh/) is a directory / search engine that will 
let you browse and search through all of the available fonts and show you the appropriate
\`import\` statements you'll need so you can copy & paste into your own code.

Here are a few examples of the ${variantCount} variants of ${
    fontDirectory.items.length
  } fonts available:

${await getFeaturedGalleryMarkdown(fontDirectory)}

There is also a [gallery in this repo](./GALLERY.md#readme) showing every font family and variant available.

## 👩‍💻 @expo-google-fonts/dev

${DevPackageMarkdown}

## 📖 Licensing

The Expo Google Fonts project and its code are licensed under the MIT License.

All the fonts in the Google Fonts catalog are free and open source.

Individual fonts have their own licenses. Many are licensed using the
[Open Font License](https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL). 
For example, [Nunito](https://fonts.google.com/specimen/Nunito) uses the OFL. 
Check the Google Fonts pages of the font families you are using and add those licenses to
your project's licenses list when you publish.

#### Q: Can I use these fonts commercially: to make a logo, in my app, on my website, etc.?

A: You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🤝 Contributing

Contributions are very welcome! Note that everything under \`font-packages\` and also this README are generated.
So, please make any changes you want to make to the [generator](https://github.com/expo/google-fonts/tree/master/packages/generator#readme) instead of the packages themselves.

### Authors 

${contributors
  .map((c) => `- ${c.name} ([@${c.github}](https://github.com/${c.github})) - ${c.affiliation}`)
  .join('\n')}

## 🔗 Links

- [Google Fonts](https://fonts.google.com)
- [Using Custom Fonts Guide in the Expo docs](https://docs.expo.io/guides/using-custom-fonts/)
- [\`google_fonts\` Flutter Package](https://pub.dev/packages/google_fonts)
- [Gallery of all available styles in Expo Google Fonts](./GALLERY.md)
- [Generation of these packages and this readme](https://github.com/expo/google-fonts/tree/master/packages/generator#readme)

`;

  await fs.promises.writeFile(outputFilepath, md, 'utf8');
}

async function getFeaturedGalleryMarkdown(fontDirectory) {
  let featuredFonts = [
    'Inter',
    'Manrope',
    'Allan',

    'Roboto',
    'Lusitana',
    // 'Open Sans',
    'Nunito',

    'Bangers',
    'Source Sans 3',
    'Roboto Condensed',

    'Playfair Display',
    'Ubuntu',
    'Oswald',

    'Balsamiq Sans',
    'Jost',
    'Lato',
  ];

  let featured = [];

  // There are more efficient ways to do this but who cares
  for (let fontName of featuredFonts) {
    for (let webfont of fontDirectory.items) {
      if (webfont.family === fontName) {
        featured.push(webfont);
      }
    }
  }

  let md = `
||||
|-|-|-|
`;

  for (let row = 0; featured.length > 0; row++) {
    md += '|';
    for (let col = 0; col < 3; col++) {
      let webfont = featured.shift();
      let variantKey = getDefaultVariantKeyForWebfont(webfont);
      let styleImagePath =
        './font-packages/' +
        getPackageNameForWebfont(webfont) +
        '/' +
        filenameForFontVariant(webfont, variantKey) +
        '.png';
      let packageName = getPackageNameForWebfont(webfont);
      md += `[![${varNameForWebfont(
        webfont
      )}](${styleImagePath})](https://github.com/expo/google-fonts/tree/master/font-packages/${packageName}#readme)|`;
    }
    md += '\n';
  }
  return md;
}

async function generateGalleryFile(fontDirectory) {
  let dc = JSON.parse(JSON.stringify(fontDirectory));
  dc.items.sort((a, b) => (a.family < b.family ? -1 : 1));

  let md = `# Expo Google Fonts Gallery

A visual gallery showing you every font available in Expo Fonts Google packages.
Each image links to the package containing that font.

The [Google Fonts site](https://fonts.google.com) is also a great way to browse through the available fonts.

## 🔠 Font Families

${dc.items
  .map((webfont) => {
    return `[${
      webfont.family
    }](https://github.com/expo/google-fonts/tree/master/font-packages/${getPackageNameForWebfont(
      webfont
    )}#readme)`;
  })
  .join(', ')}

## 🔡 Styles

`;

  for (let webfont of fontDirectory.items) {
    let pkgUrl =
      'https://github.com/expo/google-fonts/tree/master/font-packages/' +
      getPackageNameForWebfont(webfont) +
      '#readme';
    md += `### [${webfont.family}](${pkgUrl})\n`;
    md += generateTableForVariants(webfont, pkgUrl);
  }

  let outputFilepath = path.join(ProjectRootDir, 'GALLERY.md');
  await fs.promises.writeFile(outputFilepath, md, 'utf8');
}

function generateTableForVariants(webfont, pkgUrl) {
  let fontPackagesPrefix = './font-packages/' + getPackageNameForWebfont(webfont) + '/';
  if (!pkgUrl) {
    fontPackagesPrefix = './';
  }

  let md = `
||||
|-|-|-|
`;
  let variantImageCells = [];
  for (let variantKey of webfont.variants) {
    let styleImagePath = fontPackagesPrefix + filenameForFontVariant(webfont, variantKey) + '.png';
    let fi = varNameForFontVariant(webfont, variantKey);
    if (pkgUrl) {
      variantImageCells.push(`[![${fi}](${styleImagePath})](${pkgUrl})`);
    } else {
      variantImageCells.push(`![${fi}](${styleImagePath})`);
    }
  }

  for (let row = 0; variantImageCells.length > 0; row++) {
    md += '|';
    for (let col = 0; col < 3; col++) {
      let cell = variantImageCells.shift() || '';
      md += cell + '|';
    }
    md += '|\n';
  }

  return md;
}

function getDisplayNameForFontVariant(webfont, variantKey) {
  return webfont.family + ' ' + VariantNames[variantKey];
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
  generatePackageHeaderImage: async (n = 3) => {
    let d = await getDirectory();
    return await generatePackageHeaderImage('header.png', d.items[n]);
  },

  generateDevPackage: async () => {
    let d = await getDirectory();
    return await generateDevPackage(d);
  },
  generateFontDirectoryPackage: async () => {
    let d = await getDirectory();
    return await generateFontDirectoryPackage(d);
  },
  generateRootReadme: async () => {
    let d = await getDirectory();
    return await generateRootReadme(d);
  },
  generateGalleryFile: async () => {
    let d = await getDirectory();
    return await generateGalleryFile(d);
  },
  generateAllFontPackages: async () => {
    let d = await getDirectory();
    return await generateAllFontPackages(d);
  },
  getTotalFontVariants: async () => {
    let d = await getDirectory();
    let t = 0;
    for (let webfont of d.items) {
      t += webfont.variants.length;
    }
    return t;
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
  generatePackageHeaderImage,
  generateRootReadme,
  getDisplayNameForFontVariant,
  FontPackagesDir,
  getPackageNameForWebfont,
  generateAllFontPackages,
  main,
};

if (require.main === module) {
  (async () => {
    await main();
  })();
}
