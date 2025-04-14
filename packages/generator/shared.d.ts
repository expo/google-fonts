import { FontItem } from './types';

export const ProjectRootDir: string;
export const FontAssetsDir: string;
export const FontPackagesDir: string;
export const FontImagesDir: string;
export const ArchivedDataPath: string;
export function varNameForWebfont(webfont: FontItem): string;
export function filepathForFontVariant(webfont: FontItem, variantKey: string): string;
export function download(filepath: string, url: string): Promise<void>;
export function generateImageForFontVariant(webfont: FontItem, variantKey: string): Promise<void>;
export function generateFontPackage(
  webfont: FontItem,
  options?: { patch?: boolean }
): Promise<void>;
export function generateDevPackage(
  fontDirectory: { items: FontItem[] },
  options?: { patch?: boolean }
): Promise<void>;
export function getPackageNameForWebfont(webfont: FontItem): string;
export function generateFontDirectoryPackage(
  fontDirectory: { items: FontItem[] },
  options?: { patch?: boolean }
): Promise<void>;
export function generateRootReadme(fontDirectory: { items: FontItem[] }): Promise<void>;
export function generateGalleryFile(fontDirectory: { items: FontItem[] }): Promise<void>;
