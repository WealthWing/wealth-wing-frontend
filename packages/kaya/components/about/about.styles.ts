import { css } from '@emotion/react';
import { mqValues, theme } from '@wealth-wing/tayo';
import { MAX_WIDTH } from '../hero/hero.styles';

const TABLET_BREAK = `@media (max-width: ${mqValues.tabletLarge - 1}px)`;
const MOBILE_BREAK = `@media (max-width: ${mqValues.tabletSmall - 1}px)`;

export const aboutStyles = {
	root: css({
		backgroundColor: theme.color.pageBackground,
		padding: `${theme.space.s96} 0`,
		borderTop: theme.border.default,
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
	grid: css({
		display: 'grid',
		gridTemplateColumns: '5fr 7fr',
		gap: theme.space.s64,
		alignItems: 'center',
		[TABLET_BREAK]: {
			gridTemplateColumns: '1fr',
			gap: theme.space.s40
		}
	}),
	photoBox: css({
		borderRadius: theme.borderRadius.radiusXLarge,
		boxShadow: theme.shadow.default100,
		backgroundColor: theme.color.cardBackground100,
		aspectRatio: '4 / 5',
		width: '100%',
		overflow: 'hidden',
		[TABLET_BREAK]: {
			maxWidth: '28rem',
			margin: '0 auto',
			aspectRatio: '4 / 3'
		}
	}),
	textColumn: css({
		display: 'flex',
		flexDirection: 'column',
		gap: theme.space.s24,
		justifyContent: 'center'
	}),
	sectionHeading: css({
		margin: `0 0 ${theme.space.s40}`,
		font: theme.font.h2,
		color: theme.color.textPrimary,
		letterSpacing: '-0.03em',
		textTransform: 'uppercase',
		[TABLET_BREAK]: {
			font: theme.font.h3,
			letterSpacing: '-0.025em',
			marginBottom: theme.space.s32
		},
		[MOBILE_BREAK]: {
			font: theme.font.h4,
			letterSpacing: '-0.02em',
			marginBottom: theme.space.s24
		}
	}),
	pullQuote: css({
		font: theme.font.lg,
		color: theme.color.textPrimary,
		fontWeight: 600,
		margin: 0,
		lineHeight: 1.5
	}),
	body: css({
		font: theme.font.md,
		color: theme.color.black60,
		margin: 0,
		lineHeight: 1.7
	}),
};
