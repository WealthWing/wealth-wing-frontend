import { css } from '@emotion/react';
import { theme } from '@wealth-wing/tayo';

export const accountCard = {
	root: css`
		background-color: ${theme.color.cardBackground80};
		border-radius: ${theme.borderRadius.radiusLarge};
		box-shadow: ${theme.shadow.default100};
		display: flex;
		flex-direction: column;
		gap: ${theme.space.s8};
		height: 100%;
		min-width: 18rem;
		padding: ${theme.space.s10} ${theme.space.s20};
		position: relative;
		width: 100%;
		z-index: 1;
	`,
	container: css`
		display: grid;
		gap: ${theme.space.s20};
		grid-template-columns: repeat(3, 1fr);
	`
};
