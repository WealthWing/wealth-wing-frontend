import { css } from '@emotion/react';
import { theme } from '@wealth-wing/tayo';

export const sidebarWidth = '90px';

export const sidebar = {
	root: css`
		align-items: center;
		background: ${theme.color.cardBackground100};
		border-radius: ${theme.borderRadius.radiusDefault};
		box-shadow: ${theme.shadow.default100};
		display: flex;
		flex-direction: column;
		gap: ${theme.space.s24};
		height: calc(100% - ${theme.space.s24});
		padding: ${theme.space.s16};
		position: fixed;
		width: ${sidebarWidth};
	`,
	separator: css`
		background: linear-gradient(
			90deg,
			rgb(224 225 226 / 0%) 0%,
			rgb(224 225 226) 49.52%,
			rgb(224 225 226 / 0%) 100%
		);
		border: none;
		height: 1px;
		width: 100%;
	`,
	top: css`
		display: flex;
		flex-direction: column;
		gap: ${theme.space.s12};
	`
};
