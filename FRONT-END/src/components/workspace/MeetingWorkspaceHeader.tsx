import { ArrowLeft, CalendarDays, Clock3, Pencil, Users } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import type { Meeting } from '../../types'
import { StatusBadge } from '../meetings/MeetingCard'
import { Button } from '../ui/Button'

interface MeetingWorkspaceHeaderProps {
  meeting: Meeting
  onEdit: () => void
}

export function MeetingWorkspaceHeader({ meeting, onEdit }: MeetingWorkspaceHeaderProps) {
  const navigate = useNavigate()

  return (
    <header className="grid gap-4">
      <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-muted">
        <Link className="hover:text-accent" to="/meetings">Meetings</Link>
        <span aria-hidden>/</span>
        <span className="truncate text-secondary">{meeting.title}</span>
      </nav>

      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{meeting.title}</h2>
            <StatusBadge status={meeting.status} />
          </div>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-secondary">
            <span className="inline-flex items-center gap-1.5"><CalendarDays className="text-muted" size={15} />{meeting.dateLabel}</span>
            <span className="inline-flex items-center gap-1.5"><Clock3 className="text-muted" size={15} />{meeting.duration}</span>
            <span className="inline-flex items-center gap-1.5"><Users className="text-muted" size={15} />{meeting.participantIds.length} participants</span>
          </div>
          {meeting.description && <p className="mt-3 max-w-3xl text-sm leading-6 text-secondary">{meeting.description}</p>}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Button onClick={() => navigate('/meetings')} type="button" variant="secondary">
            <ArrowLeft size={16} />
            Back to Meetings
          </Button>
          <Button onClick={onEdit} type="button" variant="primary">
            <Pencil size={16} />
            Edit Meeting
          </Button>
        </div>
      </div>
    </header>
  )
}
