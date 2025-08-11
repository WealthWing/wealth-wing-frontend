import { css } from '@emotion/react';

import { theme } from '../theme';

export const skeletonLoaderContainerDefault = css`
	display: flex;
	flex-direction: column;
	gap: ${theme.space.s8};
	width: 100%;
`;
