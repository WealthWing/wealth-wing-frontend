
import { FunctionComponent, SVGProps } from 'react'

import { default as Calendar } from './calendar'
import { default as CheckSquare } from './check-square'
import { default as FolderPlus } from './folder-plus'

export const iconNames = [
'calendar',
'check-square',
'folder-plus'
] as const

export type IconName = typeof iconNames[number]

export const iconMap: Record<IconName, FunctionComponent<SVGProps<any>>> = {
'calendar': Calendar,
'check-square': CheckSquare,
'folder-plus': FolderPlus
}
  