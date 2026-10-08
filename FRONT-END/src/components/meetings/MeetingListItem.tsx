import { CheckSquare, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Meeting, Participant } from '../../types'
import { Card } from '../ui/Card'
import { AiBadge, MeetingActionsMenu, StatusBadge } from './MeetingCard'

interface MeetingListItemProps { meeting: Meeting; onArchive: (meeting: Meeting) => void; onDelete: (meeting: Meeting) => void; onEdit: (meeting: Meeting) => void; participants: Participant[] }

export function MeetingListItem({ meeting, onArchive, onDelete, onEdit, participants }: MeetingListItemProps) {
  const names = participants.filter((participant) => meeting.participantIds.includes(participant.id)).map((participant) => participant.name.split(' ')[0]).join(', ')
  return <Card className="grid gap-3 p-4 transition-colors hover:border-secondary/30 lg:grid-cols-[minmax(210px,2fr)_1fr_0.7fr_1fr_1fr_0.7fr_auto] lg:items-center"><Link className="min-w-0" to={`/meetings/${meeting.id}`}><h2 className="truncate text-sm font-semibold text-foreground hover:text-accent">{meeting.title}</h2><p className="mt-1 truncate text-xs text-muted">{meeting.description}</p></Link><span className="text-sm text-secondary"><span className="mr-1 text-xs text-muted lg:hidden">Date:</span>{meeting.dateLabel}</span><span className="text-sm text-secondary"><span className="mr-1 text-xs text-muted lg:hidden">Duration:</span>{meeting.duration}</span><span className="inline-flex items-center gap-1.5 text-sm text-secondary" title={names}><Users size={14} />{meeting.participantIds.length} participants</span><div className="flex flex-wrap gap-2"><StatusBadge status={meeting.status} /><AiBadge status={meeting.aiStatus ?? 'No Transcript'} /></div><span className="inline-flex items-center gap-1 text-sm text-secondary"><CheckSquare size={14} />{meeting.actionItemCount ?? 0}</span><MeetingActionsMenu meeting={meeting} onArchive={onArchive} onDelete={onDelete} onEdit={onEdit} /></Card>
}
