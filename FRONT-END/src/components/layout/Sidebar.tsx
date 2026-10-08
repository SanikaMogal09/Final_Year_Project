import { ChevronLeft, ChevronRight, MicVocal } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'
import { bottomNavigation, mainNavigation, workspaceNavigation, type NavigationItem } from './navigation'
import { UserMenu } from './UserMenu'

interface SidebarProps {
  collapsed: boolean
  onNavigate?: () => void
  onToggle?: () => void
  showToggle?: boolean
}

export function Sidebar({ collapsed, onNavigate, onToggle, showToggle = false }: SidebarProps) {
  return (
    <aside className={`flex h-full flex-col border-r border-border bg-surface transition-[width] duration-200 ${collapsed ? 'w-20' : 'w-64'}`}>
      <div className={`flex h-20 items-center border-b border-border px-4 ${collapsed ? 'justify-center' : 'justify-between'}`}>
        <div className="flex items-center gap-3 overflow-hidden">
          <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-accent/20 bg-accent/10 text-accent"><MicVocal size={19} /></span>
          {!collapsed && <span className="whitespace-nowrap text-sm font-semibold leading-4 text-foreground">AI Meeting<br />Assistant</span>}
        </div>
        {showToggle && (
          <button aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'} className="rounded-md p-1.5 text-muted transition-colors hover:bg-subtle hover:text-foreground" onClick={onToggle} type="button">
            {collapsed ? <ChevronRight size={17} /> : <ChevronLeft size={17} />}
          </button>
        )}
      </div>

      <nav aria-label="Primary navigation" className="flex-1 overflow-y-auto px-3 py-5">
        <NavigationGroup collapsed={collapsed} items={mainNavigation} label="Main" onNavigate={onNavigate} />
        <NavigationGroup collapsed={collapsed} items={workspaceNavigation} label="Workspace" onNavigate={onNavigate} />
      </nav>

      <div className="border-t border-border px-3 py-4">
        <NavigationGroup collapsed={collapsed} items={bottomNavigation} onNavigate={onNavigate} />
        <div className="mt-3 border-t border-border pt-3"><UserMenu collapsed={collapsed} /></div>
      </div>
    </aside>
  )
}

function NavigationGroup({ collapsed, items, label, onNavigate }: { collapsed: boolean; items: NavigationItem[]; label?: string; onNavigate?: () => void }) {
  return (
    <div className="mb-6 last:mb-0">
      {label && !collapsed && <p className="mb-2 px-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">{label}</p>}
      <div className="grid gap-1">
        {items.map((item) => <NavigationButton collapsed={collapsed} item={item} key={item.label} onNavigate={onNavigate} />)}
      </div>
    </div>
  )
}

function NavigationButton({ collapsed, item, onNavigate }: { collapsed: boolean; item: NavigationItem; onNavigate?: () => void }) {
  const location = useLocation()
  const navigate = useNavigate()
  const [pathname, query] = item.path.split('?')
  const isActive = location.pathname === pathname && (item.scope ? new URLSearchParams(location.search).get('scope') === item.scope : !location.search)
  const Icon = item.icon

  return (
    <button
      aria-current={isActive ? 'page' : undefined}
      aria-label={collapsed ? item.label : undefined}
      className={`group relative flex w-full items-center rounded-md px-2.5 py-2 text-sm transition-colors ${collapsed ? 'justify-center' : 'gap-3'} ${isActive ? 'bg-accent/10 text-accent' : 'text-secondary hover:bg-subtle hover:text-foreground'}`}
      onClick={() => {
        navigate(query ? `${pathname}?${query}` : pathname)
        onNavigate?.()
      }}
      type="button"
    >
      <Icon aria-hidden="true" className="shrink-0" size={18} />
      {!collapsed && <span className="truncate">{item.label}</span>}
      {collapsed && <span className="pointer-events-none absolute left-full z-40 ml-3 hidden whitespace-nowrap rounded-md border border-border bg-elevated px-2 py-1 text-xs text-foreground shadow-floating group-hover:block group-focus-visible:block">{item.label}</span>}
    </button>
  )
}
