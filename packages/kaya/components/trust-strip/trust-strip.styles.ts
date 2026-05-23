import { css } from '@emotion/react';
import { mqValues, theme } from '@wealth-wing/tayo';
import { MAX_WIDTH } from '../hero/hero.styles';

const TABLET_BREAK = `@media (max-width: ${mqValues.tabletLarge - 1}px)`;
const MOBILE_BREAK = `@media (max-width: ${mqValues.tabletSmall - 1}px)`;

const DIVIDER_COLOR = theme.color.indigo60;

export const trustStripStyles = {
	root: css({
		backgroundColor: theme.color.darkBlue90,
		borderTop: theme.border.default,
		borderBottom: theme.border.default
	}),

	inner: css({
		maxWidth: MAX_WIDTH,
		margin: '0 auto',
		padding: `${theme.space.s32} 0`,
		display: 'grid',
		gridTemplateColumns: 'repeat(4, 1fr)',
		[TABLET_BREAK]: {
			gridTemplateColumns: 'repeat(2, 1fr)',
			padding: `${theme.space.s24} ${theme.space.s24}`
		},
		[MOBILE_BREAK]: {
			gridTemplateColumns: '1fr',
			padding: `${theme.space.s16} ${theme.space.s16}`
		}
	}),

	item: css({
		display: 'flex',
		alignItems: 'center',
		gap: theme.space.s12,
		padding: `0 ${theme.space.s32}`,
		// Desktop: vertical right-side divider between all items
		borderRight: `1px solid ${DIVIDER_COLOR}`,
		'&:last-child': {
			borderRight: 'none'
		},

		[TABLET_BREAK]: {
			padding: `${theme.space.s20} ${theme.space.s20}`,
			// Even items (2nd column) have no right border
			'&:nth-of-type(2n)': {
				borderRight: 'none'
			},
			// Restore right border on odd items in case it was removed at desktop
			'&:nth-of-type(2n+1)': {
				borderRight: `1px solid ${DIVIDER_COLOR}`
			},
			// Top row items (1 & 2) get a bottom border
			'&:nth-of-type(-n+2)': {
				borderBottom: `1px solid ${DIVIDER_COLOR}`
			}
		},

		[MOBILE_BREAK]: {
			padding: `${theme.space.s20} 0`,
			justifyContent: 'center',
			// Reset all borders from tablet
			borderRight: 'none',
			'&:nth-of-type(2n+1)': {
				borderRight: 'none'
			},
			'&:nth-of-type(-n+2)': {
				borderBottom: 'none'
			},
			// Horizontal bottom divider for all items except the last
			'&:not(:last-child)': {
				borderBottom: `1px solid ${DIVIDER_COLOR}`
			}
		}
	}),

	label: css({
		font: theme.font.sm,
		color: theme.color.textSecondary,
		letterSpacing: '0.04em',
		textTransform: 'uppercase'
	})
};
