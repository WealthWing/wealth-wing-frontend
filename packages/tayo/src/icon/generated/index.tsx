import { FunctionComponent, SVGProps } from 'react';

import Calendar from './calendar';
import CheckSquare from './check-square';
import CreditCard from './credit-card';
import DollarSign from './dollar-sign';
import FolderPlus from './folder-plus';
import LogOut from './log-out';
import MoreHorizontal from './more-horizontal';
import MoreVertical from './more-vertical';
import Plus from './plus';
import Warning from './warning';
import X from './x';

export const iconNames = [
	'calendar',
	'check-square',
	'credit-card',
	'dollar-sign',
	'folder-plus',
	'log-out',
	'more-horizontal',
	'more-vertical',
	'plus',
	'warning',
	'x'
] as const;

export type IconName = (typeof iconNames)[number];

export const iconMap: Record<IconName, FunctionComponent<SVGProps<any>>> = {
	calendar: Calendar,
	'check-square': CheckSquare,
	'credit-card': CreditCard,
	'dollar-sign': DollarSign,
	'folder-plus': FolderPlus,
	'log-out': LogOut,
	'more-horizontal': MoreHorizontal,
	'more-vertical': MoreVertical,
	plus: Plus,
	warning: Warning,
	x: X
};
