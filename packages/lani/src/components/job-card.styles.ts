import { css } from '@emotion/react';
import { theme } from '@wealth-wing/tayo';

export const jobCard = {
	root: css`
		background-color: ${theme.color.cardBackground80};
		border-radius: ${theme.borderRadius.radiusLarge};
		box-shadow: ${theme.shadow.default100};
		min-width: 12.5rem;
		padding: ${theme.space.s20};
		position: relative;
		width: 100%;

		:hover {
			background-color: ${theme.color.cardBackground60};
		}
	`,
	link: css`
		cursor: pointer;
		height: 100%;
		left: 0;
		padding: 0;
		position: absolute;
		top: 0;
		width: 100%;
	`
};
