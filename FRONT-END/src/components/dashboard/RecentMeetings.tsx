import { Link } from 'react-router-dom'
import type { Meeting } from '../../types'
import { Badge } from '../ui/Badge'
import { Card } from '../ui/Card'
import { SectionHeading } from './UpcomingMeetings'

export function RecentMeetings({ meetings }: { meetings: Meeting[] }) {
  return (
    <section>
      <SectionHeading subtitle="Your latest meeting activity." title="Recent Meetings" to="/meetings" />
      <Card className="overflow-hidden">
        <div className="hidden grid-cols-[minmax(190px,2fr)_0.7fr_0.7fr_0.8fr_0.7fr_0.6fr_0.8fr] gap-3 border-b border-border bg-background px-5 py-3 text-[11px] font-medium uppercase tracking-[0.1em] text-muted lg:grid">
          <span>Meeting</span><span>Date</span><span>Duration</span><span>Participants</span><span>Summary</span><span>Actions</span><span>Status</span>
        </div>
        <div className="divide-y divide-border">
          {meetings.map((meeting) => <RecentMeetingRow key={meeting.id} meeting={meeting} />)}
        </div>
      </Card>
    </section>
  )
}

function RecentMeetingRow({ meeting }: { meeting: Meeting }) {
  return (
    <Link className="grid gap-2 px-5 py-4 transition-colors hover:bg-background lg:grid-cols-[minmax(190px,2fr)_0.7fr_0.7fr_0.8fr_0.7fr_0.6fr_0.8fr] lg:items-center lg:gap-3" to={`/meetings/${meeting.id}`}>
      <span className="text-sm font-medium text-foreground">{meeting.title}</span>
      <RowMeta label="Date" value={meeting.dateLabel} /><RowMeta label="Duration" value={meeting.duration} /><RowMeta label="Participants" value={String(meeting.participantIds.length)} /><RowMeta label="Summary" value={meeting.summaryStatus ?? '—'} />
      <span className="text-sm text-secondary"><span className="mr-1 text-xs text-muted lg:hidden">Action items:</span>{meeting.actionItemCount ?? 0}</span>
      <span><Badge tone="success">Completed</Badge></span>
    </Link>
  )
}

function RowMeta({ label, value }: { label: string; value: string }) {
  return <span className="text-sm text-secondary"><span className="mr-1 text-xs text-muted lg:hidden">{label}:</span>{value}</span>
}
