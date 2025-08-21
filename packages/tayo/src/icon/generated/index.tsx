import { FunctionComponent, SVGProps } from 'react';

import AlertCircle from './alert-circle';
import Calendar from './calendar';
import Chase from './chase';
import CheckSquare from './check-square';
import CreditCard from './credit-card';
import CurrencyDollar from './currency-dollar';
import DollarSign from './dollar-sign';
import Folder from './folder';
import FolderPlus from './folder-plus';
import Graph from './graph';
import LogOut from './log-out';
import Menu from './menu';
import MoneyBill from './money-bill';
import MoneyWidthraw from './money-widthraw';
import MoreHorizontal from './more-horizontal';
import MoreVertical from './more-vertical';
import Plus from './plus';
import Search from './search';
import SwapVert from './swap-vert';
import SwitchHorizontal from './switch-horizontal';
import Warning from './warning';
import X from './x';

export const iconNames = [
	'alert-circle',
	'calendar',
	'chase',
	'check-square',
	'credit-card',
	'currency-dollar',
	'dollar-sign',
	'folder',
	'folder-plus',
	'graph',
	'log-out',
	'menu',
	'money-bill',
	'money-widthraw',
	'more-horizontal',
	'more-vertical',
	'plus',
	'search',
	'swap-vert',
	'switch-horizontal',
	'warning',
	'x'
] as const;

export type IconName = (typeof iconNames)[number];

export const iconMap: Record<IconName, FunctionComponent<SVGProps<any>>> = {
	'alert-circle': AlertCircle,
	calendar: Calendar,
	chase: Chase,
	'check-square': CheckSquare,
	'credit-card': CreditCard,
	'currency-dollar': CurrencyDollar,
	'dollar-sign': DollarSign,
	folder: Folder,
	'folder-plus': FolderPlus,
	graph: Graph,
	'log-out': LogOut,
	menu: Menu,
	'money-bill': MoneyBill,
	'money-widthraw': MoneyWidthraw,
	'more-horizontal': MoreHorizontal,
	'more-vertical': MoreVertical,
	plus: Plus,
	search: Search,
	'swap-vert': SwapVert,
	'switch-horizontal': SwitchHorizontal,
	warning: Warning,
	x: X
};
