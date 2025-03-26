#!/usr/bin/env node

import currentDirectoryData from '../directory-data.json';
import { downloadFontAssets } from '../downloadFontAssets';
import getGoogleFontsApiKey from '../google-fonts-api-key';
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
  const changedPackages = currentDirectoryItems.filter((item) => {
    const currentPackage = fetchedDirectoryDataItems.find((p) => p.family === item.family);
    return currentPackage && currentPackage?.lastModified !== item.lastModified;
  });

  if (!deletedPackages.length && !newPackages.length && !changedPackages.length) {
    console.log('No changes to the directory data.');
    return;
  }

  if (deletedPackages.length) {
    console.log('Deleted packages: ', deletedPackages.length);
  }

  if (newPackages.length) {
    console.log('New packages: ', newPackages.length);
  }

  if (changedPackages.length) {
    console.log('Changed packages: ', changedPackages.length);
    for (const changedPackage of changedPackages) {
      console.log('Downloading fonts for:', changedPackage.family);
      await downloadFontAssets(changedPackage);
    }
  }

  // await fs.promises.writeFile('directory-data.json', JSON.stringify(data, null, 2));
  // console.log('directory-data.json updated');
}

syncPackages();
