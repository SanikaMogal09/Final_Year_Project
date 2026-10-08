import { CalendarDays, CheckCircle2, Clock3, Video } from 'lucide-react'
import type { Meeting } from '../../types'
import { Card } from '../ui/Card'

const referenceMonth = '2026-10'

export function MeetingStats({ meetings }: { meetings: Meeting[] }) {
  const active = meetings.filter((meeting) => meeting.status !== 'archived')
  const stats = [
    { label: 'Total meetings', value: String(active.length), icon: CalendarDays },
    { label: 'This month', value: String(active.filter((meeting) => meeting.dateValue.startsWith(referenceMonth)).length), icon: Clock3 },
    { label: 'Completed', value: String(active.filter((meeting) => meeting.status === 'completed').length), icon: CheckCircle2 },
    { label: 'Upcoming', value: String(active.filter((meeting) => meeting.status === 'upcoming' || meeting.status === 'live').length), icon: Video },
  ]

  return (
    <section aria-label="Meeting statistics" className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      {stats.map(({ icon: Icon, label, value }) => (
        <Card className="flex items-center justify-between p-4 shadow-none" key={label}>
          <div>
            <p className="text-xs text-muted">{label}</p>
            <p className="mt-1 text-xl font-semibold tracking-tight text-foreground">{value}</p>
          </div>
          <Icon className="text-muted" size={18} />
        </Card>
      ))}
    </section>
  )
}
