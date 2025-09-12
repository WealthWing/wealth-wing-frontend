import { css } from '@emotion/react';

import { theme } from '../theme';

export const dropdownPanel = {
	menu: css`
		background-color: ${theme.color.cardBackground80};
		border-radius: ${theme.borderRadius.radiusSmall};
		box-shadow: ${theme.shadow.default200};
		display: flex;
		flex-direction: column;
		min-width: 13rem;
		overflow: hidden;
		padding: ${theme.space.s12};
		width: fit-content;
		z-index: 100;
	`
};
