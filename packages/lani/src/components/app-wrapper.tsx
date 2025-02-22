import { css } from '@emotion/react';
import { theme } from '@wealth-wing/tayo';
import * as React from 'react';

export const appWrapper = css`
	display: block;
	height: 100vh;
	position: relative;
	padding: ${theme.space.s12};
	z-index: 1;
`;

export const AppWrapper = ({ children }: React.PropsWithChildren<unknown>) => (
	<div css={appWrapper}>{children}</div>
);
