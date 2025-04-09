
import { FunctionComponent, SVGProps } from 'react'

import { default as Calendar } from './calendar'
import { default as CheckSquare } from './check-square'
import { default as DollarSign } from './dollar-sign'
import { default as FolderPlus } from './folder-plus'
import { default as MoreHorizontal } from './more-horizontal'
import { default as MoreVertical } from './more-vertical'
import { default as Plus } from './plus'
import { default as Warning } from './warning'
import { default as X } from './x'

export const iconNames = [
'calendar',
'check-square',
'dollar-sign',
'folder-plus',
'more-horizontal',
'more-vertical',
'plus',
'warning',
'x'
] as const

export type IconName = typeof iconNames[number]

export const iconMap: Record<IconName, FunctionComponent<SVGProps<any>>> = {
'calendar': Calendar,
'check-square': CheckSquare,
'dollar-sign': DollarSign,
'folder-plus': FolderPlus,
'more-horizontal': MoreHorizontal,
'more-vertical': MoreVertical,
'plus': Plus,
'warning': Warning,
'x': X
}
  