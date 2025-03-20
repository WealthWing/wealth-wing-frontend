import { css } from '@emotion/react';
import { theme } from '@wealth-wing/tayo';

export const stickyContainer = css({
	backgroundColor: theme.color.cardBackground90,
	padding: theme.space.s16,
	position: 'sticky',
	top: 0,
	width: '100%',
	zIndex: 1
});

export const container = css`
	position: relative;
`;

export const overflowX = css`
	overflow-x: auto;
	padding-bottom: ${theme.space.s8};
	padding-top: ${theme.space.s2};
`;
