import { Search } from 'lucide-react'
import { useMemo, useState } from 'react'
import { participants } from '../../data/mockData'
import type { Meeting, MeetingWorkspaceData } from '../../types'
import { Card } from '../ui/Card'

interface MeetingTranscriptProps {
  meeting: Meeting
  workspace: MeetingWorkspaceData
}

export function MeetingTranscript({ meeting, workspace }: MeetingTranscriptProps) {
  const [search, setSearch] = useState('')

  const segments = useMemo(() => {
    const normalized = search.trim().toLowerCase()
    if (!normalized) return workspace.transcriptSegments
    return workspace.transcriptSegments.filter((segment) => {
      const speaker = participants.find((participant) => participant.id === segment.speakerId)?.name ?? ''
      return `${speaker} ${segment.text} ${segment.timestamp}`.toLowerCase().includes(normalized)
    })
  }, [search, workspace.transcriptSegments])

  if (!workspace.hasTranscript || workspace.transcriptSegments.length === 0) {
    return (
      <Card className="p-8 text-center">
        <h3 className="text-lg font-semibold text-foreground">Transcript unavailable</h3>
        <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-secondary">
          {meeting.status === 'upcoming'
            ? 'This meeting has not started yet, so no transcript is available.'
            : 'No mock transcript is available for this meeting.'}
        </p>
      </Card>
    )
  }

  return (
    <div className="grid gap-4">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Transcript</h3>
          <p className="mt-1 text-sm text-muted">Sample transcript segments for demonstration</p>
        </div>
        <label className="relative block w-full sm:max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={16} />
          <input
            aria-label="Search transcript"
            className="h-10 w-full rounded-md border border-border bg-card pl-9 pr-3 text-sm text-foreground outline-none placeholder:text-muted focus:border-accent"
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search transcript…"
            value={search}
          />
        </label>
      </div>

      {segments.length === 0 ? (
        <Card className="p-8 text-center">
          <p className="text-sm text-secondary">No transcript segments match &quot;{search}&quot;.</p>
        </Card>
      ) : (
        <Card className="divide-y divide-border">
          {segments.map((segment) => {
            const speaker = participants.find((participant) => participant.id === segment.speakerId)
            return (
              <article className="grid gap-2 px-4 py-4 sm:grid-cols-[88px_minmax(0,1fr)] sm:gap-4" key={segment.id}>
                <time className="text-xs font-medium text-muted sm:pt-1" dateTime={segment.timestamp}>{segment.timestamp}</time>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="grid size-7 place-items-center rounded-full bg-subtle text-[10px] font-semibold text-secondary">{speaker?.initials ?? '?'}</span>
                    <h4 className="text-sm font-semibold text-foreground">{speaker?.name ?? 'Unknown speaker'}</h4>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-secondary">&ldquo;{segment.text}&rdquo;</p>
                </div>
              </article>
            )
          })}
        </Card>
      )}
    </div>
  )
}
