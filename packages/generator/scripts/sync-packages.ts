#!/usr/bin/env node

import currentDirectoryData from '../data/directory-data.json';
import { archiveFontPackage } from '../src/archiveFontPackage';
import { downloadDirectoryData } from '../src/downloadDirectoryData';
import { downloadFonts } from '../src/downloadFonts';
import { generateDevPackage } from '../src/generateDevPackage';
import { generateFontDirectoryPackage } from '../src/generateFontDirectoryPackage';
import { generateFontPackages } from '../src/generateFontPackages';
import { generateGalleryFile } from '../src/generateGalleryFile';
import { generateImagesForFonts } from '../src/generateImagesForFonts';
import { generateRootReadme } from '../src/generateRootReadme';
import { FontItem } from '../src/types';
import { getPackageNameForWebfont } from '../src/utils/name';

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
  const fetchedItems = await downloadDirectoryData();

  // compare the fetched directory data with the current directory data
  const deletedPackages = currentDirectoryItems.filter(
    (item) => !fetchedItems.find((p) => p.family === item.family)
  );
  const newPackages = fetchedItems.filter(
    (item) => !currentDirectoryItems.find((p) => p.family === item.family)
  );
  const changedPackages = fetchedItems.filter((item) => {
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
    await downloadFonts(newPackages);
    await generateImagesForFonts(newPackages);
    await generateFontPackages(newPackages);
    console.log(`✅ Created ${newPackages.map((pkg) => pkg.family).join(', ')}`);
  }

  if (changedPackages.length) {
    console.log(
      `\n🔍 Found ${changedPackages.length} changed font${changedPackages.length === 1 ? '' : 's'}`
    );
    await downloadFonts(changedPackages);
    await generateImagesForFonts(changedPackages);
    await generateFontPackages(changedPackages, { patch: true });
    console.log(`✅ Updated ${changedPackages.map((pkg) => pkg.family).join(', ')}`);
  }

  await generateDevPackage(fetchedItems, { patch: true });
  console.log('\n✅ Generated dev package');

  await generateFontDirectoryPackage(fetchedItems, { patch: true });
  console.log('✅ Generated font directory package');

  await generateRootReadme(fetchedItems);
  console.log('✅ Generated root README');

  await generateGalleryFile(fetchedItems);
  console.log('✅ Generated gallery file');

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
