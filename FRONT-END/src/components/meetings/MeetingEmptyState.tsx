import { CalendarSearch, Plus } from 'lucide-react'
import { Button } from '../ui/Button'

export function MeetingEmptyState({ archived, hasFilters, onCreate }: { archived: boolean; hasFilters: boolean; onCreate: () => void }) {
  const title = archived ? 'No archived meetings' : hasFilters ? 'No meetings found' : 'No meetings yet'
  const message = archived ? 'Archived meetings will appear here.' : hasFilters ? 'Try adjusting your search or filters.' : 'Create your first meeting to start building your meeting memory.'
  return <div className="rounded-lg border border-dashed border-border bg-card px-6 py-16 text-center"><CalendarSearch className="mx-auto text-muted" size={28} /><h2 className="mt-4 text-lg font-semibold text-foreground">{title}</h2><p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-muted">{message}</p>{!hasFilters && !archived && <Button className="mt-5" onClick={onCreate}><Plus size={16} />Create meeting</Button>}</div>
}
