import { css } from '@emotion/react';

import { theme } from '../../theme';

export const vertical = css`
	display: flex;
	flex-direction: column;
	gap: ${theme.space.s8};
`;

export const inlineForm = css`
	display: contents;
`;
