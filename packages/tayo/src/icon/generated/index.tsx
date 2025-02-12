
import { FunctionComponent, SVGProps } from 'react'

import { default as Calendar } from './calendar'
import { default as CheckSquare } from './check-square'
import { default as FolderPlus } from './folder-plus'
import { default as MoreHorizontal } from './more-horizontal'
import { default as MoreVertical } from './more-vertical'

export const iconNames = [
'calendar',
'check-square',
'folder-plus',
'more-horizontal',
'more-vertical'
] as const

export type IconName = typeof iconNames[number]

export const iconMap: Record<IconName, FunctionComponent<SVGProps<any>>> = {
'calendar': Calendar,
'check-square': CheckSquare,
'folder-plus': FolderPlus,
'more-horizontal': MoreHorizontal,
'more-vertical': MoreVertical
}
  