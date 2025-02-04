import { css } from '@emotion/react';
import { theme } from '@wealth-wing/tayo';

export const sidebarLink = css`
	align-items: center;
	color: ${theme.color.textPrimary};
	display: flex;
	font: ${theme.font.button};
	overflow-x: hidden;
	padding: ${theme.space.s8} ${theme.space.s12};
	transition: background-color 0.2s ease-in-out;
	white-space: nowrap;
	width: 100%;
`;
