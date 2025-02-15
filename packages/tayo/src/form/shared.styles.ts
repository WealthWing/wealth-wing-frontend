import { css } from '@emotion/react';

import { theme } from '../theme';

export const requiredAsterisk = css`
	::after {
		color: ${theme.color.red100};
		content: '*';
		font: ${theme.font.sm};
		margin-left: ${theme.space.s4};
	}
`;

export const screenReaderOnly = css`
	border-width: 0;
	clip: rect(0, 0, 0, 0);
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
	white-space: nowrap;
	width: 1px;
`;
