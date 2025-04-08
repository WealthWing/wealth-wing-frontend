import { css } from '@emotion/react';

import { theme } from '../theme';

const formTheme = {
	borderWidth: '1px',
	borderWidthFocused: '2px',
	borderColorErrorFocused: theme.color.red100,
	borderColorErrorResting: theme.color.red80,
	borderColorFocused: theme.color.green90,
	borderDefault: theme.color.black40
};

export const formControl = {
	root: css`
		background-color: ${theme.color.cardBackground80};
		border-radius: ${theme.borderRadius.radiusMedium};
		box-shadow: ${theme.shadow.default100};
		display: flex;
		grid-row-gap: ${theme.space.s4};
	`,
	disabledControl: css`
		box-shadow: none;
		cursor: not-allowed;
		opacity: 0.5;

		* {
			cursor: not-allowed;
		}
	`,
	restingDefault: css`
		box-shadow: none;
	`,
	restingError: css`
		box-shadow: 0 0 0 ${formTheme.borderWidthFocused} ${formTheme.borderColorErrorResting};
	`,
	focused: css`
		box-shadow: 0 0 0 ${formTheme.borderWidthFocused} ${formTheme.borderColorFocused};
	`,
	focusedError: css`
		box-shadow: 0 0 0 ${formTheme.borderWidthFocused} ${formTheme.borderColorErrorFocused};
	`
};
