#!/usr/bin/env node

import currentDirectoryData from '../directory-data.json';
import { downloadFontAssets } from '../downloadFontAssets';
import { generateImages } from '../generateImages';
import getGoogleFontsApiKey from '../google-fonts-api-key';
import {
  generateDevPackage,
  generateFontPackage,
  generateFontDirectoryPackage,
  generateRootReadme,
  generateGalleryFile,
} from '../shared';
import { FontItem } from '../types';
const currentDirectoryItems = currentDirectoryData.items as FontItem[];

async function syncPackages() {
  // fetch the latest directory data from the Google Fonts API
  const googleFontsApiKey = getGoogleFontsApiKey();
  const url = `https://www.googleapis.com/webfonts/v1/webfonts?key=${googleFontsApiKey}&prettyPrint=false&sort=date`;
  const response = await fetch(url);
  const fetchedDirectoryData = (await response.json()) as { items: FontItem[] };
  const fetchedDirectoryDataItems = fetchedDirectoryData.items;

  // compare the fetched directory data with the current directory data
  const deletedPackages = fetchedDirectoryDataItems.filter(
    (item) => !currentDirectoryItems.find((p) => p.family === item.family)
  );
  const newPackages = currentDirectoryItems.filter(
    (item) => !fetchedDirectoryDataItems.find((p) => p.family === item.family)
  );
  const changedPackages = fetchedDirectoryDataItems.filter((item) => {
    const currentPackage = currentDirectoryItems.find((p) => p.family === item.family);
    return currentPackage && currentPackage?.lastModified !== item.lastModified;
  });

  if (!deletedPackages.length && !newPackages.length && !changedPackages.length) {
    console.log('No changes to the directory data.');
    return;
  }

  if (deletedPackages.length) {
    console.log('\nDeleted packages: ', deletedPackages.length);
    // TODO: Do we delete the packages?
  }

  if (newPackages.length) {
    console.log('\nNew packages: ', newPackages.length);
    for (const newPackage of newPackages) {
      console.log('\nDownloading fonts for', newPackage.family);
      await downloadFontAssets(newPackage);
      console.log('\nGenerating images for', newPackage.family);
      await generateImages(newPackage);
      console.log('\nGenerating package for', newPackage.family);
      await generateFontPackage(newPackage);
    }
  }

  if (changedPackages.length) {
    console.log('\nChanged packages: ', changedPackages.length);
    for (const changedPackage of changedPackages) {
      console.log('\nDownloading fonts for', changedPackage.family);
      await downloadFontAssets(changedPackage);
      console.log('\nGenerating images for', changedPackage.family);
      await generateImages(changedPackage);
      console.log('\nGenerating package for', changedPackage.family);
      await generateFontPackage(changedPackage);
    }
  }

  console.log('\nGenerating dev package');
  await generateDevPackage(fetchedDirectoryData);

  console.log('\nGenerating font directory package');
  await generateFontDirectoryPackage(fetchedDirectoryData);

  console.log('\nGenerating root README');
  await generateRootReadme(fetchedDirectoryData);

  console.log('\nGenerating gallery file');
  await generateGalleryFile(fetchedDirectoryData);

  // await fs.promises.writeFile('directory-data.json', JSON.stringify(data, null, 2));
  console.log('✅ directory-data.json updated');
}

syncPackages();
