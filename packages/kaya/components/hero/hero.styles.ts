import { css } from '@emotion/react';
import { mqValues, theme, mq } from '@wealth-wing/tayo';

const HEADER_HEIGHT = '5rem';
export const MAX_WIDTH = '78rem';
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
		paddingTop: `calc(${HEADER_HEIGHT} + 2.5rem)`,
		paddingBottom: '4rem',

		[mq.laptop]: {
			paddingTop: `calc(${HEADER_HEIGHT} + 3rem)`,
			paddingBottom: '2.5rem'
		},
		[mq.desktop]: {
			paddingTop: `calc(${HEADER_HEIGHT} + 5rem)`,
			paddingBottom: '7rem'
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
		display: 'inline-flex',
		alignItems: 'center',
		font: theme.font.sm,
		color: theme.color.primary100,
		letterSpacing: '0.1em',
		textTransform: 'uppercase',
		fontSize: '0.68rem',
		fontWeight: 700,
		background: withAlpha(theme.color.primary100, 8),
		border: `1px solid ${withAlpha(theme.color.primary100, 22)}`,
		padding: `5px ${theme.space.s12}`,
		borderRadius: theme.borderRadius.radiusSmall,
		width: 'fit-content'
	}),

	headline: css({
		margin: 0,
		font: theme.font.h1,
		color: theme.color.textPrimary,
		letterSpacing: '-0.03em',

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

	// ─── Capability Stack card ───────────────────────────────────────────────────
	capabilityCard: css({
		backgroundColor: theme.color.indigo100,
		borderRadius: theme.borderRadius.radiusXLarge,
		border: `1px solid ${withAlpha(theme.color.indigo60, 32)}`,
		overflow: 'hidden',
		boxShadow: `0 0 0 1px ${withAlpha(theme.color.primary100, 8)}, ${theme.shadow.default200}`
	}),

	capabilityHeader: css({
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: `${theme.space.s12} ${theme.space.s20}`,
		borderBottom: `1px solid ${withAlpha(theme.color.indigo60, 20)}`
	}),

	capabilityHeaderLabel: css({
		font: theme.font.sm,
		color: theme.color.textSecondary,
		fontSize: '0.68rem',
		letterSpacing: '0.1em',
		textTransform: 'uppercase',
		opacity: 0.6
	}),

	capabilityHeaderStatus: css({
		display: 'flex',
		alignItems: 'center',
		gap: '6px',
		font: theme.font.sm,
		color: theme.color.green40,
		fontSize: '0.68rem',
		letterSpacing: '0.04em'
	}),

	capabilityStatusPulse: css({
		width: '6px',
		height: '6px',
		borderRadius: '50%',
		backgroundColor: theme.color.green40,
		flexShrink: 0,
		animation: 'capabilityPulse 2.4s ease-in-out infinite',
		'@keyframes capabilityPulse': {
			'0%, 100%': { opacity: 1, transform: 'scale(1)' },
			'50%': { opacity: 0.35, transform: 'scale(0.85)' }
		}
	}),

	capabilityTiers: css({
		padding: `${theme.space.s8} 0`
	}),

	capabilityTier: css({
		display: 'flex',
		alignItems: 'flex-start',
		gap: theme.space.s16,
		padding: `${theme.space.s16} ${theme.space.s20}`,
		transition: 'background-color 0.15s ease',
		'&:hover': {
			backgroundColor: withAlpha(theme.color.indigo60, 8)
		}
	}),

	tierDivider: css({
		height: '1px',
		backgroundColor: withAlpha(theme.color.indigo60, 18),
		margin: `0 ${theme.space.s20}`
	}),

	tierDotWrapper: css({
		paddingTop: '3px',
		flexShrink: 0
	}),

	tierDotIndigo: css({
		display: 'block',
		width: '8px',
		height: '8px',
		borderRadius: '50%',
		backgroundColor: theme.color.indigo20,
		boxShadow: `0 0 7px 1px ${withAlpha(theme.color.indigo20, 55)}`
	}),

	tierDotPrimary: css({
		display: 'block',
		width: '8px',
		height: '8px',
		borderRadius: '50%',
		backgroundColor: theme.color.primary100,
		boxShadow: `0 0 7px 1px ${withAlpha(theme.color.primary100, 55)}`
	}),

	tierDotGreen: css({
		display: 'block',
		width: '8px',
		height: '8px',
		borderRadius: '50%',
		backgroundColor: theme.color.green40,
		boxShadow: `0 0 7px 1px ${withAlpha(theme.color.green40, 55)}`
	}),

	tierContent: css({
		display: 'flex',
		flexDirection: 'column',
		gap: '4px'
	}),

	tierLabel: css({
		font: theme.font.sm,
		color: theme.color.textPrimary,
		fontWeight: 600,
		fontSize: '0.88rem',
		letterSpacing: '-0.01em',
		lineHeight: 1.3
	}),

	tierSub: css({
		font: theme.font.sm,
		color: theme.color.textSecondary,
		fontSize: '0.73rem',
		lineHeight: 1.45,
		opacity: 0.7
	}),

	capabilityFooter: css({
		padding: `${theme.space.s12} ${theme.space.s20}`,
		borderTop: `1px solid ${withAlpha(theme.color.indigo60, 18)}`,
		display: 'flex',
		alignItems: 'center',
		gap: theme.space.s8
	}),

	capabilityFooterNote: css({
		font: theme.font.sm,
		color: theme.color.textSecondary,
		fontSize: '0.7rem',
		opacity: 0.45,
		letterSpacing: '0.06em',
		textTransform: 'uppercase',
		fontStyle: 'italic'
	})
};
