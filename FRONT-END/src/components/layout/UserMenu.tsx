import { ChevronDown, LogOut, Settings, UserRound } from 'lucide-react'
import { useState } from 'react'

interface UserMenuProps {
  collapsed?: boolean
}

export function UserMenu({ collapsed = false }: UserMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button
        aria-expanded={isOpen}
        aria-haspopup="menu"
        aria-label="Open user menu"
        className={`flex w-full items-center rounded-md p-2 text-left transition-colors hover:bg-subtle ${collapsed ? 'justify-center' : 'gap-3'}`}
        onClick={() => setIsOpen((open) => !open)}
        type="button"
      >
        <span className="grid size-8 shrink-0 place-items-center rounded-md bg-accent text-xs font-semibold text-white">SM</span>
        {!collapsed && (
          <span className="min-w-0 flex-1">
            <span className="block truncate text-sm font-medium text-foreground">Sanika</span>
            <span className="block truncate text-xs text-muted">sanika@example.com</span>
          </span>
        )}
        {!collapsed && <ChevronDown className="shrink-0 text-muted" size={16} />}
      </button>

      {isOpen && (
        <div className={`absolute bottom-full z-30 mb-2 w-48 rounded-lg border border-border bg-elevated p-1 shadow-floating ${collapsed ? 'left-0' : 'left-0 right-0'}`} role="menu">
          <MenuButton icon={UserRound} label="Profile" />
          <MenuButton icon={Settings} label="Settings" />
          <div className="my-1 border-t border-border" />
          <MenuButton icon={LogOut} label="Sign out" tone="danger" />
        </div>
      )}
    </div>
  )
}

function MenuButton({ icon: Icon, label, tone = 'default' }: { icon: typeof UserRound; label: string; tone?: 'default' | 'danger' }) {
  return (
    <button className={`flex w-full items-center gap-2 rounded-md px-2.5 py-2 text-left text-sm transition-colors hover:bg-subtle ${tone === 'danger' ? 'text-danger hover:text-danger' : 'text-secondary hover:text-foreground'}`} role="menuitem" type="button">
      <Icon size={15} />
      {label}
    </button>
  )
}
