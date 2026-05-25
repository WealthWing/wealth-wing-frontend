import { css } from '@emotion/react';
import { mq, mqValues } from '@wealth-wing/tayo/src/constants/media-queries';
import { theme } from '@wealth-wing/tayo/src/theme/dark-theme';
import { MAX_WIDTH } from '../hero/hero.styles';

const MOBILE_BREAK = `@media (max-width: ${mqValues.tabletSmall - 1}px)`;
const TABLET_BREAK = `@media (max-width: ${mqValues.tabletLarge - 1}px)`;

const withAlpha = (color: string, alphaPercent: number) =>
	`color-mix(in srgb, ${color} ${alphaPercent}%, transparent)`;

export const productionFootprintStyles = {
	root: css({
		position: 'relative',
		backgroundColor: theme.color.darkBlue90,
		background: `radial-gradient(ellipse at 50% -20%, ${withAlpha(
			theme.color.indigo60,
			15
		)}, transparent 70%), ${theme.color.darkBlue100}`,
		borderTop: `1px solid ${withAlpha(theme.color.indigo60, 30)}`,
		borderBottom: `1px solid ${withAlpha(theme.color.indigo60, 30)}`,
		overflow: 'hidden'
	}),

	inner: css({
		position: 'relative',
		zIndex: 1,
		maxWidth: MAX_WIDTH,
		margin: '0 auto',
		padding: `${theme.space.s16} ${theme.space.s16}`,
		display: 'flex',
		alignItems: 'center',
		gap: theme.space.s32,
		flexWrap: 'wrap',
		[TABLET_BREAK]: {
			gap: theme.space.s24
		},
		[MOBILE_BREAK]: {
			flexDirection: 'column',
			alignItems: 'flex-start',
			padding: `${theme.space.s16} ${theme.space.s16}`,
			gap: theme.space.s16
		}
	}),

	label: css({
		font: theme.font.sm,
		color: theme.color.textSecondary,
		fontSize: '0.78rem',
		fontWeight: 500,
		letterSpacing: '0.08em',
		textTransform: 'uppercase',
		flexShrink: 0,
		whiteSpace: 'nowrap'
	}),

	divider: css({
		width: '1px',
		height: '2rem',
		background: `linear-gradient(to bottom, transparent, ${withAlpha(
			theme.color.primary100,
			40
		)}, transparent)`,
		flexShrink: 0,
		[MOBILE_BREAK]: {
			display: 'none'
		}
	}),

	slots: css({
		display: 'flex',
		alignItems: 'center',
		gap: theme.space.s16,
		flexWrap: 'wrap',
		[MOBILE_BREAK]: {
			display: 'grid',
			gridTemplateColumns: '1fr 1fr',
			width: '100%'
		}
	}),

	slot: css({
		display: 'inline-flex',
		alignItems: 'center',
		gap: theme.space.s8,
		padding: `6px ${theme.space.s16}`,
		borderRadius: '2rem',
		border: `1px solid ${withAlpha(theme.color.indigo60, 40)}`,
		backgroundColor: withAlpha(theme.color.indigo60, 12),
		boxShadow: `inset 0 1px 1px ${withAlpha(theme.color.indigo20, 10)}`,
		transition: 'all 0.25s ease',
		cursor: 'default',
		'&:hover': {
			borderColor: withAlpha(theme.color.primary100, 50),
			backgroundColor: withAlpha(theme.color.primary100, 8),
			boxShadow: `0 0 12px ${withAlpha(
				theme.color.primary100,
				15
			)}, inset 0 1px 1px ${withAlpha(theme.color.primary100, 20)}`,
			transform: 'translateY(-1px)'
		}
	}),

	slotDot: css({
		width: '6px',
		height: '6px',
		borderRadius: '50%',
		backgroundColor: theme.color.primary100,
		boxShadow: `0 0 8px 1px ${withAlpha(theme.color.primary100, 60)}`,
		flexShrink: 0,
		animation: 'footprintPulse 3s ease-in-out infinite',
		'@keyframes footprintPulse': {
			'0%, 100%': { opacity: 1, transform: 'scale(1)' },
			'50%': { opacity: 0.5, transform: 'scale(0.8)' }
		}
	}),

	slotLabel: css({
		font: theme.font.sm,
		color: theme.color.textPrimary,
		fontSize: '0.8rem',
		fontWeight: 500,
		letterSpacing: '0.02em',
		opacity: 0.9,
		transition: 'color 0.2s ease',
		'div:hover > &': {
			color: theme.color.primary100
		}
	})
};
