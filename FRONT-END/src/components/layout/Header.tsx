import { Menu, Search } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import { NotificationMenu } from './NotificationMenu'

interface HeaderProps {
  onMenuOpen: () => void
  onSearchOpen: () => void
}

const pageTitles: Record<string, string> = {
  '/analytics': 'Analytics',
  '/calendar': 'Calendar',
  '/dashboard': 'Dashboard',
  '/help': 'Help',
  '/meetings': 'Meetings',
  '/settings': 'Settings',
}

export function Header({ onMenuOpen, onSearchOpen }: HeaderProps) {
  const location = useLocation()
  const title = pageTitles[location.pathname] ?? (location.pathname.includes('/transcript') ? 'Transcript' : 'Meeting')

  return (
    <header className="flex h-20 shrink-0 items-center justify-between border-b border-border bg-card px-5 sm:px-7">
      <div className="flex min-w-0 items-center gap-3">
        <button aria-label="Open navigation" className="rounded-md p-2 text-muted hover:bg-subtle hover:text-foreground lg:hidden" onClick={onMenuOpen} type="button"><Menu size={20} /></button>
        <h1 className="truncate text-lg font-semibold text-foreground sm:text-xl">{title}</h1>
      </div>
      <div className="flex items-center gap-1 sm:gap-2">
        <button aria-label="Open global search" className="flex h-9 items-center gap-2 rounded-md border border-border bg-background px-2.5 text-sm text-muted transition-colors hover:border-secondary/40 hover:text-secondary sm:w-64" onClick={onSearchOpen} type="button">
          <Search size={17} />
          <span className="hidden flex-1 text-left sm:inline">Search</span>
          <kbd className="hidden rounded border border-border bg-card px-1.5 py-0.5 text-[10px] text-muted sm:inline">⌘ K</kbd>
        </button>
        <NotificationMenu />
        <span aria-label="Sanika Mogal" className="ml-1 grid size-8 place-items-center rounded-md bg-accent text-xs font-semibold text-white">SM</span>
      </div>
    </header>
  )
}
