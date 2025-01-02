import { ButtonVariant, ButtonFormat, ButtonSize } from './base.definitions';
import { ColorCustomProperty, SizeValue, Space, theme } from '../theme';
import { css } from '@emotion/react';

type ButtonStyles = {
	background: ColorCustomProperty | string;
	color: ColorCustomProperty | string;
	activeColor: ColorCustomProperty | string;
	hoverColor: ColorCustomProperty;
};

export const styles: Record<ButtonVariant, Record<ButtonFormat, ButtonStyles>> = {
	primary: {
		regular: {
			activeColor: theme.color.primary80,
			background: theme.color.primary100,
			color: theme.color.black10,
			hoverColor: theme.color.primary10
		},
		light: {
			activeColor: theme.color.primary60,
			background: theme.color.primary40,
			color: theme.color.primary100,
			hoverColor: theme.color.primary100
		},
		text: {
			activeColor: theme.color.primary40,
			background: 'transparent',
			color: theme.color.primary100,
			hoverColor: theme.color.primary100
		},
		outline: {
			activeColor: theme.color.primary90,
			background: 'transparent',
			color: theme.color.primary100,
			hoverColor: theme.color.primary40
		}
	},
	secondary: {
		regular: {
			activeColor: theme.color.secondary80,
			background: theme.color.secondary100,
			color: theme.color.black10,
			hoverColor: theme.color.secondary20
		},
		light: {
			activeColor: theme.color.secondary60,
			background: theme.color.secondary40,
			color: theme.color.secondary100,
			hoverColor: theme.color.secondary100
		},
		text: {
			activeColor: theme.color.secondary40,
			background: 'transparent',
			color: theme.color.secondary100,
			hoverColor: theme.color.secondary100
		},
		outline: {
			activeColor: theme.color.secondary90,
			background: 'transparent',
			color: theme.color.secondary100,
			hoverColor: theme.color.secondary40
		}
	},
	tertiary: {
		regular: {
			activeColor: theme.color.black10,
			background: theme.color.black05,
			color: theme.color.black100,
			hoverColor: theme.color.black90
		},
		light: {
			activeColor: theme.color.black20,
			background: theme.color.black10,
			color: theme.color.black100,
			hoverColor: theme.color.black90
		},
		text: {
			activeColor: theme.color.black40,
			background: 'transparent',
			color: theme.color.black05,
			hoverColor: theme.color.black05
		},
		outline: {
			activeColor: theme.color.black40,
			background: 'transparent',
			color: theme.color.black05,
			hoverColor: theme.color.black10
		}
	},
	success: {
		regular: {
			activeColor: theme.color.green80,
			background: theme.color.green100,
			color: theme.color.black10,
			hoverColor: theme.color.green10
		},
		light: {
			activeColor: theme.color.green60,
			background: theme.color.green40,
			color: theme.color.green100,
			hoverColor: theme.color.green100
		},
		text: {
			activeColor: theme.color.green40,
			background: 'transparent',
			color: theme.color.green100,
			hoverColor: theme.color.green100
		},
		outline: {
			activeColor: theme.color.green90,
			background: 'transparent',
			color: theme.color.green100,
			hoverColor: theme.color.green40
		}
	},
	warning: {
		regular: {
			activeColor: theme.color.yellow80,
			background: theme.color.yellow100,
			color: theme.color.black10,
			hoverColor: theme.color.yellow10
		},
		light: {
			activeColor: theme.color.yellow60,
			background: theme.color.yellow40,
			color: theme.color.yellow100,
			hoverColor: theme.color.yellow100
		},
		text: {
			activeColor: theme.color.yellow40,
			background: 'transparent',
			color: theme.color.yellow100,
			hoverColor: theme.color.yellow100
		},
		outline: {
			activeColor: theme.color.yellow90,
			background: 'transparent',
			color: theme.color.yellow100,
			hoverColor: theme.color.yellow40
		}
	},
	danger: {
		regular: {
			activeColor: theme.color.red80,
			background: theme.color.red100,
			color: theme.color.black10,
			hoverColor: theme.color.red10
		},
		light: {
			activeColor: theme.color.red60,
			background: theme.color.red40,
			color: theme.color.red100,
			hoverColor: theme.color.red100
		},
		text: {
			activeColor: theme.color.red40,
			background: 'transparent',
			color: theme.color.red100,
			hoverColor: theme.color.red100
		},
		outline: {
			activeColor: theme.color.red90,
			background: 'transparent',
			color: theme.color.red100,
			hoverColor: theme.color.red40
		}
	}
};

type ButtonSizeProperties = {
	minSize: SizeValue;
	paddingHorizontal: Space;
	paddingVertical: Space;
};

const buttonSizes: Record<ButtonSize, ButtonSizeProperties> = {
	medium: {
		minSize: '2.25rem',
		paddingHorizontal: 's8',
		paddingVertical: 's20'
	},
	small: {
		minSize: '1rem',
		paddingHorizontal: 's4',
		paddingVertical: 's12'
	}
};

const hover = (format: ButtonFormat, variant: ButtonVariant) => css`
	:hover:not([aria-disabled='true']) {
		background: ${styles[variant][format].activeColor};
		color: ${styles[variant][format].hoverColor};
	}
`;

export const button = (format: ButtonFormat, variant: ButtonVariant, size: ButtonSize) => css`
	align-items: center;
	background-color: ${styles[variant][format].background};
	border-radius: 10px;
	color: ${styles[variant][format].color};
	display: inline-flex;
	flex-direction: row;
	font: 500 0.875rem/1.25rem Inter, sans-serif;
	gap: ${theme.space.s8};
	justify-content: center;
	min-height: ${buttonSizes[size].minSize};
	min-width: ${buttonSizes[size].minSize};
	padding: ${theme.space[buttonSizes[size].paddingHorizontal]}${theme.space[buttonSizes[size].paddingVertical]};
	white-space: nowrap;
	width: fit-content;
	${hover(format, variant)}
`;

export const outline = (variant: ButtonVariant) => css`
	border: ${`1px solid ${styles[variant].outline.color}`};
`;

export const disabledStyle = css`
	cursor: not-allowed;
	opacity: 0.4;
`;
