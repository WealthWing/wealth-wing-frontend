import { css } from '@emotion/react';
import { theme } from '@wealth-wing/tayo';

export const scope = {
	root: css`
		display: flex;
		flex: 1 0 0;
		flex-direction: column;
		gap: ${theme.space.s20};
		position: relative;
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
		width: calc(100% - 100px);
	`,
	headerContainer: css`
		background-color: ${theme.color.cardBackground90};
		padding: ${theme.space.s16};
		position: sticky;
		top: 0;
		width: 100%;
	`
};
