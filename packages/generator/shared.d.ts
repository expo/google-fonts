import { FontItem } from './types';

export const FontAssetsDir: string;
export const FontImagesDir: string;
export function filepathForFontVariant(webfont: FontItem, variantKey: string): string;
export function download(filepath: string, url: string): Promise<void>;
export function generateImageForFontVariant(webfont: FontItem, variantKey: string): Promise<void>;
export function generateFontPackage(webfont: FontItem): Promise<void>;
export function generateDevPackage(fontDirectory: { items: FontItem[] }): Promise<void>;
export function generateFontDirectoryPackage(fontDirectory: { items: FontItem[] }): Promise<void>;
export function generateRootReadme(fontDirectory: { items: FontItem[] }): Promise<void>;
export function generateGalleryFile(fontDirectory: { items: FontItem[] }): Promise<void>;
