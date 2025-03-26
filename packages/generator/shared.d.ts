import { FontItem } from './types';

export const FontAssetsDir: string;
export const FontImagesDir: string;
export function filepathForFontVariant(webfont: FontItem, variantKey: string): string;
export function varNameForFontVariant(webfont: FontItem, variantKey: string): string;
export function download(filepath: string, url: string): Promise<void>;
export function generateImageForFontVariant(webfont: FontItem, variantKey: string): Promise<void>;
export function generateFontPackage(webfont: FontItem): Promise<void>;
