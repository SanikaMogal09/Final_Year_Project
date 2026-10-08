interface Tab {
  id: string
  label: string
}

interface TabsProps {
  activeTab: string
  onChange: (id: string) => void
  tabs: Tab[]
}

export function Tabs({ activeTab, onChange, tabs }: TabsProps) {
  return (
    <div aria-label="Preview tabs" className="flex gap-1 border-b border-border" role="tablist">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id
        return (
          <button
            aria-selected={isActive}
            className={`relative px-3 py-2 text-sm font-medium transition-colors ${isActive ? 'text-foreground' : 'text-muted hover:text-secondary'}`}
            key={tab.id}
            onClick={() => onChange(tab.id)}
            role="tab"
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
