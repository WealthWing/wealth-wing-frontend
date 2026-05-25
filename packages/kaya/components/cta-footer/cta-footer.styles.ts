import { css, keyframes } from '@emotion/react';
import { mqValues } from '@wealth-wing/tayo/src/constants/media-queries';
import { theme } from '@wealth-wing/tayo/src/theme/dark-theme';

import { MAX_WIDTH } from '../hero/hero.styles';

const TABLET_LARGE_UP = `@media (min-width: ${mqValues.tabletLarge}px)`;
const TABLET_BREAK = `@media (max-width: ${mqValues.tabletLarge - 1}px)`;
const MOBILE_BREAK = `@media (max-width: ${mqValues.tabletSmall - 1}px)`;

const withAlpha = (color: string, alphaPercent: number) =>
	`color-mix(in srgb, ${color} ${alphaPercent}%, transparent)`;

const pulse = keyframes({
	'0%, 100%': { opacity: 1, transform: 'scale(1)' },
	'50%': { opacity: 0.55, transform: 'scale(0.8)' }
});

const formField = css({
	width: '100%',
	boxSizing: 'border-box',
	backgroundColor: theme.color.darkBlue80,
	border: theme.border.default,
	borderRadius: theme.borderRadius.radiusMedium,
	padding: `${theme.space.s16} ${theme.space.s20}`,
	font: theme.font.md,
	color: theme.color.textPrimary,
	boxShadow: 'none',
	transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
	'&::placeholder': {
		color: theme.color.textSecondary,
		opacity: 0.72
	},
	'&:focus': {
		outline: 'none',
		borderColor: theme.color.primary100,
		boxShadow: `0 0 0 3px ${withAlpha(theme.color.primary100, 20)}`
	}
});

