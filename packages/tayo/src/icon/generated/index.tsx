
import { FunctionComponent, SVGProps } from 'react'

import AlertCircle from './alert-circle'
import ArrowDown from './arrow-down'
import ArrowUp from './arrow-up'
import ArrowUpRight from './arrow-up-right'
import BarChart from './bar-chart'
import Calendar from './calendar'
import Chase from './chase'
import CheckSquare from './check-square'
import ChevronDown from './chevron-down'
import ChevronLeft from './chevron-left'
import ChevronRight from './chevron-right'
import ChevronUp from './chevron-up'
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
import Layers from './layers'
import List from './list'
import LogOut from './log-out'
import Menu from './menu'
import MoneyBill from './money-bill'
import MoneyWidthraw from './money-widthraw'
import MoreHorizontal from './more-horizontal'
import MoreVertical from './more-vertical'
import Plus from './plus'
import RotateCcw from './rotate-ccw'
import Schedule from './schedule'
import Search from './search'
import Settings from './settings'
import ShoppingBag from './shopping-bag'
import SortArrow from './sort-arrow'
import Sparkles from './sparkles'
import Square from './square'
import SvgviewerOutput from './svgviewer-output'
import SwapVert from './swap-vert'
import SwitchHorizontal from './switch-horizontal'
import TrendingDown from './trending-down'
import TrendingUp from './trending-up'
import Warning from './warning'
import WealthWing from './wealth-wing'
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
'chevron-down',
'chevron-left',
'chevron-right',
'chevron-up',
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
'layers',
'list',
'log-out',
'menu',
'money-bill',
'money-widthraw',
'more-horizontal',
'more-vertical',
'plus',
'rotate-ccw',
'schedule',
'search',
'settings',
'shopping-bag',
'sort-arrow',
'sparkles',
'square',
'svgviewer-output',
'swap-vert',
'switch-horizontal',
'trending-down',
'trending-up',
'warning',
'wealth-wing',
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
'chevron-down': ChevronDown,
'chevron-left': ChevronLeft,
'chevron-right': ChevronRight,
'chevron-up': ChevronUp,
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
'layers': Layers,
'list': List,
'log-out': LogOut,
'menu': Menu,
'money-bill': MoneyBill,
'money-widthraw': MoneyWidthraw,
'more-horizontal': MoreHorizontal,
'more-vertical': MoreVertical,
'plus': Plus,
'rotate-ccw': RotateCcw,
'schedule': Schedule,
'search': Search,
'settings': Settings,
'shopping-bag': ShoppingBag,
'sort-arrow': SortArrow,
'sparkles': Sparkles,
'square': Square,
'svgviewer-output': SvgviewerOutput,
'swap-vert': SwapVert,
'switch-horizontal': SwitchHorizontal,
'trending-down': TrendingDown,
'trending-up': TrendingUp,
'warning': Warning,
'wealth-wing': WealthWing,
'x': X
}
  