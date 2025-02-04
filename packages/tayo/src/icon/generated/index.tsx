/* eslint-disable import/no-named-default */
import { FunctionComponent, SVGProps } from 'react';

import { default as Calendar } from './calendar';
import { default as CheckSquare } from './check-square';

export const iconNames = ['calendar', 'check-square'] as const;

export type IconName = (typeof iconNames)[number];

export const iconMap: Record<IconName, FunctionComponent<SVGProps<any>>> = {
	calendar: Calendar,
	'check-square': CheckSquare
};
