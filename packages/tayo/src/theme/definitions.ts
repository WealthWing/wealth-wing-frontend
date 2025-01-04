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

// COLORS
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

const cardBackgroundLevels = ['100', '90', '80', '60'] as const;
type CardBackgroundLevel = (typeof cardBackgroundLevels)[number];

export type Color =
	| `${ColorKey}${ColorLevel}`
	| 'textPrimary'
	| 'pageBackground'
	| `cardBackground${CardBackgroundLevel}`;

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

// Border
const borderRadiusKeys = [
	'radiusLarge',
	'radiusDefault',
	'radiusSmall',
	'radiusXLarge',
	'radiusMedium'
] as const;
export type BorderKey = (typeof borderRadiusKeys)[number];

type BorderRadiusCustomProperty = `var(--ww-t-borderRadius-${BorderKey})`;

type BorderRadiusTheme = { [k in BorderKey]: BorderRadiusCustomProperty };
type BorderRadiusDefinition = { [k in BorderKey]: SizeValue };

const borderKeys = ['default'] as const;
export type Border = (typeof borderKeys)[number];

type BorderCustomProperty = `var(--ww-t-border-${Border})`;

type BorderTheme = { [k in Border]: BorderCustomProperty };
type BorderDefinition = { [k in Border]: string };

// Shadow

const darkShadowLevels = [100, 200, 300] as const;
type DarkShadowLevel = (typeof darkShadowLevels)[number];

export type Shadow = `default${DarkShadowLevel}`;
export type ShadowCustomProperty = `var(--ww-t-shadow-${Shadow})`;

type ShadowTheme = { [k in Shadow]: ShadowCustomProperty };
type ShadowDefinition = { [k in Shadow]: string };

// Font

export const fontKeys = ['sm', 'md', 'lg', 'button'] as const;
export type FontKeys = (typeof fontKeys)[number];
export const headingKeys = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;
export type HeadingKeys = (typeof headingKeys)[number];

type FontCustomProperty = `var(--ww-t-font-${FontKeys | HeadingKeys})`;
type FontTheme = Record<FontKeys | HeadingKeys, FontCustomProperty>;
type FontDefinitions = Record<FontKeys | HeadingKeys, string>;

export type ThemeDefinitions = {
	color: Record<Color, ColorValue>;
	space: SpaceDefinition;
	borderRadius: BorderRadiusDefinition;
	border: BorderDefinition;
	shadow: ShadowDefinition;
	font: FontDefinitions;
};

export type Theme = {
	color: ColorDefinition;
	space: SpaceTheme;
	borderRadius: BorderRadiusTheme;
	border: BorderTheme;
	shadow: ShadowTheme;
	font: FontTheme;
};
