import { ThemeDefinitions } from './definitions';

export type ThemeCategory = keyof ThemeDefinitions;

export const getThemeKeyString = (category: ThemeCategory, prop: string) =>
	`--ww-t-${category}-${prop}`;
