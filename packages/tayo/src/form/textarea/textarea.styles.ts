import { css } from '@emotion/react';
import { theme } from '@wealth-wing/tayo';

export const textArea = (lines?: number) => css`
	background-color: transparent;
	border: none;
	color: ${theme.color.textSecondary};
	display: flex;
	flex: 1;
	font: ${theme.font.sm};
	grid-area: input;
	height: ${lines && lines > 0 ? `${lines}rem` : '5rem'};
	padding: 0;
	resize: none;

	::placeholder {
		color: ${theme.color.black40};
	}

	:focus {
		outline: none;
	}
`;
