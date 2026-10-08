import { useState, type ReactNode } from 'react'
import { GlobalSearch } from './GlobalSearch'
import { Header } from './Header'
import { MobileSidebar } from './MobileSidebar'
import { Sidebar } from './Sidebar'

interface AppLayoutProps {
  children: ReactNode
}

export function AppLayout({ children }: AppLayoutProps) {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <div className="flex h-dvh overflow-hidden bg-background">
      <div className="hidden h-full lg:block"><Sidebar collapsed={isCollapsed} onToggle={() => setIsCollapsed((collapsed) => !collapsed)} showToggle /></div>
      <MobileSidebar isOpen={isMobileSidebarOpen} onClose={() => setIsMobileSidebarOpen(false)} />
      <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <Header onMenuOpen={() => setIsMobileSidebarOpen(true)} onSearchOpen={() => setIsSearchOpen(true)} />
        <main className="min-w-0 flex-1 overflow-y-auto px-5 py-7 sm:px-7 lg:px-9 lg:py-8">{children}</main>
      </div>
      <GlobalSearch isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </div>
  )
}
