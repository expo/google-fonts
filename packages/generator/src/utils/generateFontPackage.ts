import ejs from 'ejs';
import fs from 'fs';
import fsExtra from 'fs-extra';
import path from 'path';
import prettier from 'prettier';

import {
  FontAssetsDir,
  FontImagesDir,
  FontPackagesDir,
  PrettierOptions,
  TemplatesDir,
} from '../constants';
import { FontItem } from '../types';
import { createFileFromTemplate } from './createFileFromTemplate';
import { generatePng } from './generatePng';
import { generateTableForVariants } from './generateTableForVariants';
import { getDefaultVariantKeyForWebfont } from './getDefaultVariantKeyForWebfont';
import { getNextPackageVersion } from './getNextPackageVersion';
import {
  getPackageNameForWebfont,
  filenameForFontVariant,
  varNameForFontVariant,
  infoForVariantKey,
  getDisplayNameForFontVariant,
} from './name';

async function generatePackageHeaderImage(outputFilepath: string, webfont: FontItem) {
  const variantKey = getDefaultVariantKeyForWebfont(webfont);
  const name = webfont.family;
  await generatePng(outputFilepath, name, webfont, variantKey, 96);
}

export async function generateFontPackage(webfont: FontItem, options?: { patch?: boolean }) {
  const packageName = getPackageNameForWebfont(webfont);
  const pkgDir = path.join(FontPackagesDir, packageName);
  const version = getNextPackageVersion(pkgDir, options);

  // empty dir
  await fsExtra.emptyDir(pkgDir);

  // package.json
  await createFileFromTemplate(
    path.join(pkgDir, 'package.json'),
    path.join(TemplatesDir, 'package/package.json'),
    {
      packageName,
      version,
      description: `Use the ${webfont.family} font family from Google Fonts in your Expo app`,
      main: 'index.js',
      directory: 'font-packages/' + packageName,
    }
  );

  // metadata.json
  await fs.promises.writeFile(
    path.join(pkgDir, 'metadata.json'),
    // @ts-ignore
    prettier.format(JSON.stringify(webfont), {
      ...PrettierOptions,
      parser: 'json',
    }),
    'utf8'
  );

  for (const variantKey of webfont.variants) {
    const ffn = filenameForFontVariant(webfont, variantKey);
    const { variantFolderName } = infoForVariantKey(variantKey);

    const variantDirectory = path.join(pkgDir, `${variantFolderName}`);
    await fsExtra.ensureDir(variantDirectory);

    // link fonts and image previews
    await fs.promises.link(
      path.join(FontAssetsDir, ffn),
      path.join(pkgDir, variantFolderName, ffn)
    );
    await fs.promises.link(
      path.join(FontImagesDir, ffn + '.png'),
      path.join(pkgDir, variantFolderName, ffn + '.png')
    );

    const variantName = varNameForFontVariant(webfont, variantKey);
    await createFileFromTemplate(
      path.join(pkgDir, variantFolderName, 'index.js'),
      path.join(TemplatesDir, '/package/variant/index.js.ejs'),
      { variantName }
    );
    await createFileFromTemplate(
      path.join(pkgDir, variantFolderName, 'index.d.ts'),
      path.join(TemplatesDir, 'package/variant/index.d.ts.ejs'),
      { variantName }
    );
  }

  const variants = webfont.variants.map((variantKey) => {
    const { variantFolderName } = infoForVariantKey(variantKey);
    return {
      name: varNameForFontVariant(webfont, variantKey),
      path: variantFolderName + '/' + filenameForFontVariant(webfont, variantKey),
    };
  });

  await createFileFromTemplate(
    path.join(pkgDir, 'index.js'),
    path.join(TemplatesDir, 'package/index.js.ejs'),
    { variants }
  );
  await createFileFromTemplate(
    path.join(pkgDir, 'index.d.ts'),
    path.join(TemplatesDir, 'package/index.d.ts.ejs'),
    { variants }
  );

  // Include the useFonts hook so we can use that
  await fs.promises.link(
    path.join(TemplatesDir, 'package/useFonts.js'),
    path.join(pkgDir, 'useFonts.js')
  );
  await fs.promises.link(
    path.join(TemplatesDir, 'package/useFonts.d.ts'),
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
    path.join(TemplatesDir, 'package/README.md'),
    {
      packageName,
      fontName: webfont.family,
      fontVariants: webfont.variants.map((variantKey) =>
        varNameForFontVariant(webfont, variantKey)
      ),
      fontVariantsWithDisplayName: webfont.variants.map((variantKey) => ({
        varName: varNameForFontVariant(webfont, variantKey),
        displayName: getDisplayNameForFontVariant(webfont, variantKey),
        path:
          '@expo-google-fonts/' +
          packageName +
          '/' +
          infoForVariantKey(variantKey).variantFolderName,
      })),
      devPackageDescription: await ejs.renderFile(path.join(TemplatesDir, 'dev/DESCRIPTION.md')),
      variantsTable: generateTableForVariants(webfont),
      variantsCount: webfont.variants.length,
    }
  );
}
