import { Link } from 'react-router-dom'
import type { ActionItem, Participant } from '../../types'
import { Card } from '../ui/Card'
import { SectionHeading } from './UpcomingMeetings'

interface ActionItemsPreviewProps {
  items: ActionItem[]
  onToggle: (id: string) => void
  participants: Participant[]
}

export function ActionItemsPreview({ items, onToggle, participants }: ActionItemsPreviewProps) {
  return <section><SectionHeading subtitle="Tasks that need your attention." title="Action Items" to="/meetings?scope=action-items" /><Card className="divide-y divide-border">{items.map((item) => {
    const assignee = participants.find((participant) => participant.id === item.assigneeId)
    return <label className="flex cursor-pointer items-start gap-3 px-5 py-4 hover:bg-background" key={item.id}><input checked={item.isComplete} className="mt-0.5 size-4 accent-accent transition-transform checked:scale-110" onChange={() => onToggle(item.id)} type="checkbox" /><span className="min-w-0 flex-1"><span className={`block text-sm font-medium ${item.isComplete ? 'text-muted line-through' : 'text-foreground'}`}>{item.task}</span><span className="mt-1 block text-xs text-muted">{assignee?.name} · {item.dueDate}</span></span><Priority priority={item.priority} /></label>
  })}</Card><Link className="mt-3 inline-flex text-sm font-medium text-accent hover:text-[#4338ca]" to="/meetings?scope=action-items">View all action items</Link></section>
}

function Priority({ priority }: { priority: ActionItem['priority'] }) {
  const style = priority === 'High' ? 'bg-danger/8 text-danger' : priority === 'Medium' ? 'bg-warning/8 text-warning' : 'bg-subtle text-secondary'
  return <span className={`rounded-md px-2 py-1 text-xs font-medium ${style}`}>{priority}</span>
}
