import type * as React from 'react';

import type { Gradient } from '../theme';

export const progressBarVariants = [
	'primary',
	'secondary',
	'success',
	'warning',
	'danger'
] as const satisfies readonly Gradient[];

export type ProgressBarVariant = (typeof progressBarVariants)[number];

export type ProgressBarProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> & {
	value: number;
	variant?: ProgressBarVariant;
};
