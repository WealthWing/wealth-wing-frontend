import { ButtonVariant, ButtonFormat, ButtonSize } from './base.definitions';
import { ColorCustomProperty, SizeValue, Space, theme } from '../theme';
import { css } from '@emotion/react';
import { format } from 'path';

type ButtonStyles = {
	background: ColorCustomProperty | string;
	color: ColorCustomProperty | string;
	activeColor: ColorCustomProperty | string;
};

export const styles: Record<ButtonVariant, Record<ButtonFormat, ButtonStyles>> = {
	primary: {
		regular: {
			background: theme.color.darkBlue60,
			activeColor: theme.color.darkBlue40,
			color: theme.color.black10
		},
		alternate: {
			background: theme.color.darkBlue80,
			color: theme.color.black10,
			activeColor: theme.color.darkBlue40
		},
		sub: {
			background: theme.color.darkBlue20,
			color: theme.color.black10,
			activeColor: theme.color.darkBlue40
		},
		outline: {
			background: 'transparent',
			color: theme.color.black10,
			activeColor: theme.color.darkBlue40
		}
	},
	secondary: {
		regular: {
			background: theme.color.black80,
			activeColor: theme.color.darkBlue40,
			color: theme.color.black05
		},
		alternate: {
			background: theme.color.black80,
			activeColor: theme.color.darkBlue40,
			color: theme.color.black05
		},
		sub: {
			background: theme.color.black40,
			activeColor: theme.color.darkBlue40,
			color: theme.color.black05
		},
		outline: {
			background: 'transparent',
			activeColor: theme.color.darkBlue40,
			color: theme.color.black05
		}
	},
	success: {
		regular: {
			background: theme.color.green60,
			activeColor: theme.color.darkBlue40,
			color: theme.color.black05
		},
		alternate: {
			background: theme.color.green40,
			activeColor: theme.color.darkBlue40,
			color: theme.color.black05
		},
		sub: {
			background: theme.color.green20,
			activeColor: theme.color.darkBlue40,
			color: theme.color.black05
		},
		outline: {
			background: 'transparent',
			activeColor: theme.color.darkBlue40,
			color: theme.color.black05
		}
	},
	warning: {
		regular: {
			background: theme.color.indigo60,
			activeColor: theme.color.darkBlue40,
			color: theme.color.black05
		},
		alternate: {
			background: theme.color.indigo40,
			activeColor: theme.color.darkBlue40,
			color: theme.color.black05
		},
		sub: {
			background: theme.color.indigo20,
			activeColor: theme.color.darkBlue40,
			color: theme.color.black05
		},
		outline: {
			background: 'transparent',
			activeColor: theme.color.darkBlue40,
			color: theme.color.black05
		}
	},
	danger: {
		regular: {
			background: theme.color.red100,
			activeColor: theme.color.darkBlue40,
			color: theme.color.black05
		},
		alternate: {
			background: theme.color.red40,
			activeColor: theme.color.darkBlue40,
			color: theme.color.black05
		},
		sub: {
			background: theme.color.red20,
			activeColor: theme.color.darkBlue40,
			color: theme.color.black05
		},
		outline: {
			background: 'transparent',
			activeColor: theme.color.darkBlue40,
			color: theme.color.black05
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
		color: ${styles[variant][format].color};
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
