import { css } from '@emotion/react';
import { theme } from '@wealth-wing/tayo';

export const transactionsPage = {
	sideBar: css`
		align-self: start;
		background-color: ${theme.color.cardBackground100};
		border-radius: ${theme.borderRadius.radiusDefault};
		box-shadow: ${theme.shadow.default200};
		height: 100%;
		max-height: calc(100vh - var(--header-h) - ${theme.space.s16});
		overflow: auto;
		padding: ${theme.space.s20};
		position: sticky;
		top: 0;
		top: var(--header-h);
		width: 250px;
	`
};
