import path from 'path';

export const ProjectRootDir = path.join(__dirname, '..', '..', '..');
export const FontAssetsDir = path.join(ProjectRootDir, 'font-assets');
export const FontImagesDir = path.join(ProjectRootDir, 'font-images');
export const FontPackagesDir = path.join(ProjectRootDir, 'font-packages');
export const DevPackageDir = path.join(FontPackagesDir, 'dev');
export const FontArchiveDir = path.join(ProjectRootDir, 'font-archive');
export const FontDirectoryPackageDir = path.join(ProjectRootDir, 'font-packages', 'font-directory');
export const ArchivedDataPath = path.join(__dirname, '..', 'data/archived-data.json');
export const DirectoryDataPath = path.join(__dirname, '..', 'data/directory-data.json');
export const TemplatesDir = path.join(__dirname, 'templates');
export const PackageVersion = require('../../../package.json').version;
export const fontPrefix = 'font';
export const PackageScope = '@expo-google-fonts/';

export const PrettierOptions = {
  printWidth: 100,
  tabWidth: 2,
  singleQuote: true,
  jsxBracketSameLine: true,
  trailingComma: 'es5',
  arrowParens: 'always',
};

export const WeightNames = {
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

export const VariantNames = {
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
