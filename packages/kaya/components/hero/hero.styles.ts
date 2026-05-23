import { css } from '@emotion/react';
import { mqValues, theme } from '@wealth-wing/tayo';

const HEADER_HEIGHT = '5rem';
const MAX_WIDTH = '72rem';
const TABLET_BREAK = `@media (max-width: ${mqValues.tabletLarge - 1}px)`;
const MOBILE_BREAK = `@media (max-width: ${mqValues.tabletSmall - 1}px)`;
const withAlpha = (color: string, alphaPercent: number) =>
	`color-mix(in srgb, ${color} ${alphaPercent}%, transparent)`;

export const heroStyles = {
	// ─── Section shell ───────────────────────────────────────────────────────────
	section: css({
		position: 'relative',
		overflow: 'hidden',
		background: `linear-gradient(155deg, ${theme.color.darkBlue90} 0%, ${theme.color.darkBlue100} 65%)`,
		paddingTop: `calc(${HEADER_HEIGHT} + 5rem)`,
		paddingBottom: '7rem',
		[TABLET_BREAK]: {
			paddingTop: `calc(${HEADER_HEIGHT} + 3.5rem)`,
			paddingBottom: '5rem'
		},
		[MOBILE_BREAK]: {
			paddingTop: `calc(${HEADER_HEIGHT} + 2.5rem)`,
			paddingBottom: '4rem'
		}
	}),

	gridOverlay: css({
		position: 'absolute',
		inset: 0,
		backgroundImage: `radial-gradient(circle, ${withAlpha(
			theme.color.indigo60,
			10
		)} 1px, transparent 1px)`,
		backgroundSize: '28px 28px',
		pointerEvents: 'none',
		zIndex: 0
	}),

	inner: css({
		position: 'relative',
		zIndex: 1,
		maxWidth: MAX_WIDTH,
		margin: '0 auto',
		padding: `0 ${theme.space.s24}`,
		[MOBILE_BREAK]: {
			padding: `0 ${theme.space.s16}`
		}
	}),

	// ─── Two-column layout ───────────────────────────────────────────────────────
	content: css({
		display: 'grid',
		gridTemplateColumns: '1.1fr 0.9fr',
		gap: theme.space.s64,
		alignItems: 'center',
		[TABLET_BREAK]: {
			gridTemplateColumns: '1fr',
			gap: theme.space.s40
		}
	}),

	leftCol: css({
		display: 'flex',
		flexDirection: 'column',
		gap: theme.space.s24
	}),

	rightCol: css({
		[TABLET_BREAK]: {
			maxWidth: '28rem',
			width: '100%',
			margin: '0 auto'
		}
	}),

	// ─── Copy ────────────────────────────────────────────────────────────────────
	eyebrow: css({
		margin: 0,
		font: theme.font.sm,
		color: theme.color.textSecondary,
		letterSpacing: '0.08em',
		textTransform: 'uppercase',
		opacity: 0.75
	}),

	headline: css({
		margin: 0,
		font: theme.font.h1,
		color: theme.color.textPrimary,
		letterSpacing: '-0.03em',
		lineHeight: 1.06,
		[TABLET_BREAK]: {
			font: theme.font.h2,
			letterSpacing: '-0.025em'
		},
		[MOBILE_BREAK]: {
			font: theme.font.h3,
			letterSpacing: '-0.02em'
		}
	}),

	accent: css({
		color: theme.color.primary100,
		display: 'block'
	}),

	body: css({
		margin: 0,
		font: theme.font.lg,
		color: theme.color.textSecondary,
		maxWidth: '36rem',
		lineHeight: 1.7
	}),

	// ─── CTAs ────────────────────────────────────────────────────────────────────
	ctaGroup: css({
		display: 'flex',
		flexWrap: 'wrap',
		gap: theme.space.s12,
		[MOBILE_BREAK]: {
			flexDirection: 'column'
		}
	}),

	ctaPrimary: css({
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
	}),

	ctaSecondary: css({
		display: 'inline-flex',
		alignItems: 'center',
		font: theme.font.button,
		color: theme.color.textPrimary,
		backgroundColor: 'transparent',
		border: theme.border.default,
		padding: `${theme.space.s12} ${theme.space.s24}`,
		borderRadius: theme.borderRadius.radiusMedium,
		textDecoration: 'none',
		whiteSpace: 'nowrap',
		transition: 'background-color 0.15s ease, transform 0.15s ease',
		'&:hover': {
			backgroundColor: withAlpha(theme.color.indigo60, 14),
			transform: 'translateY(-2px)'
		},
		'&:active': {
			transform: 'translateY(0)'
		},
		'&:focus-visible': {
			outline: `2px solid ${theme.color.primary100}`,
			outlineOffset: '3px'
		}
	}),

	// ─── Dashboard mockup shell ───────────────────────────────────────────────────
	mockup: css({
		backgroundColor: theme.color.indigo100,
		borderRadius: theme.borderRadius.radiusXLarge,
		border: `1px solid ${withAlpha(theme.color.indigo60, 32)}`,
		overflow: 'hidden',
		boxShadow: `0 0 0 1px ${withAlpha(theme.color.primary100, 8)}, ${theme.shadow.default200}`
	}),

	// ─── Window chrome ────────────────────────────────────────────────────────────
	mockupChrome: css({
		display: 'flex',
		alignItems: 'center',
		gap: theme.space.s8,
		padding: `${theme.space.s12} ${theme.space.s16}`,
		borderBottom: `1px solid ${withAlpha(theme.color.indigo60, 20)}`
	}),

	chromeDot: css({
		width: '10px',
		height: '10px',
		borderRadius: '50%',
		display: 'inline-block',
		flexShrink: 0
	}),

	chromeDotError: css({
		backgroundColor: theme.color.red80
	}),

	chromeDotWarning: css({
		backgroundColor: theme.color.yellow100
	}),

	chromeDotSuccess: css({
		backgroundColor: theme.color.green100
	}),

	chromeLabel: css({
		font: theme.font.sm,
		color: theme.color.textSecondary,
		margin: '0 auto',
		opacity: 0.55,
		fontSize: '0.7rem',
		letterSpacing: '0.03em'
	}),

	// ─── Code card ───────────────────────────────────────────────────────────────
	mockupPad: css({
		padding: `${theme.space.s16} ${theme.space.s16} 0`
	}),

	mockupCodeCard: css({
		backgroundColor: theme.color.indigo90,
		border: `1px solid ${withAlpha(theme.color.indigo60, 24)}`,
		borderRadius: theme.borderRadius.radiusLarge,
		padding: `${theme.space.s16} ${theme.space.s20}`
	}),

	code: css({
		margin: 0,
		fontFamily: "'Fira Code', 'Cascadia Code', 'JetBrains Mono', 'Courier New', monospace",
		fontSize: '0.82rem',
		lineHeight: 1.6,
		color: theme.color.textSecondary,
		whiteSpace: 'pre'
	}),

	codeKeyword: css({ color: theme.color.primary100, fontWeight: 600 }),
	codeIdent: css({ color: theme.color.textPrimary }),
	codeOp: css({ color: theme.color.indigo40 }),
	codeIdent2: css({ color: theme.color.indigo20 }),
	codeIdent3: css({ color: theme.color.green40 }),

	// ─── Connector ───────────────────────────────────────────────────────────────
	connector: css({
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: `${theme.space.s4} 0`,
		gap: '3px'
	}),

	connectorLine: css({
		width: '1px',
		height: '14px',
		backgroundColor: theme.color.primary100,
		opacity: 0.45
	}),

	connectorArrow: css({
		color: theme.color.primary100,
		opacity: 0.5,
		lineHeight: 1,
		fontSize: '0.7rem'
	}),

	// ─── UI output card ───────────────────────────────────────────────────────────
	mockupUiCard: css({
		backgroundColor: theme.color.indigo90,
		border: `1px solid ${withAlpha(theme.color.indigo60, 24)}`,
		borderRadius: theme.borderRadius.radiusLarge,
		padding: `${theme.space.s16} ${theme.space.s20}`,
		display: 'flex',
		flexDirection: 'column',
		gap: theme.space.s12,
		marginBottom: theme.space.s16
	}),

	uiCardHeader: css({
		display: 'flex',
		alignItems: 'center',
		gap: theme.space.s8
	}),

	uiStatusDot: css({
		width: '7px',
		height: '7px',
		borderRadius: '50%',
		backgroundColor: theme.color.primary100,
		flexShrink: 0
	}),

	uiLabel: css({
		font: theme.font.sm,
		color: theme.color.textSecondary,
		fontWeight: 600,
		fontSize: '0.68rem',
		letterSpacing: '0.07em',
		textTransform: 'uppercase'
	}),

	uiMetrics: css({
		display: 'flex',
		flexDirection: 'column',
		gap: theme.space.s8
	}),

	uiMetricRow: css({
		display: 'flex',
		alignItems: 'center',
		gap: theme.space.s8
	}),

	uiMetricCheck: css({
		color: theme.color.green40,
		fontSize: '0.7rem',
		lineHeight: 1,
		flexShrink: 0
	}),

	uiMetricText: css({
		font: theme.font.sm,
		color: theme.color.textSecondary,
		fontSize: '0.78rem',
		flex: 1
	}),

	uiMetricBadge: css({
		font: theme.font.sm,
		color: theme.color.primary100,
		fontSize: '0.75rem',
		fontWeight: 700
	}),

	progressTrack: css({
		height: '4px',
		backgroundColor: withAlpha(theme.color.indigo60, 28),
		borderRadius: '2px',
		overflow: 'hidden',
		marginTop: theme.space.s4
	}),

	progressFill: css({
		height: '100%',
		backgroundColor: theme.color.primary100,
		borderRadius: '2px'
	})
};
