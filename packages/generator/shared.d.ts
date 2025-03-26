import { FontItem } from './types';

export const FontAssetsDir: string;
export function filepathForFontVariant(webfont: FontItem, variantKey: string): string;
export function varNameForFontVariant(webfont: FontItem, variantKey: string): string;
export function download(filepath: string, url: string): Promise<void>;
