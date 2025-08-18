import { css } from '@emotion/react';
import { theme } from '@wealth-wing/tayo';

export const headerHeight = '64px';

export const headingContainer = css`
	background-color: ${theme.color.cardBackground90};
	height: ${headerHeight};
	padding: ${theme.space.s16};
	position: 'sticky';
	top: 0;
	width: '100%';
	z-index: 1;
`;
