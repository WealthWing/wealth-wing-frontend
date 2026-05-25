import { css, keyframes } from '@emotion/react';
import { mq, mqValues } from '@wealth-wing/tayo/src/constants/media-queries';
import { theme } from '@wealth-wing/tayo/src/theme/dark-theme';
import { MAX_WIDTH } from '../hero/hero.styles';

const HEADER_HEIGHT = '5rem';
const HEADER_HEIGHT_SCROLLED = '3.5rem';

const pulseKeyframe = keyframes`
	0%, 100% { opacity: 1; transform: scale(1); }
	50%       { opacity: 0.45; transform: scale(0.85); }
`;

export const headerStyles = {
	root: css({
		position: 'fixed',
		top: 0,
		left: 0,
		right: 0,
		zIndex: 100,
		backgroundColor: 'transparent',
		height: HEADER_HEIGHT,
		transition: 'background-color 0.3s ease, border-color 0.3s ease, height 0.25s ease'
	}),

	scrolled: css({
		backgroundColor: theme.color.cardBackground100,
		borderBottom: theme.border.default,
		height: HEADER_HEIGHT_SCROLLED
	}),

	inner: css({
		maxWidth: MAX_WIDTH,
		margin: '0 auto',
		padding: `0 ${theme.space.s16}`,
		height: HEADER_HEIGHT,
		display: 'grid',
		gridTemplateColumns: '1fr auto',
		gridTemplateAreas: '"logo actions"',
		alignItems: 'center',
		gap: theme.space.s24,
		[mq.tabletLarge]: {
			gridTemplateColumns: '1fr auto 1fr',
			gridTemplateAreas: '"logo nav actions"',
			padding: `0 ${theme.space.s24}`
		}
	}),

	logoGroup: css({
		gridArea: 'logo',
		display: 'flex',
		alignItems: 'center',
		gap: theme.space.s16,
		minWidth: 0
	}),

	logo: css({
		font: theme.font.h5,
		color: theme.color.textPrimary,
		textDecoration: 'none',
		display: 'inline-flex',
		alignItems: 'baseline',
		letterSpacing: '-0.02em',
		width: 'fit-content',
		'&:focus-visible': {
			outline: `2px solid ${theme.color.primary100}`,
			outlineOffset: '4px',
			borderRadius: theme.borderRadius.radiusSmall
		}
	}),

	availabilityPill: css({
		display: 'none',
		alignItems: 'center',
		gap: theme.space.s8,
		font: theme.font.sm,
		color: '#4ADE80',
		whiteSpace: 'nowrap',
		[mq.tabletLarge]: {
			display: 'inline-flex'
		}
	}),

	availabilityDot: css({
		width: '8px',
		height: '8px',
		borderRadius: '50%',
		backgroundColor: '#4ADE80',
		flexShrink: 0,
		animation: `${pulseKeyframe} 2s ease-in-out infinite`
	}),

	logoDot: css({
		color: theme.color.primary100,
		marginLeft: '1px'
	}),

	nav: css({
		gridArea: 'nav',
		display: 'none',
		justifyContent: 'center',
		alignItems: 'center',
		gap: theme.space.s32,
		[mq.tabletLarge]: {
			display: 'flex'
		}
	}),

	navLink: css({
		font: theme.font.button,
		color: theme.color.textSecondary,
		textDecoration: 'none',
		position: 'relative',
		padding: `${theme.space.s4} 0`,
		transition: 'color 0.15s ease',
		'&:hover': {
			color: theme.color.textPrimary
		},
		'&:focus-visible': {
			outline: `2px solid ${theme.color.primary100}`,
			outlineOffset: '4px',
			borderRadius: theme.borderRadius.radiusSmall
		}
	}),

	navLinkActive: css({
		color: theme.color.textPrimary,
		'&::after': {
			content: '""',
			position: 'absolute',
			bottom: 0,
			left: 0,
			right: 0,
			height: '1.5px',
			backgroundColor: theme.color.primary100,
			borderRadius: '1px'
		}
	}),

	actions: css({
		gridArea: 'actions',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		gap: theme.space.s12
	}),

	ctaLink: css({
		display: 'none',
		alignItems: 'center',
		gap: theme.space.s8,
		font: theme.font.button,
		color: theme.color.black100,
		backgroundColor: theme.color.primary100,
		padding: `${theme.space.s10} ${theme.space.s20}`,
		borderRadius: theme.borderRadius.radiusMedium,
		textDecoration: 'none',
		whiteSpace: 'nowrap',
		transition: 'opacity 0.15s ease, transform 0.15s ease',
		'&:hover': {
			opacity: 0.88,
			transform: 'translateY(-1px)'
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
		[mq.tabletSmall]: {
			display: 'inline-flex'
		}
	}),

	menuButton: css({
		display: 'flex',
		background: 'transparent',
		border: 'none',
		color: theme.color.textPrimary,
		cursor: 'pointer',
		padding: theme.space.s8,
		borderRadius: theme.borderRadius.radiusSmall,
		alignItems: 'center',
		justifyContent: 'center',
		lineHeight: 0,
		'&:focus-visible': {
			outline: `2px solid ${theme.color.primary100}`,
			outlineOffset: '2px'
		},
		[mq.tabletLarge]: {
			display: 'none'
		}
	})
};

export const mobileMenuStyles = {
	panel: css({
		position: 'fixed',
		top: HEADER_HEIGHT,
		left: 0,
		right: 0,
		zIndex: 99,
		backgroundColor: theme.color.cardBackground100,
		borderBottom: theme.border.default,
		padding: `${theme.space.s16} ${theme.space.s24} ${theme.space.s24}`,
		opacity: 0,
		visibility: 'hidden',
		transform: 'translateY(-0.5rem)',
		transition: 'opacity 0.22s ease, transform 0.22s ease, visibility 0.22s ease',
		[`@media (min-width: ${mqValues.tabletLarge}px)`]: {
			display: 'none'
		}
	}),

	panelOpen: css({
		opacity: 1,
		visibility: 'visible',
		transform: 'translateY(0)'
	}),

	panelScrolled: css({
		top: HEADER_HEIGHT_SCROLLED
	}),

	navList: css({
		display: 'flex',
		flexDirection: 'column',
		padding: 0,
		margin: 0
	}),

	navLink: css({
		font: theme.font.h6,
		color: theme.color.textSecondary,
		textDecoration: 'none',
		padding: `${theme.space.s16} 0`,
		borderBottom: theme.border.default,
		display: 'block',
		transition: 'color 0.15s ease',
		'&:hover': {
			color: theme.color.textPrimary
		},
		'&:focus-visible': {
			outline: `2px solid ${theme.color.primary100}`,
			outlineOffset: '4px',
			borderRadius: theme.borderRadius.radiusSmall
		}
	}),

	navLinkActive: css({
		color: theme.color.textPrimary
	}),

	ctaWrapper: css({
		marginTop: theme.space.s24,
		[`@media (min-width: ${mqValues.tabletSmall}px)`]: {
			display: 'none'
		}
	}),

	ctaLink: css({
		display: 'inline-flex',
		alignItems: 'center',
		gap: theme.space.s8,
		font: theme.font.button,
		color: theme.color.black100,
		backgroundColor: theme.color.primary100,
		padding: `${theme.space.s12} ${theme.space.s20}`,
		borderRadius: theme.borderRadius.radiusMedium,
		textDecoration: 'none',
		transition: 'opacity 0.15s ease',
		'&:hover': {
			opacity: 0.88
		},
		'&:focus-visible': {
			outline: `2px solid ${theme.color.primary100}`,
			outlineOffset: '3px',
			borderRadius: theme.borderRadius.radiusMedium
		}
	})
};
