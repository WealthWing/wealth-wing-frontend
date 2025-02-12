import { css } from '@emotion/react';
import { theme } from '@wealth-wing/tayo';

export const menu = {
	root: css`
		background-color: ${theme.color.cardBackground90};
		border-radius: ${theme.borderRadius.radiusMedium};
		box-shadow: ${theme.shadow.default300};
		display: flex;
		flex-direction: column;
		min-width: 10rem;
		overflow: hidden;
		width: fit-content;
		z-index: 100;
	`,
	menuItem: css`
		color: ${theme.color.textPrimary};
		list-style-type: none;
	`,
	menuDisabled: css`
		cursor: not-allowed;
		opacity: 0.5;

		:active,
		:hover {
			background-color: transparent;
		}
	`,
	buttonLink: css`
		align-items: center;
		background-color: transparent;
		color: ${theme.color.indigo20};
		display: flex;
		font: ${theme.font.md};
		gap: ${theme.space.s8};
		padding: ${theme.space.s8} ${theme.space.s10};
		width: 100%;

		:active,
		:hover {
			background-color: ${theme.color.cardBackground60};
		}
	`
};
