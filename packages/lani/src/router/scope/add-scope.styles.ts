import { css } from '@emotion/react';
import { buttonStylesConfig, theme } from '@wealth-wing/tayo';

const primaryButtonStyles = buttonStylesConfig.primary.regular;
export const addScope = {
	root: css`
		align-items: center;
		background: ${primaryButtonStyles.background};
		border-radius: ${theme.borderRadius.radiusDefault};
		box-shadow: ${theme.shadow.default100};
		color: ${primaryButtonStyles.color};
		display: inline-flex;
		flex-direction: row;
		font: ${theme.font.lg};
		gap: ${theme.space.s8};
		justify-content: center;
		padding: 1.5rem;
		width: 100%;

		:hover:not([aria-disabled='true']) {
			background: ${primaryButtonStyles.activeColor};
			color: ${primaryButtonStyles.hoverColor};
		}
	`
};
