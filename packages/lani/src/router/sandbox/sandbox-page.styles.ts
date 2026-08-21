import { css } from '@emotion/react';
import { theme } from '@wealth-wing/tayo';

export const page = css({
	background: theme.color.pageBackground,
	color: theme.color.textPrimary,
	minHeight: '100%',
	padding: theme.space.s32
});

export const header = css({
	alignItems: 'center',
	display: 'flex',
	flexWrap: 'wrap',
	gap: theme.space.s16,
	justifyContent: 'space-between',
	marginBottom: theme.space.s32
});

export const navigation = css({
	display: 'flex',
	flexWrap: 'wrap',
	gap: theme.space.s8
});

export const navLink = css({
	border: `1px solid ${theme.color.black40}`,
	borderRadius: theme.borderRadius.radiusDefault,
	color: theme.color.textPrimary,
	font: theme.font.button,
	padding: `${theme.space.s8} ${theme.space.s12}`,
	textDecoration: 'none',
	'&:hover': {
		borderColor: theme.color.primary40
	}
});

export const activeNavLink = css({
	background: theme.color.primary100,
	borderColor: theme.color.primary100,
	color: theme.color.black10
});

export const content = css({
	maxWidth: '48rem'
});

export const panel = css({
	background: theme.color.cardBackground90,
	border: `1px solid ${theme.color.indigo80}`,
	borderRadius: theme.borderRadius.radiusDefault,
	maxWidth: '48rem',
	padding: theme.space.s24
});
