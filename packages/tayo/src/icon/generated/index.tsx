import { FunctionComponent, SVGProps } from 'react';

import Calendar from './calendar';
import Chase from './chase';
import CheckSquare from './check-square';
import CreditCard from './credit-card';
import CurrencyDollar from './currency-dollar';
import DollarSign from './dollar-sign';
import FolderPlus from './folder-plus';
import LogOut from './log-out';
import MoreHorizontal from './more-horizontal';
import MoreVertical from './more-vertical';
import Plus from './plus';
import SwitchHorizontal from './switch-horizontal';
import Warning from './warning';
import X from './x';

export const iconNames = [
	'calendar',
	'chase',
	'check-square',
	'credit-card',
	'currency-dollar',
	'dollar-sign',
	'folder-plus',
	'log-out',
	'more-horizontal',
	'more-vertical',
	'plus',
	'switch-horizontal',
	'warning',
	'x'
] as const;

export type IconName = (typeof iconNames)[number];

export const iconMap: Record<IconName, FunctionComponent<SVGProps<any>>> = {
	calendar: Calendar,
	chase: Chase,
	'check-square': CheckSquare,
	'credit-card': CreditCard,
	'currency-dollar': CurrencyDollar,
	'dollar-sign': DollarSign,
	'folder-plus': FolderPlus,
	'log-out': LogOut,
	'more-horizontal': MoreHorizontal,
	'more-vertical': MoreVertical,
	plus: Plus,
	'switch-horizontal': SwitchHorizontal,
	warning: Warning,
	x: X
};
