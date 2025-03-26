const spawnAsync = require('@expo/spawn-async');
const fetch = require('cross-fetch');
const ejs = require('ejs');
const fs = require('fs');
const fsExtra = require('fs-extra');
const path = require('path');
const prettier = require('prettier');

const ProjectRootDir = path.join(__dirname, '..', '..');
const FontAssetsDir = path.join(ProjectRootDir, 'font-assets');
const FontImagesDir = path.join(ProjectRootDir, 'font-images');
const fontPrefix = 'font';

const PrettierOptions = {
  printWidth: 100,
  tabWidth: 2,
  singleQuote: true,
  jsxBracketSameLine: true,
  trailingComma: 'es5',
  arrowParens: 'always',
};

const WeightNames = {
  100: 'Thin',
  200: 'ExtraLight',
  300: 'Light',
  400: 'Regular',
  500: 'Medium',
  600: 'SemiBold',
  700: 'Bold',
  800: 'ExtraBold',
  900: 'Black',
};

const VariantNames = {
  100: 'Thin',
  200: 'Extra Light',
  300: 'Light',
  regular: 'Regular',
  500: 'Medium',
  600: 'Semi Bold',
  700: 'Bold',
  800: 'Extra Bold',
  900: 'Black',
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

const PackageVersion = require('../../package.json').version;

async function download(filepath, url) {
  const response = await fetch(url);
  const b = await response.buffer();
  await fs.promises.writeFile(filepath, b);
}

function varNameForWebfont(webfont) {
  const variant = webfont.family.replace(/\s+/g, '');
  return variant.match(/^\d/) ? fontPrefix + variant : variant;
}

function varNameForFontVariant(webfont, variantKey) {
  const info = infoForVariantKey(variantKey);
  return varNameForWebfont(webfont) + info.suffix;
}

function filenameForFontVariant(webfont, variantKey) {
  return varNameForFontVariant(webfont, variantKey) + '.ttf';
}

function filepathForFontVariant(webfont, variantKey) {
  return path.join(FontAssetsDir, filenameForFontVariant(webfont, variantKey));
}

function infoForVariantKey(variantKey) {
  const weight = parseInt(variantKey, 10) || 400; // `regular` and `italic` don't have a number before them
  const isItalic = variantKey.endsWith('italic');
  const weightName = WeightNames[weight];
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

async function generateImageForFontVariant(webfont, variantKey) {
  let phrase = varNameForFontVariant(webfont, variantKey) + '\n';
  phrase += 'Pack my box with five\ndozen liquor jugs, please.';
  const outputFilepath = path.join(
    FontImagesDir,
    filenameForFontVariant(webfont, variantKey) + '.png'
  );
  await generatePng(outputFilepath, phrase, webfont, variantKey, 40);
}

async function generatePng(outputFilepath, text, webfont, variantKey, pointsize, density) {
  const fill = '#1B1F23';
  const background = '#FFFFFF';
  const fontFilepath = filepathForFontVariant(webfont, variantKey);
  pointsize = pointsize || 40;
  density = density || 144; // 458; // iPhone 11 Pro Max = 458
  const units = 'pixelsperinch';
  const args = [
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

const FontPackagesDir = path.join(ProjectRootDir, 'font-packages');

function getPackageNameForWebfont(webfont) {
  return webfont.family
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

async function createFileFromTemplate(outputPath, templatePath, data) {
  const content = await ejs.renderFile(templatePath, data);
  await fs.promises.writeFile(outputPath, content, 'utf8');
}

function getDisplayNameForFontVariant(webfont, variantKey) {
  return webfont.family + ' ' + VariantNames[variantKey];
}


function getDefaultVariantKeyForWebfont(webfont) {
  const Priority = [
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
  for (const vk of Priority) {
    if (webfont.variants.includes(vk)) {
      return vk;
    }
  }
  // Weird; this is unexpected, but let's just return the first variant we find
  // since none of the ones we expect are provided
  return webfont.variants[0];
}

async function generatePackageHeaderImage(outputFilepath, webfont) {
  const variantKey = getDefaultVariantKeyForWebfont(webfont);
  const name = webfont.family;
  await generatePng(outputFilepath, name, webfont, variantKey, 96);
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
  const variantImageCells = [];
  for (const variantKey of webfont.variants) {
    const styleImagePath =
      fontPackagesPrefix + filenameForFontVariant(webfont, variantKey) + '.png';
    const fi = varNameForFontVariant(webfont, variantKey);
    if (pkgUrl) {
      variantImageCells.push(`[![${fi}](${styleImagePath})](${pkgUrl})`);
    } else {
      variantImageCells.push(`![${fi}](${styleImagePath})`);
    }
  }

  for (let row = 0; variantImageCells.length > 0; row++) {
    md += '|';
    for (let col = 0; col < 3; col++) {
      const cell = variantImageCells.shift() || '';
      md += cell + '|';
    }
    md += '|\n';
  }

  return md;
}

async function generateFontPackage(webfont) {
  const packageName = getPackageNameForWebfont(webfont);
  const pkgDir = path.join(FontPackagesDir, packageName);

  // empty dir
  await fsExtra.emptyDir(pkgDir);

  // package.json
  await createFileFromTemplate(
    path.join(pkgDir, 'package.json'),
    path.join(__dirname, 'templates/package/package.json'),
    {
      packageName,
      version: PackageVersion,
      description: `Use the ${webfont.family} font family from Google Fonts in your Expo app`,
      main: 'index.js',
    }
  );

  // metadata.json
  await fs.promises.writeFile(
    path.join(pkgDir, 'metadata.json'),
    prettier.format(JSON.stringify(webfont), {
      ...PrettierOptions,
      parser: 'json',
    }),
    'utf8'
  );

  for (const variantKey of webfont.variants) {
    const ffn = filenameForFontVariant(webfont, variantKey);

    // link fonts and image previews
    await fs.promises.link(path.join(FontAssetsDir, ffn), path.join(pkgDir, ffn));
    await fs.promises.link(path.join(FontImagesDir, ffn + '.png'), path.join(pkgDir, ffn + '.png'));
  }

  const variants = webfont.variants.map((variantKey) => {
    return {
      name: varNameForFontVariant(webfont, variantKey),
      path: filenameForFontVariant(webfont, variantKey),
    };
  });

  await createFileFromTemplate(
    path.join(pkgDir, 'index.js'),
    path.join(__dirname, 'templates/package/index.js.ejs'),
    { variants }
  );
  await createFileFromTemplate(
    path.join(pkgDir, 'index.d.ts'),
    path.join(__dirname, 'templates/package/index.d.ts.ejs'),
    { variants }
  );

  // Include the useFonts hook so we can use that
  await fs.promises.link(
    path.join(__dirname, 'templates/package/useFonts.js'),
    path.join(pkgDir, 'useFonts.js')
  );
  await fs.promises.link(
    path.join(__dirname, 'templates/package/useFonts.d.ts'),
    path.join(pkgDir, 'useFonts.d.ts')
  );

  // font-family.png
  const packageImageFilepath = path.join(pkgDir, 'font-family.png');
  try {
    await generatePackageHeaderImage(packageImageFilepath, webfont);
  } catch (e) {
    // TODO: Maybe log an error?
    throw e;
  }

  // README.md
  await createFileFromTemplate(
    path.join(pkgDir, 'README.md'),
    path.join(__dirname, 'templates/package/README.md'),
    {
      packageName: getPackageNameForWebfont(webfont),
      fontName: webfont.family,
      fontVariants: webfont.variants.map((variantKey) =>
        varNameForFontVariant(webfont, variantKey)
      ),
      fontVariantsWithDisplayName: webfont.variants.map((variantKey) => ({
        varName: varNameForFontVariant(webfont, variantKey),
        displayName: getDisplayNameForFontVariant(webfont, variantKey),
      })),
      devPackageDescription: await ejs.renderFile(
        path.join(__dirname, 'templates/dev/DESCRIPTION.md')
      ),
      variantsTable: generateTableForVariants(webfont),
      variantsCount: webfont.variants.length,
    }
  );
}

module.exports = {
  ProjectRootDir,
  FontAssetsDir,
  FontImagesDir,
  FontPackagesDir,
  PackageVersion,
  varNameForWebfont,
  varNameForFontVariant,
  filenameForFontVariant,
  filepathForFontVariant,
  download,
  generateImageForFontVariant,
  generateFontPackage,
  getPackageNameForWebfont,
  createFileFromTemplate,
  getDefaultVariantKeyForWebfont,
  generateTableForVariants,
  generatePackageHeaderImage,
  getDisplayNameForFontVariant,
};
