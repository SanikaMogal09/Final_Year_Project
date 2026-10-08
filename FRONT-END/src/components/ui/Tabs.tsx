import { useRef, type KeyboardEvent } from 'react'

interface Tab {
  id: string
  label: string
}

interface TabsProps {
  activeTab: string
  ariaLabel?: string
  onChange: (id: string) => void
  tabs: Tab[]
}

export function Tabs({ activeTab, ariaLabel = 'Tabs', onChange, tabs }: TabsProps) {
  const listRef = useRef<HTMLDivElement>(null)

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const currentIndex = tabs.findIndex((tab) => tab.id === activeTab)
    if (currentIndex < 0) return

    let nextIndex = currentIndex
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') nextIndex = (currentIndex + 1) % tabs.length
    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') nextIndex = (currentIndex - 1 + tabs.length) % tabs.length
    if (event.key === 'Home') nextIndex = 0
    if (event.key === 'End') nextIndex = tabs.length - 1
    if (nextIndex === currentIndex) return

    event.preventDefault()
    onChange(tabs[nextIndex].id)
    const buttons = listRef.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]')
    buttons?.[nextIndex]?.focus()
  }

  return (
    <div
      aria-label={ariaLabel}
      className="-mx-1 flex gap-1 overflow-x-auto border-b border-border px-1"
      onKeyDown={onKeyDown}
      ref={listRef}
      role="tablist"
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id
        return (
          <button
            aria-controls={`panel-${tab.id}`}
            aria-selected={isActive}
            className={`relative shrink-0 px-3 py-2.5 text-sm font-medium transition-colors ${isActive ? 'text-foreground' : 'text-muted hover:text-secondary'}`}
            id={`tab-${tab.id}`}
            key={tab.id}
            onClick={() => onChange(tab.id)}
            role="tab"
            tabIndex={isActive ? 0 : -1}
            type="button"
          >
            {tab.label}
            {isActive && <span className="absolute inset-x-3 bottom-0 h-0.5 rounded-full bg-accent" />}
          </button>
        )
      })}
    </div>
  )
}
