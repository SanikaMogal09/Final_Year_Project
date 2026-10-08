import { ArrowRight, Clock3, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Meeting, Participant } from '../../types'
import { Card } from '../ui/Card'

interface UpcomingMeetingsProps {
  meetings: Meeting[]
  participants: Participant[]
}

export function UpcomingMeetings({ meetings, participants }: UpcomingMeetingsProps) {
  return (
    <section>
      <SectionHeading subtitle="Your next scheduled conversations." title="Upcoming Meetings" to="/meetings" />
      <Card className="divide-y divide-border">
        {meetings.map((meeting) => <UpcomingMeetingItem key={meeting.id} meeting={meeting} participants={participants} />)}
      </Card>
    </section>
  )
}

function UpcomingMeetingItem({ meeting, participants }: { meeting: Meeting; participants: Participant[] }) {
  const meetingParticipants = participants.filter((participant) => meeting.participantIds.includes(participant.id))
  return (
    <article className="flex flex-col gap-4 px-5 py-4 transition-colors hover:bg-background sm:flex-row sm:items-center sm:justify-between">
      <div className="min-w-0"><h3 className="truncate text-sm font-semibold text-foreground">{meeting.title}</h3><p className="mt-1 text-xs text-muted">{meeting.dateLabel}</p></div>
      <div className="flex flex-wrap items-center gap-3 text-xs text-secondary sm:justify-end">
        <span className="inline-flex items-center gap-1.5"><Clock3 size={14} />{meeting.duration}</span>
        <AvatarGroup participants={meetingParticipants} />
        <span className="inline-flex items-center gap-1.5"><Users size={14} />{meeting.participantIds.length}</span>
        <span className="rounded-md bg-info/8 px-2 py-1 font-medium text-info">Upcoming</span>
        <Link className="inline-flex items-center gap-1 font-medium text-accent hover:text-[#4338ca]" to={`/meetings/${meeting.id}`}>View <ArrowRight size={14} /></Link>
      </div>
    </article>
  )
}

function AvatarGroup({ participants }: { participants: Participant[] }) {
  return <div aria-label={`${participants.length} participants`} className="flex -space-x-1.5">{participants.slice(0, 4).map((participant) => <span className="grid size-5 place-items-center rounded-full border-2 border-card bg-subtle text-[8px] font-semibold text-secondary" key={participant.id} title={participant.name}>{participant.initials}</span>)}</div>
}

export function SectionHeading({ subtitle, title, to }: { subtitle: string; title: string; to: string }) {
  return <div className="mb-3 flex items-end justify-between gap-4"><div><h2 className="text-lg font-semibold text-foreground">{title}</h2><p className="mt-1 text-sm text-muted">{subtitle}</p></div><Link className="shrink-0 text-sm font-medium text-accent hover:text-[#4338ca]" to={to}>View all</Link></div>
}
