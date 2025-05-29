import { css } from '@emotion/react';

import { theme } from '../theme';

export const toggle = {
	container: css`
		background-color: rgb(255 255 255 / 3%);
		border-radius: ${theme.borderRadius.radiusMedium};
		box-shadow: ${theme.shadow.default100};
		display: inline-flex;
		gap: ${theme.space.s8};
		padding: ${theme.space.s8};
	`,
	fullWidth: css`
		width: 100%;
	`,
	button: css`
		align-items: center;
		background-color: ${theme.color.cardBackground90};
		border-radius: ${theme.border.default};
		color: ${theme.color.textSecondary};
		display: flex;
		gap: ${theme.space.s8};
		justify-content: center;
		opacity: 0.9;
		padding: ${theme.space.s8} ${theme.space.s12};
		white-space: nowrap;

		:hover {
			background-color: ${theme.color.cardBackground80};
		}
	`,
	activeButton: css`
		background-color: ${theme.color.cardBackground80};
		color: ${theme.color.textPrimary};
		opacity: 1;
	`
};
