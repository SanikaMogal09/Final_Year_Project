import { CheckCircle2, X } from 'lucide-react'

interface ToastProps {
  message: string
  onClose: () => void
}

export function Toast({ message, onClose }: ToastProps) {
  return (
    <div aria-live="polite" className="fixed bottom-5 right-5 z-50 flex max-w-sm items-center gap-3 rounded-lg border border-success/20 bg-card px-4 py-3 shadow-floating">
      <CheckCircle2 className="shrink-0 text-success" size={19} />
      <p className="flex-1 text-sm font-medium text-foreground">{message}</p>
      <button aria-label="Dismiss notification" className="rounded-md p-1 text-muted hover:bg-subtle hover:text-foreground" onClick={onClose} type="button"><X size={16} /></button>
    </div>
  )
}
