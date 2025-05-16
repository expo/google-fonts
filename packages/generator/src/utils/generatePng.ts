import spawnAsync from '@expo/spawn-async';
import fs from 'fs';

import { FontItem } from '../types';
import { filepathForFontVariant } from './name';

export async function generatePng(
  outputFilepath: string,
  text: string,
  webfont: FontItem,
  variantKey: string,
  pointsize: number,
  density?: number
) {
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
    await spawnAsync('magick', args);
  } catch (e) {
    // Some fonts, like Noto Color Emoji Compat, break ImageMagick here
    // and so we just link the empty png but rethrow the error so that the
    // caller needs to catch it and isn't surprised by an error
    await fs.promises.link('./empty.png', outputFilepath);
    throw e;
  }
}