export const ctaFooterStyles = {
	// ── CTA Block ──────────────────────────────────────────────────────────────
	ctaBlock: css({
		position: 'relative',
		overflow: 'hidden',
		backgroundColor: theme.color.darkBlue100,
		padding: `${theme.space.s96} 0`,
		textAlign: 'left',
		[TABLET_BREAK]: {
			padding: `${theme.space.s64} 0`
		},
		[MOBILE_BREAK]: {
			padding: `${theme.space.s40} 0`
		}
	}),

	// Dot-grid texture — same technique as hero section
	gridOverlay: css({
		position: 'absolute',
		inset: 0,
		backgroundImage: `radial-gradient(circle, ${withAlpha(
			theme.color.indigo60,
			8
		)} 1px, transparent 1px)`,
		backgroundSize: '28px 28px',
		pointerEvents: 'none',
		zIndex: 0
	}),

	// Radial orange glow centered behind the headline
	glowOverlay: css({
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -60%)',
		width: '60rem',
		height: '36rem',
		background: `radial-gradient(ellipse at center, ${withAlpha(
			theme.color.primary100,
			9
		)} 0%, transparent 68%)`,
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

	formWrapper: css({
		maxWidth: '44rem',
		margin: '0 auto',
		textAlign: 'left'
	}),

	headline: css({
		margin: `0 0 ${theme.space.s16}`,
		font: theme.font.h2,
		color: theme.color.textPrimary,
		letterSpacing: 0,
		[TABLET_BREAK]: {
			font: theme.font.h3,
			letterSpacing: 0
		},
		[MOBILE_BREAK]: {
			font: theme.font.h4,
			letterSpacing: 0
		}
	}),

	accentWord: css({
		color: theme.color.primary100
	}),

	subtext: css({
		margin: `0 0 ${theme.space.s32}`,
		maxWidth: '36rem',
		font: theme.font.md,
		color: theme.color.textSecondary,
		lineHeight: 1.7
	}),

	form: css({
		display: 'grid',
		gap: theme.space.s16
	}),

	formField,

	formTextarea: css([
		formField,
		{
			minHeight: '8rem',
			resize: 'vertical'
		}
	]),

	formEmail: css([
		formField,
		{
			minHeight: '3.5rem'
		}
	]),

	formRow: css({
		display: 'flex',
		alignItems: 'center',
		gap: theme.space.s16,
		[MOBILE_BREAK]: {
			alignItems: 'stretch',
			flexDirection: 'column'
		}
	}),

	ctaButton: css({
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		gap: theme.space.s8,
		font: theme.font.button,
		color: theme.color.textPrimary,
		backgroundColor: theme.color.primary100,
		border: 'none',
		padding: `${theme.space.s16} ${theme.space.s32}`,
		borderRadius: theme.borderRadius.radiusMedium,
		cursor: 'pointer',
		textDecoration: 'none',
		whiteSpace: 'nowrap',
		transition: 'opacity 0.15s ease, transform 0.15s ease, box-shadow 0.15s ease',
		'&:hover': {
			opacity: 0.88,
			transform: 'translateY(-2px)',
			boxShadow: `0 8px 28px ${withAlpha(theme.color.primary100, 30)}`
		},
		'&:active': {
			opacity: 0.75,
			transform: 'translateY(0)'
		},
		'&:focus-visible': {
			outline: `2px solid ${theme.color.primary100}`,
			outlineOffset: '3px',
			borderRadius: theme.borderRadius.radiusMedium
		},
		[MOBILE_BREAK]: {
			width: '100%'
		}
	}),

	ctaArrow: css({
		fontSize: '0.875rem',
		lineHeight: 1,
		display: 'inline-block'
	}),

	availabilityPill: css({
		display: 'flex',
		alignItems: 'center',
		gap: theme.space.s8,
		font: theme.font.sm,
		color: theme.color.textSecondary
	}),

	availabilityDot: css({
		display: 'inline-block',
		flexShrink: 0,
		width: '8px',
		height: '8px',
		borderRadius: '50%',
		backgroundColor: theme.color.green100,
		animation: `${pulse} 2.4s ease-in-out infinite`
	}),

	// ── Footer ─────────────────────────────────────────────────────────────────
	footer: css({
		backgroundColor: theme.color.darkBlue100,
		borderTop: theme.border.default,
		padding: `${theme.space.s32} 0`
	}),

	footerInner: css({
		maxWidth: MAX_WIDTH,
		margin: '0 auto',
		padding: `0 ${theme.space.s24}`,
		display: 'grid',
		gridTemplateColumns: '1fr 1fr',
		alignItems: 'center',
		[TABLET_LARGE_UP]: {
			padding: `0 ${theme.space.s24}`
		},
		[MOBILE_BREAK]: {
			gridTemplateColumns: '1fr',
			textAlign: 'center',
			padding: `0 ${theme.space.s16}`,
			gap: theme.space.s20
		}
	}),

	footerIdentity: css({}),

	footerName: css({
		margin: 0,
		font: theme.font.h6,
		color: theme.color.textPrimary
	}),

	footerTagline: css({
		margin: `${theme.space.s4} 0 0`,
		font: theme.font.sm,
		color: theme.color.textSecondary
	}),

	footerLinks: css({
		display: 'flex',
		flexWrap: 'wrap',
		alignItems: 'center',
		gap: `${theme.space.s8} ${theme.space.s16}`,
		justifyContent: 'flex-end',
		[MOBILE_BREAK]: {
			justifyContent: 'center'
		}
	}),

	footerLink: css({
		font: theme.font.sm,
		color: theme.color.textSecondary,
		textDecoration: 'none',
		transition: 'color 0.15s ease',
		'&:hover': {
			color: theme.color.textPrimary
		},
		'&:focus-visible': {
			outline: `2px solid ${theme.color.primary100}`,
			outlineOffset: '3px',
			borderRadius: theme.borderRadius.radiusSmall
		}
	}),

	footerText: css({
		font: theme.font.sm,
		color: theme.color.textSecondary
	}),

	footerCopyright: css({
		gridColumn: '1 / -1',
		margin: `${theme.space.s24} 0 0`,
		paddingTop: theme.space.s24,
		borderTop: theme.border.default,
		font: theme.font.sm,
		color: theme.color.textSecondary,
		textAlign: 'center'
	})
};
