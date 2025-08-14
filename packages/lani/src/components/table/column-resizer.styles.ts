import { css } from '@emotion/react';
import { theme } from '@wealth-wing/tayo';

export const resizer = css`
	cursor: col-resize;
	height: 100%;
	padding-left: 5px;
	position: absolute;
	right: 0;
	top: 0;
	touch-action: none;
	user-select: none;
	width: 2px;

	:hover,
	:active {
		background-color: ${theme.color.indigo40};
		border-bottom: 6px solid ${theme.color.cardBackground60};
		border-top: 6px solid ${theme.color.cardBackground60};
	}
`;
