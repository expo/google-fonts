#!/usr/bin/env node

import fs from 'fs';

import { archiveFontPackage } from '../archiveFontPackage';
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
  getPackageNameForWebfont,
} from '../shared';
import { FontItem } from '../types';

const currentDirectoryItems = currentDirectoryData.items as FontItem[];

const getPackageLinks = (packages: FontItem[]) => {
  if (!packages.length) {
    return '';
  }

  const list = packages
    .map((p) => {
      const link = 'https://fonts.google.com/specimen/' + p.family.replace(/ /g, '+');
      return '<li><a href="' + link + '" target="_blank">' + p.family + '</a></li>';
    })
    .join('');

  return `<ul>${list}</ul>`;
};

async function syncPackages() {
  // fetch the latest directory data from the Google Fonts API
  const googleFontsApiKey = getGoogleFontsApiKey();
  const url = `https://www.googleapis.com/webfonts/v1/webfonts?key=${googleFontsApiKey}&prettyPrint=false&sort=date`;
  const response = await fetch(url);
  const fetchedDirectoryData = (await response.json()) as { items: FontItem[] };
  const fetchedDirectoryDataItems = fetchedDirectoryData.items;

  // compare the fetched directory data with the current directory data
  const deletedPackages = currentDirectoryItems.filter(
    (item) => !fetchedDirectoryDataItems.find((p) => p.family === item.family)
  );
  const newPackages = fetchedDirectoryDataItems.filter(
    (item) => !currentDirectoryItems.find((p) => p.family === item.family)
  );
  const changedPackages = fetchedDirectoryDataItems.filter((item) => {
    const currentPackage = currentDirectoryItems.find((p) => p.family === item.family);
    return currentPackage && currentPackage?.lastModified !== item.lastModified;
  });

  if (!deletedPackages.length && !newPackages.length && !changedPackages.length) {
    console.log('No changes to the directory data.');
    if (process.env.GITHUB_ACTIONS) {
      console.log(JSON.stringify({ hasChanged: false }));
    }
    return;
  }

  if (deletedPackages.length) {
    console.log(
      `\nFound ${deletedPackages.length} deleted package${deletedPackages.length === 1 ? '' : 's'}`
    );
    for (const deletedPackage of deletedPackages) {
      await archiveFontPackage(deletedPackage);
      console.log(`✅ Archived ${deletedPackage.family}`);
    }
  }

  if (newPackages.length) {
    console.log(`\n🔍 Found ${newPackages.length} new font${newPackages.length === 1 ? '' : 's'}`);
    for (const newPackage of newPackages) {
      await downloadFontAssets(newPackage);
      await generateImages(newPackage);
      await generateFontPackage(newPackage);
      console.log(`✅ Created ${newPackage.family}`);
    }
  }

  if (changedPackages.length) {
    console.log(
      `\n🔍 Found ${changedPackages.length} changed font${changedPackages.length === 1 ? '' : 's'}`
    );
    for (const changedPackage of changedPackages) {
      await downloadFontAssets(changedPackage);
      await generateImages(changedPackage);
      await generateFontPackage(changedPackage, { patch: true });
      console.log(`✅ Updated ${changedPackage.family}`);
    }
  }

  await generateDevPackage(fetchedDirectoryData, { patch: true });
  console.log('\n✅ Generated dev package');

  await generateFontDirectoryPackage(fetchedDirectoryData, { patch: true });
  console.log('✅ Generated font directory package');

  await generateRootReadme(fetchedDirectoryData);
  console.log('✅ Generated root README');

  await generateGalleryFile(fetchedDirectoryData);
  console.log('✅ Generated gallery file');

  await fs.promises.writeFile('directory-data.json', JSON.stringify(fetchedDirectoryData, null, 2));
  console.log('✅ Updated directory-data.json');

  if (process.env.GITHUB_ACTIONS) {
    console.log(
      JSON.stringify({
        hasChanged: true,
        updatedPackagesCount: newPackages.length + changedPackages.length + deletedPackages.length,
        newPackages: getPackageLinks(newPackages),
        newPackagesCount: newPackages.length,
        changedPackages: getPackageLinks(changedPackages),
        changedPackagesCount: changedPackages.length,
        deletedPackages: getPackageLinks(deletedPackages),
        deletedPackagesCount: deletedPackages.length,
        pullRequestCommitMessage: `Update packages (${newPackages.length} new, ${changedPackages.length} changed, ${deletedPackages.length} deleted)`,
        packagesToPublish: [...newPackages, ...changedPackages]
          .map((p) => getPackageNameForWebfont(p))
          .concat(['dev', 'font-directory']),
        packagesToDeprecate: deletedPackages.map((p) => getPackageNameForWebfont(p)),
      })
    );
  }
}

syncPackages();
