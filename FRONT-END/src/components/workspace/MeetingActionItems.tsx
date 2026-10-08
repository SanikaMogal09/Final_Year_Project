import { CheckSquare } from 'lucide-react'
import { useMemo, useState } from 'react'
import { participants } from '../../data/mockData'
import type { WorkspaceActionItem } from '../../types'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'

type StatusFilter = 'all' | 'open' | 'completed'

interface MeetingActionItemsProps {
  items: WorkspaceActionItem[]
  onToggle: (id: string) => void
}

export function MeetingActionItems({ items, onToggle }: MeetingActionItemsProps) {
  const [filter, setFilter] = useState<StatusFilter>('all')
  const filtered = useMemo(() => items.filter((item) => filter === 'all' || item.status === filter), [filter, items])

  if (items.length === 0) {
    return (
      <Card className="p-8 text-center">
        <CheckSquare className="mx-auto text-muted" size={24} />
        <h3 className="mt-3 text-lg font-semibold text-foreground">No action items</h3>
        <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-secondary">This meeting does not have any recorded action items yet.</p>
      </Card>
    )
  }

  return (
    <div className="grid gap-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Action Items</h3>
          <p className="mt-1 text-sm text-muted">{items.filter((item) => item.status === 'open').length} open · {items.filter((item) => item.status === 'completed').length} completed</p>
        </div>
        <label className="inline-flex h-10 items-center rounded-md border border-border bg-card px-3 text-sm text-secondary">
          <span className="sr-only">Filter action items by status</span>
          <select aria-label="Filter action items by status" className="bg-transparent outline-none" onChange={(event) => setFilter(event.target.value as StatusFilter)} value={filter}>
            <option value="all">All statuses</option>
            <option value="open">Open</option>
            <option value="completed">Completed</option>
          </select>
        </label>
      </div>

      {filtered.length === 0 ? (
        <Card className="p-8 text-center">
          <p className="text-sm text-secondary">No action items match this status filter.</p>
        </Card>
      ) : (
        <ul className="grid gap-3">
          {filtered.map((item) => {
            const assignee = participants.find((participant) => participant.id === item.assigneeId)
            return (
              <li key={item.id}>
                <Card className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className={`text-sm font-semibold ${item.status === 'completed' ? 'text-muted line-through' : 'text-foreground'}`}>{item.task}</p>
                      <Badge tone={item.priority === 'High' ? 'danger' : item.priority === 'Medium' ? 'warning' : 'default'}>{item.priority}</Badge>
                      <Badge tone={item.status === 'completed' ? 'success' : 'info'}>{item.status === 'completed' ? 'Completed' : 'Open'}</Badge>
                    </div>
                    <p className="mt-2 text-xs text-muted">{assignee?.name ?? 'Unassigned'}{item.dueDate ? ` · ${item.dueDate}` : ''}</p>
                  </div>
                  <Button onClick={() => onToggle(item.id)} type="button" variant="secondary">
                    {item.status === 'completed' ? 'Reopen' : 'Mark complete'}
                  </Button>
                </Card>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
