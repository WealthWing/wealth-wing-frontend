import { css } from '@emotion/react';
import { mqValues, theme } from '@wealth-wing/tayo';

import { MAX_WIDTH } from '../hero/hero.styles';

const TABLET_LARGE_UP = `@media (min-width: ${mqValues.tabletLarge}px)`;
const TABLET_BREAK = `@media (max-width: ${mqValues.tabletLarge - 1}px)`;
const MOBILE_BREAK = `@media (max-width: ${mqValues.tabletSmall - 1}px)`;

const withAlpha = (color: string, alphaPercent: number) =>
	`color-mix(in srgb, ${color} ${alphaPercent}%, transparent)`;

export const problemsStyles = {
	root: css({
		backgroundColor: theme.color.darkBlue90,
		padding: `${theme.space.s96} 0`,
		[TABLET_BREAK]: {
			padding: `${theme.space.s64} 0`
		},
		[MOBILE_BREAK]: {
			padding: `${theme.space.s40} 0`
		}
	}),

	inner: css({
		maxWidth: MAX_WIDTH,
		margin: '0 auto',
		padding: `0 ${theme.space.s24}`,
		[MOBILE_BREAK]: {
			padding: `0 ${theme.space.s16}`
		}
	}),

	header: css({
		marginBottom: theme.space.s64,
		[TABLET_BREAK]: {
			marginBottom: theme.space.s40
		},
		[MOBILE_BREAK]: {
			marginBottom: theme.space.s32
		}
	}),

	eyebrow: css({
		margin: `0 0 ${theme.space.s8}`,
		font: theme.font.sm,
		color: theme.color.primary100,
		letterSpacing: '0.08em',
		textTransform: 'uppercase'
	}),

	heading: css({
		margin: 0,
		font: theme.font.h2,
		color: theme.color.textPrimary,
		letterSpacing: '-0.03em',
		[TABLET_BREAK]: {
			font: theme.font.h3,
			letterSpacing: '-0.025em'
		},
		[MOBILE_BREAK]: {
			font: theme.font.h4,
			letterSpacing: '-0.02em'
		}
	}),

	grid: css({
		display: 'grid',
		gridTemplateColumns: '1fr',
		gap: theme.space.s24,
		[TABLET_LARGE_UP]: {
			gridTemplateColumns: 'repeat(2, 1fr)'
		}
	}),

	card: css({
		backgroundColor: theme.color.cardBackground90,
		border: theme.border.default,
		borderRadius: theme.borderRadius.radiusLarge,
		padding: theme.space.s32,
		display: 'flex',
		flexDirection: 'column',
		gap: theme.space.s12,
		transition: 'border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease',
		'&:hover': {
			borderColor: theme.color.primary100,
			boxShadow: theme.shadow.default100,
			transform: 'translateY(-4px)'
		}
	}),

	cardNumber: css({
		margin: 0,
		font: theme.font.h2,
		color: withAlpha(theme.color.primary100, 40),
		lineHeight: 1
	}),

	cardTitle: css({
		margin: 0,
		font: theme.font.h5,
		color: theme.color.textPrimary
	}),

	cardBody: css({
		margin: 0,
		font: theme.font.md,
		color: theme.color.textSecondary,
		lineHeight: 1.65
	})
};
