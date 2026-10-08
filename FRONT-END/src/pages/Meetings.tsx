import { Plus } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { CreateMeetingModal } from '../components/dashboard/CreateMeetingModal'
import { MeetingCard } from '../components/meetings/MeetingCard'
import { MeetingEmptyState } from '../components/meetings/MeetingEmptyState'
import { MeetingFilters, type MeetingFilter, type MeetingSort, type MeetingView } from '../components/meetings/MeetingFilters'
import { MeetingListItem } from '../components/meetings/MeetingListItem'
import { MeetingStats } from '../components/meetings/MeetingStats'
import { Button } from '../components/ui/Button'
import { Modal } from '../components/ui/Modal'
import { Toast } from '../components/ui/Toast'
import { participants } from '../data/mockData'
import { meetings as initialMeetings } from '../data/meetings'
import type { Meeting } from '../types'

const referenceDate = new Date('2026-10-09T00:00:00')

export function Meetings() {
  const [meetings, setMeetings] = useState<Meeting[]>(initialMeetings)
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState<MeetingFilter>('all')
  const [sort, setSort] = useState<MeetingSort>('newest')
  const [view, setView] = useState<MeetingView>(() => window.localStorage.getItem('meetings-view') === 'list' ? 'list' : 'grid')
  const [editingMeeting, setEditingMeeting] = useState<Meeting | null>(null)
  const [isCreateOpen, setIsCreateOpen] = useState(false)
  const [deletingMeeting, setDeletingMeeting] = useState<Meeting | null>(null)
  const [toast, setToast] = useState<string | null>(null)
  useEffect(() => { window.localStorage.setItem('meetings-view', view) }, [view])
  const showToast = (message: string) => { setToast(message); window.setTimeout(() => setToast(null), 3500) }
  const displayedMeetings = useMemo(() => sortMeetings(meetings.filter((meeting) => matchesSearch(meeting, search) && matchesFilter(meeting, filter)), sort), [filter, meetings, search, sort])
  const saveMeeting = (meeting: Meeting) => { const exists = meetings.some((item) => item.id === meeting.id); setMeetings((current) => exists ? current.map((item) => item.id === meeting.id ? { ...item, ...meeting } : item) : [{ ...meeting, aiStatus: 'Transcript Available', actionItemCount: 0, createdAt: new Date().toISOString() }, ...current]); setEditingMeeting(null); setIsCreateOpen(false); showToast(exists ? 'Meeting updated successfully.' : 'Meeting created successfully.') }
  const archiveMeeting = (meeting: Meeting) => { setMeetings((current) => current.map((item) => item.id === meeting.id ? { ...item, status: 'archived' } : item)); showToast('Meeting archived.') }
  const deleteMeeting = () => { if (!deletingMeeting) return; setMeetings((current) => current.filter((item) => item.id !== deletingMeeting.id)); showToast('Meeting deleted.'); setDeletingMeeting(null) }
  const hasFilters = Boolean(search || filter !== 'all')
  return <div className="mx-auto grid max-w-7xl gap-7 pb-4"><header className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><h2 className="text-3xl font-semibold tracking-tight text-foreground">Meetings</h2><p className="mt-2 text-sm text-secondary">View, manage, and revisit your conversations.</p></div><Button onClick={() => setIsCreateOpen(true)}><Plus size={17} />New Meeting</Button></header><MeetingStats /><MeetingFilters filter={filter} onFilterChange={setFilter} onSearchChange={setSearch} onSortChange={setSort} onViewChange={setView} search={search} sort={sort} view={view} />{displayedMeetings.length === 0 ? <MeetingEmptyState archived={filter === 'archived'} hasFilters={hasFilters} onCreate={() => setIsCreateOpen(true)} /> : view === 'grid' ? <section aria-label="Meetings" className="grid gap-4 md:grid-cols-2 2xl:grid-cols-3">{displayedMeetings.map((meeting) => <MeetingCard key={meeting.id} meeting={meeting} onArchive={archiveMeeting} onDelete={setDeletingMeeting} onEdit={setEditingMeeting} participants={participants} />)}</section> : <section aria-label="Meetings list" className="grid gap-3">{displayedMeetings.map((meeting) => <MeetingListItem key={meeting.id} meeting={meeting} onArchive={archiveMeeting} onDelete={setDeletingMeeting} onEdit={setEditingMeeting} participants={participants} />)}</section>}<CreateMeetingModal initialMeeting={editingMeeting} isOpen={isCreateOpen || editingMeeting !== null} key={editingMeeting?.id ?? (isCreateOpen ? 'create-open' : 'create-closed')} onClose={() => { setIsCreateOpen(false); setEditingMeeting(null) }} onCreate={saveMeeting} />{deletingMeeting && <Modal isOpen onClose={() => setDeletingMeeting(null)} title="Delete meeting?"><p className="text-sm leading-6 text-secondary">Are you sure you want to delete <span className="font-medium text-foreground">&quot;{deletingMeeting.title}&quot;</span>? This action cannot be undone.</p><div className="mt-5 flex justify-end gap-2"><Button onClick={() => setDeletingMeeting(null)} variant="secondary">Cancel</Button><Button onClick={deleteMeeting} variant="danger">Delete</Button></div></Modal>}{toast && <Toast message={toast} onClose={() => setToast(null)} />}</div>
}

function matchesSearch(meeting: Meeting, search: string) { const normalized = search.trim().toLowerCase(); if (!normalized) return true; const participantNames = participants.filter((participant) => meeting.participantIds.includes(participant.id)).map((participant) => participant.name).join(' '); return `${meeting.title} ${meeting.description ?? ''} ${participantNames}`.toLowerCase().includes(normalized) }
function matchesFilter(meeting: Meeting, filter: MeetingFilter) { if (filter === 'all') return meeting.status !== 'archived'; if (['upcoming', 'live', 'completed', 'archived'].includes(filter)) return meeting.status === filter; const meetingDate = new Date(`${meeting.dateValue}T00:00:00`); if (filter === 'today') return meeting.dateValue === '2026-10-09'; if (filter === 'week') { const end = new Date(referenceDate); end.setDate(referenceDate.getDate() + 7); return meetingDate >= referenceDate && meetingDate <= end } return meetingDate.getMonth() === referenceDate.getMonth() && meetingDate.getFullYear() === referenceDate.getFullYear() }
function sortMeetings(meetings: Meeting[], sort: MeetingSort) { return [...meetings].sort((a, b) => { if (sort === 'alphabetical') return a.title.localeCompare(b.title); if (sort === 'longest') return Number.parseInt(b.duration) - Number.parseInt(a.duration); if (sort === 'shortest') return Number.parseInt(a.duration) - Number.parseInt(b.duration); const difference = new Date(b.createdAt ?? b.dateValue).getTime() - new Date(a.createdAt ?? a.dateValue).getTime(); return sort === 'newest' ? difference : -difference }) }
