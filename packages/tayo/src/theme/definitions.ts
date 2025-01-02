// Misc/Helpers
type ColorValue = `#${string}`;
export type SizeValue =
	| `${number}px`
	| `${number}rem`
	| `${number}%`
	| '0'
	| `${number}vh`
	| `${number}vw`;

export const alphaLevels = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100] as const;
export type AlphaLevel = (typeof alphaLevels)[number];

//COLORS
const colorKeys = [
	'primary',
	'secondary',
	'black',
	'darkBlue',
	'indigo',
	'green',
	'red',
	'yellow'
] as const;
export type ColorKey = (typeof colorKeys)[number];

const colorLevels = ['100', '90', '80', '60', '40', '20', '10', '05'] as const;
type ColorLevel = (typeof colorLevels)[number];

export type Color = `${ColorKey}${ColorLevel}` | 'textPrimary';

export type ColorCustomProperty = `var(--ww-t-color-${Color})`;

type ColorDefinition = { [k in Color]: ColorCustomProperty };

// Space
export const spaceNames = [
	'none',
	's2',
	's4',
	's8',
	's10',
	's12',
	's16',
	's20',
	's24',
	's28',
	's32',
	's36',
	's40',
	's64',
	's96'
] as const;
export type Space = (typeof spaceNames)[number];

type SpaceCustomProperty = `var(--ww-t-space-${Space})`;

type SpaceTheme = { [k in Space]: SpaceCustomProperty };

type SpaceDefinition = { [k in Space]: SizeValue };

export type ThemeDefinitions = {
	color: Record<Color, ColorValue>;
	space: SpaceDefinition;
};

export type Theme = {
	color: ColorDefinition;
	space: SpaceTheme;
};
