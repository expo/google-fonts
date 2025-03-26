const spawnAsync = require('@expo/spawn-async');
const fetch = require('cross-fetch');
const fs = require('fs');
const path = require('path');

const ProjectRootDir = path.join(__dirname, '..', '..');
const FontAssetsDir = path.join(ProjectRootDir, 'font-assets');
const FontImagesDir = path.join(ProjectRootDir, 'font-images-temp');
const fontPrefix = 'font';

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

module.exports = {
  ProjectRootDir,
  FontAssetsDir,
  FontImagesDir,
  varNameForWebfont,
  varNameForFontVariant,
  filenameForFontVariant,
  filepathForFontVariant,
  download,
  generateImageForFontVariant,
};
