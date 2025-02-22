import { css } from '@emotion/react';
import { theme } from '@wealth-wing/tayo';

export const rightSidebar = {
	root: css`
		background-color: ${theme.color.cardBackground100};
		border-left: ${theme.border.default};
		height: calc(100vh - 1.5rem);
		max-height: calc(100vh - 1.5rem);
		overflow: hidden;
		position: sticky;
		top: 12px;
		width: 350px;
		z-index: 3;
	`
};
