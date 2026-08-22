import * as React from 'react';

import { IconName } from '../icon';

export const buttonVariants = [
	'primary',
	'secondary',
	'tertiary',
	'success',
	'warning',
	'danger'
] as const;
export type ButtonVariant = (typeof buttonVariants)[number];

export type ButtonSize = 'medium' | 'small';

export const buttonFormats = ['regular', 'light', 'text', 'outline'] as const;
export type ButtonFormat = (typeof buttonFormats)[number];

export type BaseProps = {
	children: React.ReactNode;
	format: ButtonFormat;
	variant: ButtonVariant;
	isLoading?: boolean;
	size?: ButtonSize;
	isFullWidth?: boolean;
	leftIcon?: IconName;
	rightIcon?: IconName;
};

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & BaseProps;
