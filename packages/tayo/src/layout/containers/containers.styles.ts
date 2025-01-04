import { css } from '@emotion/react';

import { theme } from '../../theme';

export const appWrapper = css`
	display: flex;
	flex-direction: column;
	height: 100vh;
	overflow: hidden;
	width: 100%;
`;

export const main = css`
	display: flex;
	flex-direction: column;
	gap: ${theme.space.s12};
	height: 100%;
	overflow-y: auto;
	padding: ${theme.space.s16};
	scroll-behavior: smooth;
`;
