import { X } from 'lucide-react'
import { Sidebar } from './Sidebar'

interface MobileSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileSidebar({ isOpen, onClose }: MobileSidebarProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <button aria-label="Close navigation drawer" className="absolute inset-0 bg-background/75 backdrop-blur-sm" onClick={onClose} type="button" />
      <div aria-label="Mobile navigation" className="relative h-full w-72 shadow-floating" role="dialog">
        <button aria-label="Close navigation drawer" className="absolute right-3 top-3 z-10 rounded-md p-2 text-muted hover:bg-subtle hover:text-foreground" onClick={onClose} type="button"><X size={18} /></button>
        <Sidebar collapsed={false} onNavigate={onClose} />
      </div>
    </div>
  )
}
