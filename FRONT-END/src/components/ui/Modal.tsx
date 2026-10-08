import type { ReactNode } from 'react'
import { X } from 'lucide-react'

interface ModalProps {
  children: ReactNode
  isOpen: boolean
  onClose: () => void
  title: string
}

export function Modal({ children, isOpen, onClose, title }: ModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-background/75 p-4 backdrop-blur-sm" role="presentation">
      <section aria-labelledby="modal-title" aria-modal="true" className="w-full max-w-md rounded-xl border border-border bg-elevated p-5 shadow-floating" role="dialog">
        <header className="mb-4 flex items-center justify-between gap-4">
          <h2 className="text-lg font-semibold text-foreground" id="modal-title">{title}</h2>
          <button aria-label="Close modal" className="rounded-md p-1 text-muted transition-colors hover:bg-subtle hover:text-foreground" onClick={onClose} type="button">
            <X size={18} />
          </button>
        </header>
        {children}
      </section>
    </div>
  )
}
