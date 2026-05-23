import { css } from '@emotion/react';
import { mqValues, theme } from '@wealth-wing/tayo';

import { MAX_WIDTH } from '../hero/hero.styles';

const TABLET_LARGE_UP = `@media (min-width: ${mqValues.tabletLarge}px)`;
const LAPTOP_UP = `@media (min-width: ${mqValues.laptop}px)`;
const TABLET_BREAK = `@media (max-width: ${mqValues.tabletLarge - 1}px)`;
const MOBILE_BREAK = `@media (max-width: ${mqValues.tabletSmall - 1}px)`;

// Circle dimensions
const CIRCLE_SIZE = '3rem'; // 48px
const CIRCLE_HALF = '1.5rem'; // 24px — vertical/horizontal center

const withAlpha = (color: string, alphaPercent: number) =>
	`color-mix(in srgb, ${color} ${alphaPercent}%, transparent)`;

// Connector line colour — a very subtle 12% black, matching the light-theme border feel
const CONNECTOR_COLOR = withAlpha(theme.color.black100, 12);

export const processStyles = {
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

	// Semantic <ol> — screen readers announce "list of 4 items"
	timeline: css({
		listStyle: 'none',
		padding: 0,
		margin: 0,

		// ── Mobile base: single-column flex stack ──────────────────────────────
		display: 'flex',
		flexDirection: 'column',
		rowGap: 0,

		// ── Tablet (800px+): 2-column grid, no connectors ──────────────────────
		[TABLET_LARGE_UP]: {
			display: 'grid',
			gridTemplateColumns: 'repeat(2, 1fr)',
			gap: theme.space.s40
		},

		// ── Laptop (1280px+): 4-column grid + horizontal connector line ─────────
		[LAPTOP_UP]: {
			gridTemplateColumns: 'repeat(4, 1fr)',
			// No column gap so the ::before line math works cleanly
			columnGap: 0,
			rowGap: theme.space.s40,
			position: 'relative',

			// Single decorative line spanning col-1-centre → col-4-centre.
			// With 4 equal cols and no column-gap:
			//   col-1 centre = 12.5% from left
			//   col-4 centre = 12.5% from right
			'&::before': {
				content: '""',
				position: 'absolute',
				top: CIRCLE_HALF,
				left: '12.5%',
				right: '12.5%',
				height: '1px',
				backgroundColor: CONNECTOR_COLOR,
				zIndex: 0
			}
		}
	}),

	// Each step — rendered as <motion.li>
	step: css({
		position: 'relative',

		// ── Mobile base: horizontal row (circle | text) ─────────────────────────
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'flex-start',
		gap: theme.space.s16,
		paddingBottom: theme.space.s40,

		// Vertical connector — runs from the bottom of this circle to the
		// vertical centre of the next circle, bridging the row-gap.
		'&::after': {
			content: '""',
			position: 'absolute',
			top: CIRCLE_SIZE,
			// Extends 1.5rem (CIRCLE_HALF) beyond the bottom of this <li>
			// so it reaches the centre of the next step's circle.
			bottom: `calc(-1 * ${CIRCLE_HALF})`,
			left: `calc(${CIRCLE_HALF} - 0.5px)`,
			width: '1px',
			backgroundColor: CONNECTOR_COLOR,
			zIndex: 0
		},

		'&:last-child': {
			paddingBottom: 0,
			'&::after': {
				display: 'none'
			}
		},

		// ── Tablet (800px+): vertical stack, centred, hide mobile connector ─────
		[TABLET_LARGE_UP]: {
			flexDirection: 'column',
			alignItems: 'center',
			textAlign: 'center',
			paddingBottom: 0,
			gap: 0,
			'&::after': {
				display: 'none'
			},
			'&:last-child': {
				paddingBottom: 0,
				'&::after': {
					display: 'none'
				}
			}
		},

		// ── Laptop (1280px+): horizontal padding + above-line z-index ───────────
		[LAPTOP_UP]: {
			padding: `0 ${theme.space.s20}`,
			zIndex: 1
		}
	}),

	circleWrapper: css({
		flexShrink: 0,
		// Tablet+: space between circle and step title in vertical layout
		[TABLET_LARGE_UP]: {
			marginBottom: theme.space.s20
		}
	}),

	// The numbered circle — white disc sitting above the connector line
	circle: css({
		width: CIRCLE_SIZE,
		height: CIRCLE_SIZE,
		borderRadius: '50%',
		backgroundColor: theme.color.cardBackground100,
		border: theme.border.default,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		position: 'relative',
		zIndex: 1,
		// Subtle shadow so the circle lifts off the connector line
		boxShadow: `0 1px 4px ${withAlpha(theme.color.black100, 6)}`
	}),

	stepNumber: css({
		font: theme.font.sm,
		fontWeight: 700,
		color: theme.color.primary100,
		lineHeight: 1,
		letterSpacing: '0.04em'
	}),

	stepContent: css({
		display: 'flex',
		flexDirection: 'column',
		gap: theme.space.s8,
		// On mobile horizontal row: takes up the remaining width
		flex: 1,
		[TABLET_LARGE_UP]: {
			flex: 'none'
		}
	}),

	stepTitle: css({
		margin: 0,
		font: theme.font.h5,
		color: theme.color.textPrimary
	}),

	stepBody: css({
		margin: 0,
		font: theme.font.md,
		color: theme.color.textSecondary,
		lineHeight: 1.65
	})
};
