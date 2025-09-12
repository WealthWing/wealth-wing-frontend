import { css } from '@emotion/react';

import { theme } from '../../theme';

const radioTransition = `0.2s ease-out`;
const radioDotTransition = `0.25s ease-in-out`;

export const radioSharedStyles = {
	radio: css`
		background-color: ${theme.color.primary20};
		border: ${theme.border.default};
		border-radius: 50%;
		box-shadow: ${theme.shadow.default100};
		height: 1.25rem;
		min-height: 1.25rem;
		min-width: 1.25rem;
		position: relative;
		transition: border ${radioTransition}, box-shadow ${radioTransition},
			background-color ${radioTransition};
		width: 1.25rem;
	`,
	radioDot: css`
		background-color: ${theme.color.primary90};
		border-radius: 50%;
		content: '';
		height: 0;
		left: 50%;
		position: absolute;
		top: 50%;
		transform: translate(-50%, -50%);
		transition: height ${radioDotTransition}, width ${radioDotTransition},
			box-shadow ${radioTransition};
		width: 0;
	`,
	radioChecked: css`
		background-color: ${theme.color.primary40};
		border: ${theme.border.default};
		box-shadow: ${theme.shadow.default100};
	`,
	radioCheckedDot: css`
		border: ${theme.border.default};
		box-shadow: ${theme.shadow.default100};
		height: 0.6rem;
		width: 0.6rem;
	`,
	focus: css`
		input:focus-visible ~ .wrapper .radio {
			${theme.shadow.default100};
		}

		input:checked:focus-visible ~ .wrapper .radio {
			${theme.shadow.default100};
		}
	`
};

export const radio = {
	root: css`
		cursor: pointer;
		position: relative;
		user-select: none;

		.wrapper {
			display: flex;
			flex-direction: row;
			gap: ${theme.space.s8};
			position: relative;
			width: fit-content;
		}

		input {
			cursor: pointer;
			height: 100%;
			left: 0;
			margin: 0;
			opacity: 0;
			position: absolute;
			top: 0;
			width: 100%;
			z-index: 1;
		}

		.label {
			color: ${theme.color.textPrimary};
			font: ${theme.font.md};
		}

		.radio {
			${radioSharedStyles.radio}
			margin-top: 2px;
		}

		.radio::after {
			${radioSharedStyles.radioDot};
		}

		/* Hover */
		&:hover input:not(:disabled) ~ .wrapper::after {
			background-color: rgb(0 0 0 / 5%);
			border-radius: ${theme.borderRadius.radiusMedium};
			content: ' ';
			height: calc(100% + 4px);
			left: -4px;
			mix-blend-mode: darken;
			position: absolute;
			top: -2px;
			width: calc(100% + 8px + 4px);
		}

		/* Checked */
		input:checked ~ .wrapper .radio {
			${radioSharedStyles.radioChecked}
		}

		input:checked ~ .wrapper .radio::after {
			${radioSharedStyles.radioCheckedDot}
		}

		/* Focus */
		${radioSharedStyles.focus}

		/* Disabled */
	input:disabled {
			cursor: not-allowed;
		}

		input:disabled ~ .wrapper {
			opacity: 0.7;
		}

		input:disabled ~ .wrapper .label,
		input:disabled ~ .wrapper .description {
			color: ${theme.color.black40};
		}

		input:disabled ~ .wrapper * {
			box-shadow: none;
		}
	`
};
