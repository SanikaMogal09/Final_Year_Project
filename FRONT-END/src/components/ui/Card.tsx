import type { HTMLAttributes, ReactNode } from 'react'

interface CardProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  elevated?: boolean
}

export function Card({ children, className = '', elevated = false, ...props }: CardProps) {
  return (
    <section
      className={`rounded-lg border border-border shadow-sm ${elevated ? 'bg-elevated' : 'bg-card'} ${className}`}
      {...props}
    >
      {children}
    </section>
  )
}
