import {
	Color,
	FontKeys,
	HeadingKeys,
	Icon,
	IconName,
	IconSize,
	Space,
	Text
} from '@wealth-wing/tayo';
import { iconLabel } from 'components/icon-label.styles';

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

type ColorKey = (typeof colorKeys)[number];
type ColorLevel = '100' | '90' | '80' | '60' | '40' | '20' | '10' | '05';

const colorLevelPattern = new RegExp(`^(${colorKeys.join('|')})(100|90|80|60|40|20|10|05)$`);

/**
 * Normalize any family token to a vivid mid-strong accent used for the tile wash.
 * Glyph uses a lighter step from the same family so it reads on the darker box.
 *
 * Mental model (Material-like): box ~300 wash, icon ~ lighter on dark surfaces.
 * Pass iconColor as the family anchor (e.g. primary80); glyph becomes primary40.
 */
export const getIconLabelColors = (iconColor: Color): { glyphColor: Color; accentColor: Color } => {
	const match = iconColor.match(colorLevelPattern);
	if (!match) {
		return { glyphColor: 'primary40', accentColor: 'primary80' };
	}

	const key = match[1] as ColorKey;
	const level = match[2] as ColorLevel;

	// Anchor the wash on a strong step of the family.
	const accentLevel: ColorLevel =
		level === '05' || level === '10' || level === '20' || level === '40'
			? '80'
			: level === '60'
			? '80'
			: level;

	// Glyph is intentionally lighter than the box wash (readable on dark tinted tile).
	const glyphLevel: ColorLevel =
		level === '100' || level === '90' || level === '80'
			? '40'
			: level === '60'
			? '40'
			: level === '40'
			? '20'
			: '20';

	return {
		glyphColor: `${key}${glyphLevel}`,
		accentColor: `${key}${accentLevel}`
	};
};

export type IconLabelProps = {
	iconName: IconName;
	label: string;
	iconSize?: IconSize;
	/**
	 * Family anchor for the mark (e.g. primary80, green80).
	 * Tile wash uses a stronger step; glyph uses a lighter step of the same family.
	 */
	iconColor?: Color;
	/** Override the auto-derived lighter glyph color. */
	glyphColor?: Color;
	textColor?: Color;
	font?: FontKeys | HeadingKeys;
	gap?: Space;
	className?: string;
};

export const IconLabel = ({
	iconName,
	label,
	iconSize = 's20',
	iconColor = 'primary80',
	glyphColor,
	textColor = 'textPrimary',
	font = 'md',
	gap = 's12',
	className
}: IconLabelProps) => {
	const derived = getIconLabelColors(iconColor);
	const resolvedGlyph = glyphColor ?? derived.glyphColor;

	return (
		<span css={iconLabel.root(gap)} className={className}>
			<span css={iconLabel.iconBox(iconSize, derived.accentColor)} aria-hidden="true">
				<Icon name={iconName} size={iconSize} color={resolvedGlyph} />
			</span>
			<Text tag="span" font={font} color={textColor}>
				{label}
			</Text>
		</span>
	);
};
