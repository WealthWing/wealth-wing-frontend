import { css } from '@emotion/react';
import { mqValues, theme } from '@wealth-wing/tayo';

import { MAX_WIDTH } from '../hero/hero.styles';

const TABLET_LARGE_UP = `@media (min-width: ${mqValues.tabletLarge}px)`;
const LAPTOP_UP = `@media (min-width: ${mqValues.laptop}px)`;
const TABLET_BREAK = `@media (max-width: ${mqValues.tabletLarge - 1}px)`;
const MOBILE_BREAK = `@media (max-width: ${mqValues.tabletSmall - 1}px)`;

export const servicesStyles = {
	root: css({
		backgroundColor: theme.color.pageBackground,
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
		},
		[LAPTOP_UP]: {
			gridTemplateColumns: 'repeat(4, 1fr)'
		}
	}),

	card: css({
		backgroundColor: theme.color.cardBackground100,
		border: theme.border.default,
		borderRadius: theme.borderRadius.radiusLarge,
		padding: theme.space.s24,
		display: 'flex',
		flexDirection: 'column',
		gap: theme.space.s16,
		transition: 'border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease',
		'&:hover': {
			borderColor: theme.color.primary100,
			boxShadow: theme.shadow.default100,
			transform: 'translateY(-3px)'
		}
	}),

	iconWrapper: css({
		display: 'inline-flex',
		lineHeight: 0
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
		lineHeight: 1.6,
		flex: 1
	}),

	ctaWrapper: css({
		display: 'flex',
		justifyContent: 'center',
		marginTop: theme.space.s64,
		[MOBILE_BREAK]: {
			marginTop: theme.space.s40
		}
	}),

	ctaLink: css({
		display: 'inline-flex',
		alignItems: 'center',
		gap: theme.space.s8,
		font: theme.font.button,
		color: theme.color.black100,
		backgroundColor: theme.color.primary100,
		padding: `${theme.space.s12} ${theme.space.s24}`,
		borderRadius: theme.borderRadius.radiusMedium,
		textDecoration: 'none',
		whiteSpace: 'nowrap',
		transition: 'opacity 0.15s ease, transform 0.15s ease',
		'&:hover': {
			opacity: 0.88,
			transform: 'translateY(-2px)'
		},
		'&:active': {
			opacity: 0.75,
			transform: 'translateY(0)'
		},
		'&:focus-visible': {
			outline: `2px solid ${theme.color.primary100}`,
			outlineOffset: '3px',
			borderRadius: theme.borderRadius.radiusMedium
		}
	}),

	ctaArrow: css({
		fontSize: '0.875rem',
		lineHeight: 1,
		display: 'inline-block'
	})
};
