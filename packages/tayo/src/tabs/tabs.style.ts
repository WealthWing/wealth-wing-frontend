import { css } from '@emotion/react';

import { buttonStylesConfig } from '../button';
import { theme } from '../theme';

export const tab = {
	container: css`
		display: flex;
		flex-direction: column;
		gap: ${theme.space.s16};
		height: 100%;
		padding: ${theme.space.s16};
	`,
	list: css`
		display: inline-flex;
		max-width: 100%;
		overflow-x: hidden;
		width: min-content;
	`,
	panels: css`
		height: 100%;
		overflow-y: auto;
	`,
	panel: css`
		border-radius: ${theme.border.default};
		height: 100%;
		width: 100%;
	`,
	button: css`
		align-items: center;
		background: transparent;
		border-radius: ${theme.border.default};
		color: ${buttonStylesConfig.tertiary.text.color};
		display: flex;
		gap: ${theme.space.s8};
		padding: ${theme.space.s8} ${theme.space.s12};
		white-space: nowrap;

		&:active,
		&:hover {
			color: ${theme.color.textPrimary};
		}

		&:hover {
			background-color: ${theme.color.indigo60};
		}
	`,
	activeButton: css`
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
