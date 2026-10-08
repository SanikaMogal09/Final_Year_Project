import { Bell, CheckSquare, Lightbulb, Sparkles } from 'lucide-react'
import { useState } from 'react'

const notifications = [
  { icon: CheckSquare, text: '3 action items are due tomorrow.', time: '12 min ago', tone: 'text-warning' },
  { icon: Sparkles, text: 'Meeting summary is ready.', time: '1 hour ago', tone: 'text-ai' },
  { icon: Lightbulb, text: 'New AI insight detected.', time: '3 hours ago', tone: 'text-info' },
]

export function NotificationMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button aria-expanded={isOpen} aria-haspopup="menu" aria-label="Open notifications" className="relative rounded-md p-2 text-muted transition-colors hover:bg-subtle hover:text-foreground" onClick={() => setIsOpen((open) => !open)} type="button">
        <Bell size={19} />
        <span aria-label="3 unread notifications" className="absolute right-1.5 top-1.5 size-1.5 rounded-full bg-accent" />
      </button>
      {isOpen && (
        <div className="absolute right-0 z-30 mt-2 w-80 overflow-hidden rounded-lg border border-border bg-elevated shadow-floating" role="menu">
          <div className="flex items-center justify-between border-b border-border px-4 py-3"><span className="text-sm font-semibold text-foreground">Notifications</span><span className="text-xs text-muted">3 new</span></div>
          {notifications.map(({ icon: Icon, text, time, tone }) => (
            <button className="flex w-full gap-3 border-b border-border px-4 py-3 text-left last:border-0 hover:bg-subtle" key={text} role="menuitem" type="button">
              <Icon className={`mt-0.5 shrink-0 ${tone}`} size={16} />
              <span><span className="block text-sm text-secondary">{text}</span><span className="mt-1 block text-xs text-muted">{time}</span></span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
