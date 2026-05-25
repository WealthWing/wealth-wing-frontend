import { css } from '@emotion/react';
import { mqValues, theme } from '@wealth-wing/tayo';
import type { AlphaLevel } from '@wealth-wing/tayo';

import { MAX_WIDTH } from '../hero/hero.styles';

const TABLET_BREAK = `@media (max-width: ${mqValues.tabletLarge - 1}px)`;
const MOBILE_BREAK = `@media (max-width: ${mqValues.tabletSmall - 1}px)`;

const withAlpha = (color: string, alphaPercent: AlphaLevel) =>
	`color-mix(in srgb, ${color} ${alphaPercent}%, transparent)`;

export const servicesStyles = {
	// ─── Shell ────────────────────────────────────────────────────────────────
	root: css({
		backgroundColor: theme.color.darkBlue100,
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
		marginBottom: theme.space.s40,
		[TABLET_BREAK]: {
			marginBottom: theme.space.s32
		},
		[MOBILE_BREAK]: {
			marginBottom: theme.space.s24
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

	// ─── Hub ──────────────────────────────────────────────────────────────────
	subheading: css({
		margin: `${theme.space.s12} 0 0`,
		font: theme.font.lg,
		color: theme.color.textSecondary,
		maxWidth: '52ch',
		lineHeight: 1.55
	}),

	trackNav: css({
		display: 'flex',
		gap: 0,
		borderBottom: theme.border.default,
		marginBottom: theme.space.s40,
		overflowX: 'auto',
		[MOBILE_BREAK]: {
			marginBottom: theme.space.s32
		}
	}),

	trackTab: css({
		position: 'relative',
		background: 'none',
		border: 'none',
		cursor: 'pointer',
		font: theme.font.sm,
		color: theme.color.textSecondary,
		padding: `0 ${theme.space.s16} ${theme.space.s12}`,
		paddingLeft: 0,
		marginRight: theme.space.s24,
		whiteSpace: 'nowrap',
		lineHeight: 1,
		transition: 'color 0.15s ease',
		'&:hover': { color: theme.color.textPrimary },
		'&:focus-visible': {
			outline: `2px solid ${theme.color.primary100}`,
			outlineOffset: '3px',
			borderRadius: '2px'
		}
	}),

	trackTabActive: css({
		color: theme.color.textPrimary
	}),

	tabIndicator: css({
		position: 'absolute',
		bottom: '-1px',
		left: 0,
		right: 0,
		height: '2px',
		backgroundColor: theme.color.primary100,
		borderRadius: '2px'
	}),

	hubBody: css({
		display: 'grid',
		gridTemplateColumns: '2fr 3fr',
		gap: theme.space.s40,
		alignItems: 'start',
		[TABLET_BREAK]: {
			gridTemplateColumns: '1fr',
			gap: theme.space.s32
		}
	}),

	metricsPanel: css({
		display: 'flex',
		flexDirection: 'column',
		gap: theme.space.s24
	}),

	coreFocus: css({
		margin: 0,
		font: theme.font.md,
		color: theme.color.textSecondary,
		lineHeight: 1.65
	}),

	stackRow: css({
		display: 'flex',
		flexWrap: 'wrap',
		gap: theme.space.s8
	}),

	tag: css({
		display: 'inline-block',
		padding: `${theme.space.s4} ${theme.space.s8}`,
		backgroundColor: theme.color.cardBackground80,
		borderRadius: theme.borderRadius.radiusSmall,
		font: theme.font.sm,
		color: theme.color.textSecondary,
		lineHeight: 1.4
	}),

	metricsBlock: css({
		display: 'grid',
		gridTemplateColumns: 'auto 1fr',
		gap: `${theme.space.s8} ${theme.space.s16}`,
		alignItems: 'baseline',
		margin: 0,
		padding: 0,
		listStyle: 'none'
	}),

	metricKey: css({
		fontFamily:
			"'ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'Liberation Mono', monospace",
		fontSize: '0.6875rem',
		textTransform: 'uppercase',
		letterSpacing: '0.1em',
		color: theme.color.indigo40,
		margin: 0
	}),

	metricValue: css({
		font: theme.font.md,
		fontFamily:
			"'ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'Liberation Mono', monospace",
		fontWeight: 600,
		color: theme.color.textPrimary,
		margin: 0
	}),

	bestUsedFor: css({
		margin: 0,
		font: theme.font.sm,
		color: theme.color.textSecondary,
		lineHeight: 1.65,
		borderLeft: `2px solid ${theme.color.indigo40}`,
		paddingLeft: theme.space.s12
	}),

	canvasWrapper: css({
		position: 'relative',
		borderRadius: theme.borderRadius.radiusLarge,
		border: theme.border.default,
		backgroundColor: theme.color.cardBackground80,
		overflow: 'hidden',
		height: '440px',
		[TABLET_BREAK]: { height: '320px' },
		[MOBILE_BREAK]: { height: '260px' }
	}),

	architectureCanvasFrame: css({
		width: '100%',
		height: '100%'
	}),

	architectureCanvasRoot: css({
		width: '100%',
		height: '100%',
		['--xy-background-color' as string]: 'transparent',
		['--xy-handle-background-color' as string]: 'transparent',
		['--xy-handle-border-color' as string]: 'transparent'
	}),

	architectureCanvasNodeBase: css({
		borderRadius: theme.borderRadius.radiusSmall,
		padding: `${theme.space.s8} ${theme.space.s12}`,
		font: theme.font.sm,
		whiteSpace: 'nowrap',
		lineHeight: 1.4
	}),

	architectureCanvasSourceNode: css({
		backgroundColor: theme.color.cardBackground80,
		border: `1px solid ${theme.color.indigo40}`,
		color: theme.color.textSecondary
	}),

	architectureCanvasProcessNode: css({
		backgroundColor: theme.color.cardBackground100,
		border: `1px solid ${withAlpha(theme.color.primary100, 40)}`,
		color: theme.color.textPrimary
	}),

	architectureCanvasOutputNode: css({
		backgroundColor: withAlpha(theme.color.primary100, 10),
		border: `1px solid ${theme.color.primary100}`,
		color: theme.color.primary100,
		fontWeight: 600
	}),

	architectureCanvasDatabaseNode: css({
		backgroundColor: theme.color.cardBackground80,
		border: `1px solid ${theme.color.green100}`,
		color: theme.color.green100
	}),

	architectureCanvasRealmLabelNode: css({
		font: theme.font.sm,
		fontWeight: 700,
		letterSpacing: '0.1em',
		textTransform: 'uppercase',
		color: withAlpha(theme.color.textSecondary, 60),
		borderBottom: `1px solid ${withAlpha(theme.color.indigo40, 60)}`,
		paddingBottom: theme.space.s4,
		whiteSpace: 'nowrap',
		pointerEvents: 'none'
	}),

	architectureCanvasHiddenHandle: {
		visibility: 'hidden' as const
	},

	architectureCanvasEdge: {
		stroke: theme.color.indigo40,
		strokeWidth: 1.5
	}
};
