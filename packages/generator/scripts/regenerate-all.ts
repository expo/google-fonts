import { DirectoryDataPath } from '../src/constants';
import { downloadDirectoryData } from '../src/downloadDirectoryData';
import { downloadFonts } from '../src/downloadFonts';
import { generateDevPackage } from '../src/generateDevPackage';
import { generateFontDirectoryPackage } from '../src/generateFontDirectoryPackage';
import { generateFontPackages } from '../src/generateFontPackages';
import { generateGalleryFile } from '../src/generateGalleryFile';
import { generateImagesForFonts } from '../src/generateImagesForFonts';
import { generateRootReadme } from '../src/generateRootReadme';
import { FontItem } from '../src/types';

const options = {
  // no prerequisites
  // downloads data and saves to directory-data.json
  shouldDownloadDirectoryData: true,

  // needs directory-data.json
  // downloads fonts and saves to font-assets
  shouldDownloadFonts: true,

  // needs directory-data.json, font-assets and imagemagick installed globally
  // generates images for all fonts and saves to font-images
  shouldGenerateImages: true,

  // needs directory-data.json, font-assets and font-images
  // generates font packages for all fonts in font-packages
  shouldGenerateFontPackages: true,

  shouldGenerateDevPackage: true,
  shouldGenerateFontDirectoryPackage: true,
  shouldGenerateRootReadme: true,
  shouldGenerateGalleryFile: true,
};

async function generateAll() {
  if (options.shouldDownloadDirectoryData) {
    console.log('Downloading directory data...');
    await downloadDirectoryData();
    console.log('done.');
  }

  const fontDirectory = require(DirectoryDataPath);
  const fonts: FontItem[] = fontDirectory.items;

  if (options.shouldDownloadFonts) {
    console.log('Downloading all fonts...');
    await downloadFonts(fonts);
    console.log('done.');
  }

  if (options.shouldGenerateImages) {
    console.log('Generating image previews for all fonts...');
    await generateImagesForFonts(fonts);
    console.log('done.');
  }

  if (options.shouldGenerateFontPackages) {
    console.log('Generating all font packages...');
    await generateFontPackages(fonts);
    console.log('done.');
  }

  if (options.shouldGenerateDevPackage) {
    console.log('Generating dev package...');
    await generateDevPackage(fonts);
    console.log('done.');
  }

  if (options.shouldGenerateFontDirectoryPackage) {
    console.log('Generating font directory package...');
    await generateFontDirectoryPackage(fonts);
    console.log('done.');
  }

  if (options.shouldGenerateRootReadme) {
    console.log('Generating root README...');
    await generateRootReadme(fonts);
    console.log('done.');
  }

  if (options.shouldGenerateGalleryFile) {
    console.log('Generating gallery file...');
    await generateGalleryFile(fonts);
    console.log('done.');
  }
}

generateAll();
