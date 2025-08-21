import { css } from '@emotion/react';
import { buttonStylesConfig, theme } from '@wealth-wing/tayo';

const buttonRegular = buttonStylesConfig.primary.regular;

export const base = css`
	background: transparent;
	border-radius: ${theme.borderRadius.radiusMedium};
	color: ${buttonRegular.color};
	cursor: pointer;
	font: ${theme.font.lg};
	padding: ${theme.space.s4} ${theme.space.s10};
	transition: all 0.2s ease;

	:hover {
		background: ${buttonRegular.activeColor};
	}
`;

export const activeStyle = css`
	background: ${buttonRegular.background};
`;
