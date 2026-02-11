import { css } from '@emotion/react';

import { zIndex } from '../constants';
import { Color, theme } from '../theme';

export const container = css`
	max-width: calc(100vw - 1rem);
	z-index: ${zIndex.tooltip};
`;

export const content = (backgroundColor: Color) => css`
	background-color: ${theme.color[backgroundColor]};
	border-radius: ${theme.border.default};
	box-shadow: ${theme.color.black10};
	color: ${theme.color.textPrimary};
	font: ${theme.font.sm};
	max-width: 22rem;
	padding: ${theme.space.s8};
	width: auto;
	word-wrap: break-word;
`;
