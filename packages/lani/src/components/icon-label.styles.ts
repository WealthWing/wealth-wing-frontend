import { css } from '@emotion/react';
import { Color, IconSize, Space, theme } from '@wealth-wing/tayo';

/** Tile grows with the icon so padding stays proportional. */
const tileSizeByIcon: Record<IconSize, Space> = {
	none: 's16',
	s2: 's16',
	s4: 's20',
	s8: 's24',
	s10: 's28',
	s12: 's32',
	s16: 's32',
	s20: 's40',
	s24: 's40',
	s28: 's64',
	s32: 's64',
	s36: 's64',
	s40: 's64',
	s64: 's96',
	s96: 's96'
};

export const iconLabel = {
	root: (gap: Space) => css`
		align-items: center;
		display: inline-flex;
		flex-direction: row;
		gap: ${theme.space[gap]};
		min-width: 0;
	`,
	/**
	 * Soft rounded tile: accent wash over the card surface so the glyph
	 * can sit lighter/brighter on top (dark-UI category mark pattern).
	 */
	iconBox: (iconSize: IconSize, accentColor: Color) => {
		const tileSize = theme.space[tileSizeByIcon[iconSize]];
		const accent = theme.color[accentColor];

		return css`
			align-items: center;
			background: color-mix(in srgb, ${accent} 22%, ${theme.color.cardBackground90});
			border-radius: ${theme.borderRadius.radiusDefault};
			box-shadow: inset 0 0 0 1px color-mix(in srgb, ${accent} 28%, transparent);
			display: inline-flex;
			flex-shrink: 0;
			height: ${tileSize};
			justify-content: center;
			width: ${tileSize};
		`;
	}
};
