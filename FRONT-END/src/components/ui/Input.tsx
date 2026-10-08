import type { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  hint?: string
}

export function Input({ className = '', hint, id, label, ...props }: InputProps) {
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-')

  return (
    <label className="grid gap-1.5 text-sm text-secondary" htmlFor={inputId}>
      {label && <span className="font-medium text-foreground">{label}</span>}
      <input
        className={`h-10 w-full rounded-md border border-border bg-subtle px-3 text-sm text-foreground outline-none placeholder:text-muted transition-colors hover:border-secondary/40 focus:border-accent ${className}`}
        id={inputId}
        {...props}
      />
      {hint && <span className="text-xs text-muted">{hint}</span>}
    </label>
  )
}
