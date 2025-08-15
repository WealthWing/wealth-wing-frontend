import { css } from '@emotion/react';
import { theme } from '@wealth-wing/tayo';

export const transactionsPage = {
	sideBar: css`
		align-self: flex-start;
		background-color: ${theme.color.cardBackground100};
		border-radius: ${theme.borderRadius.radiusDefault};
		box-shadow: ${theme.shadow.default200};
		height: 100%;
		padding: ${theme.space.s20};
		position: sticky;
		top: 0;
	`
};
