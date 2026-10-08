import type { HTMLAttributes, ReactNode } from 'react'

type BadgeTone = 'default' | 'ai' | 'success' | 'warning' | 'danger' | 'info'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode
  tone?: BadgeTone
}

const toneClasses: Record<BadgeTone, string> = {
  default: 'border-border bg-subtle text-secondary',
  ai: 'border-violet/25 bg-violet/8 text-violet',
  success: 'border-success/25 bg-success/8 text-success',
  warning: 'border-warning/25 bg-warning/8 text-warning',
  danger: 'border-danger/25 bg-danger/8 text-danger',
  info: 'border-info/25 bg-info/8 text-info',
}

export function Badge({ children, className = '', tone = 'default', ...props }: BadgeProps) {
  return (
    <span className={`inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-medium ${toneClasses[tone]} ${className}`} {...props}>
      {children}
    </span>
  )
}
