const fetch = require('cross-fetch');
const fs = require('fs');
const path = require('path');

const ProjectRootDir = path.join(__dirname, '..', '..');
const FontAssetsDir = path.join(ProjectRootDir, 'font-assets');
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

module.exports = {
  ProjectRootDir,
  FontAssetsDir,
  varNameForWebfont,
  varNameForFontVariant,
  filenameForFontVariant,
  filepathForFontVariant,
  download,
};
