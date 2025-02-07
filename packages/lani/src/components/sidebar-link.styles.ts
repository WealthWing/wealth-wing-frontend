import { css } from '@emotion/react';
import { theme } from '@wealth-wing/tayo';

export const sidebarLink = css`
	align-items: center;
	border-radius: ${theme.borderRadius.radiusMedium};
	display: flex;
	font: ${theme.font.h5};
	justify-content: center;
	overflow-x: hidden;
	padding: ${theme.space.s10};
	transition: background-color 0.2s ease-in-out;
	white-space: nowrap;
	width: 100%;
`;

export const sidebarLinkStyles = {
	root: css`
		${sidebarLink}
		color: ${theme.color.textPrimary};

		&:link,
		&:visited,
		&:active {
			color: ${theme.color.textPrimary};
		}

		&:hover {
			background-color: ${theme.color.indigo60};
			color: ${theme.color.textPrimary};
		}
	`,
	active: css`
		${sidebarLink}
		background-color: ${theme.color.indigo80};

		&:link,
		&:visited,
		&:active,
		&:hover {
			color: ${theme.color.textPrimary};
		}

		&:hover {
			background-color: ${theme.color.indigo60};
		}
	`
};
