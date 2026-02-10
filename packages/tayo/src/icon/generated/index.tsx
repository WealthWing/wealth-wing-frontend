import { FunctionComponent, SVGProps } from 'react';

import AlertCircle from './alert-circle';
import BarChart from './bar-chart';
import Calendar from './calendar';
import Chase from './chase';
import CheckSquare from './check-square';
import CreditCard from './credit-card';
import CurrencyDollar from './currency-dollar';
import DollarSign from './dollar-sign';
import Filter from './filter';
import Flag from './flag';
import Folder from './folder';
import FolderMinus from './folder-minus';
import FolderPlus from './folder-plus';
import Graph from './graph';
import Grid from './grid';
import List from './list';
import LogOut from './log-out';
import Menu from './menu';
import MoneyBill from './money-bill';
import MoneyWidthraw from './money-widthraw';
import MoreHorizontal from './more-horizontal';
import MoreVertical from './more-vertical';
import Plus from './plus';
import Schedule from './schedule';
import Search from './search';
import Settings from './settings';
import SortArrow from './sort-arrow';
import Square from './square';
import SwapVert from './swap-vert';
import SwitchHorizontal from './switch-horizontal';
import Warning from './warning';
import X from './x';

export const iconNames = [
	'alert-circle',
	'bar-chart',
	'calendar',
	'chase',
	'check-square',
	'credit-card',
	'currency-dollar',
	'dollar-sign',
	'filter',
	'flag',
	'folder-minus',
	'folder',
	'folder-plus',
	'graph',
	'grid',
	'list',
	'log-out',
	'menu',
	'money-bill',
	'money-widthraw',
	'more-horizontal',
	'more-vertical',
	'plus',
	'schedule',
	'search',
	'settings',
	'sort-arrow',
	'square',
	'swap-vert',
	'switch-horizontal',
	'warning',
	'x'
] as const;

export type IconName = (typeof iconNames)[number];

export const iconMap: Record<IconName, FunctionComponent<SVGProps<any>>> = {
	'alert-circle': AlertCircle,
	'bar-chart': BarChart,
	calendar: Calendar,
	chase: Chase,
	'check-square': CheckSquare,
	'credit-card': CreditCard,
	'currency-dollar': CurrencyDollar,
	'dollar-sign': DollarSign,
	filter: Filter,
	flag: Flag,
	'folder-minus': FolderMinus,
	folder: Folder,
	'folder-plus': FolderPlus,
	graph: Graph,
	grid: Grid,
	list: List,
	'log-out': LogOut,
	menu: Menu,
	'money-bill': MoneyBill,
	'money-widthraw': MoneyWidthraw,
	'more-horizontal': MoreHorizontal,
	'more-vertical': MoreVertical,
	plus: Plus,
	schedule: Schedule,
	search: Search,
	settings: Settings,
	'sort-arrow': SortArrow,
	square: Square,
	'swap-vert': SwapVert,
	'switch-horizontal': SwitchHorizontal,
	warning: Warning,
	x: X
};
