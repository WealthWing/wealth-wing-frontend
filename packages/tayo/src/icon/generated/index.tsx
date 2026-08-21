
import { FunctionComponent, SVGProps } from 'react'

import AlertCircle from './alert-circle'
import ArrowDown from './arrow-down'
import ArrowUp from './arrow-up'
import ArrowUpRight from './arrow-up-right'
import BarChart from './bar-chart'
import Calendar from './calendar'
import Chase from './chase'
import CheckSquare from './check-square'
import CreditCard from './credit-card'
import CurrencyDollar from './currency-dollar'
import DollarSign from './dollar-sign'
import Filter from './filter'
import Flag from './flag'
import FolderMinus from './folder-minus'
import Folder from './folder'
import FolderPlus from './folder-plus'
import Graph from './graph'
import Grid from './grid'
import List from './list'
import LogOut from './log-out'
import Menu from './menu'
import MoneyBill from './money-bill'
import MoneyWidthraw from './money-widthraw'
import MoreHorizontal from './more-horizontal'
import MoreVertical from './more-vertical'
import Plus from './plus'
import Schedule from './schedule'
import Search from './search'
import Settings from './settings'
import SortArrow from './sort-arrow'
import Sparkles from './sparkles'
import Square from './square'
import SwapVert from './swap-vert'
import SwitchHorizontal from './switch-horizontal'
import TrendingUp from './trending-up'
import Warning from './warning'
import WealthWing from './wealth-wing'
import WwLogo from './ww-logo'
import X from './x'

export const iconNames = [
'alert-circle',
'arrow-down',
'arrow-up',
'arrow-up-right',
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
'sparkles',
'square',
'swap-vert',
'switch-horizontal',
'trending-up',
'warning',
'wealth-wing',
'ww-logo',
'x'
] as const

export type IconName = typeof iconNames[number]

export const iconMap: Record<IconName, FunctionComponent<SVGProps<any>>> = {
'alert-circle': AlertCircle,
'arrow-down': ArrowDown,
'arrow-up': ArrowUp,
'arrow-up-right': ArrowUpRight,
'bar-chart': BarChart,
'calendar': Calendar,
'chase': Chase,
'check-square': CheckSquare,
'credit-card': CreditCard,
'currency-dollar': CurrencyDollar,
'dollar-sign': DollarSign,
'filter': Filter,
'flag': Flag,
'folder-minus': FolderMinus,
'folder': Folder,
'folder-plus': FolderPlus,
'graph': Graph,
'grid': Grid,
'list': List,
'log-out': LogOut,
'menu': Menu,
'money-bill': MoneyBill,
'money-widthraw': MoneyWidthraw,
'more-horizontal': MoreHorizontal,
'more-vertical': MoreVertical,
'plus': Plus,
'schedule': Schedule,
'search': Search,
'settings': Settings,
'sort-arrow': SortArrow,
'sparkles': Sparkles,
'square': Square,
'swap-vert': SwapVert,
'switch-horizontal': SwitchHorizontal,
'trending-up': TrendingUp,
'warning': Warning,
'wealth-wing': WealthWing,
'ww-logo': WwLogo,
'x': X
}
