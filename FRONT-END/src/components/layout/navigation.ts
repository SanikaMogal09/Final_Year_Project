import type { LucideIcon } from 'lucide-react'
import { BarChart3, CalendarDays, CheckSquare, CircleHelp, Home, Lightbulb, ListVideo, Settings, Video } from 'lucide-react'

export interface NavigationItem {
  icon: LucideIcon
  label: string
  path: string
  scope?: string
}

export const mainNavigation: NavigationItem[] = [
  { icon: Home, label: 'Dashboard', path: '/dashboard' },
  { icon: Video, label: 'Meetings', path: '/meetings' },
  { icon: CalendarDays, label: 'Calendar', path: '/calendar' },
  { icon: BarChart3, label: 'Analytics', path: '/analytics' },
]

export const workspaceNavigation: NavigationItem[] = [
  { icon: ListVideo, label: 'My Meetings', path: '/meetings?scope=mine', scope: 'mine' },
  { icon: CheckSquare, label: 'Action Items', path: '/meetings?scope=action-items', scope: 'action-items' },
  { icon: Lightbulb, label: 'Saved Insights', path: '/meetings?scope=insights', scope: 'insights' },
]

export const bottomNavigation: NavigationItem[] = [
  { icon: Settings, label: 'Settings', path: '/settings' },
  { icon: CircleHelp, label: 'Help', path: '/help' },
]
