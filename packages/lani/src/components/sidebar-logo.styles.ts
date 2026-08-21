import { css } from '@emotion/react';
import { theme } from '@wealth-wing/tayo';

export const sidebarLogo = {
	link: css`
		align-items: center;
		background: linear-gradient(145deg, ${theme.color.primary05}, ${theme.color.primary20});
		border: 1px solid ${theme.color.primary40};
		border-radius: ${theme.borderRadius.radiusMedium};
		box-shadow: inset 0 1px 0 rgb(255 255 255 / 55%), 0 4px 12px rgb(9 24 65 / 18%);
		display: flex;
		height: ${theme.space.s40};
		justify-content: center;
		transition: border-color 160ms ease, box-shadow 160ms ease, transform 160ms ease;
		width: 58px;

		&:hover {
			border-color: ${theme.color.primary60};
			box-shadow: inset 0 1px 0 rgb(255 255 255 / 65%), 0 6px 16px rgb(9 24 65 / 24%);
			transform: translateY(-1px);
		}

		&:focus-visible {
			outline: 2px solid ${theme.color.primary60};
			outline-offset: 3px;
		}

		&:active {
			transform: translateY(0);
		}
	`
};
