import { Search, X } from 'lucide-react'
import { useEffect, useRef } from 'react'

interface GlobalSearchProps {
  isOpen: boolean
  onClose: () => void
}

export function GlobalSearch({ isOpen, onClose }: GlobalSearchProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen) inputRef.current?.focus()
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-background/75 p-4 pt-[12vh] backdrop-blur-sm" role="presentation">
      <div aria-label="Global search" aria-modal="true" className="mx-auto w-full max-w-2xl overflow-hidden rounded-xl border border-border bg-elevated shadow-floating" role="dialog">
        <div className="flex items-center gap-3 border-b border-border px-4">
          <Search className="text-muted" size={19} />
          <input ref={inputRef} aria-label="Search meetings, transcripts, action items" className="h-14 min-w-0 flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted" placeholder="Search meetings, transcripts, action items..." />
          <button aria-label="Close search" className="rounded-md p-1.5 text-muted hover:bg-subtle hover:text-foreground" onClick={onClose} type="button"><X size={18} /></button>
        </div>
        <div className="px-4 py-7 text-center text-sm text-muted">Start typing to search your workspace.</div>
      </div>
    </div>
  )
}
