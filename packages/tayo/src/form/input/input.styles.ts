import { css } from '@emotion/react';

import { theme } from '../../theme';

export const input = css`
	background-color: transparent;
	border: none;
	color: ${theme.color.textSecondary};
	display: flex;
	flex: 1;
	font: ${theme.font.sm};
	grid-area: input;
	padding: 0;

	::placeholder {
		color: ${theme.color.black40};
	}

	:focus {
		outline: none;
	}
`;

export const addon = css`
	align-items: center;
	display: flex;
	gap: ${theme.space.s8};
	grid-area: buttons;
	justify-content: center;
`;
