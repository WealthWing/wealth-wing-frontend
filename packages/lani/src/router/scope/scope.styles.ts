import { css } from '@emotion/react';
import { theme } from '@wealth-wing/tayo';

export const scope = {
	root: css`
		display: flex;
		flex-direction: column;
		gap: ${theme.space.s20};
	`,
	container: css`
		align-items: center;
		display: flex;
		flex-direction: column;
		width: 100%;
	`,
	scopes: css`
		display: flex;
		flex-direction: column;
		gap: ${theme.space.s20};
		width: calc(100% - 300px);
	`
};
