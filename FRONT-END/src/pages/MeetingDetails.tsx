import { ArrowLeft } from 'lucide-react'
import { useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CreateMeetingModal } from '../components/dashboard/CreateMeetingModal'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { Tabs } from '../components/ui/Tabs'
import { Toast } from '../components/ui/Toast'
import { MeetingActionItems } from '../components/workspace/MeetingActionItems'
import { MeetingInsights } from '../components/workspace/MeetingInsights'
import { MeetingOverview } from '../components/workspace/MeetingOverview'
import { MeetingSummary } from '../components/workspace/MeetingSummary'
import { MeetingTranscript } from '../components/workspace/MeetingTranscript'
import { MeetingWorkspaceHeader } from '../components/workspace/MeetingWorkspaceHeader'
import { getMeetingWorkspace } from '../data/meetingWorkspace'
import { meetings } from '../data/meetings'
import type { Meeting, MeetingWorkspaceData, MeetingWorkspaceTab, QAChatMessage, WorkspaceActionItem } from '../types'

const tabs: { id: MeetingWorkspaceTab; label: string }[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'summary', label: 'Summary' },
  { id: 'transcript', label: 'Transcript' },
  { id: 'action-items', label: 'Action Items' },
  { id: 'insights', label: 'Insights' },
]

export function MeetingDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const baseMeeting = useMemo(() => meetings.find((item) => item.id === id), [id])
  const baseWorkspace = useMemo(() => (id ? getMeetingWorkspace(id) : undefined), [id])

  const [meetingOverrides, setMeetingOverrides] = useState<Record<string, Meeting>>({})
  const [actionItemsByMeeting, setActionItemsByMeeting] = useState<Record<string, WorkspaceActionItem[]>>({})
  const [qaByMeeting, setQaByMeeting] = useState<Record<string, QAChatMessage[]>>({})
  const [toast, setToast] = useState<string | null>(null)

  if (!baseMeeting || !baseWorkspace || !id) {
    return (
      <div className="mx-auto max-w-3xl pb-4">
        <Card className="p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">Not found</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">Meeting not found</h2>
          <p className="mt-2 text-sm leading-6 text-secondary">
            No meeting matches the ID <span className="font-medium text-foreground">&quot;{id}&quot;</span>. It may have been removed or the link is incorrect.
          </p>
          <Button className="mt-6" onClick={() => navigate('/meetings')} type="button" variant="secondary">
            <ArrowLeft size={16} />
            Back to Meetings
          </Button>
        </Card>
      </div>
    )
  }

  const meeting = meetingOverrides[id] ?? baseMeeting
  const actionItems = actionItemsByMeeting[id] ?? baseWorkspace.actionItems

  const showToast = (message: string) => {
    setToast(message)
    window.setTimeout(() => setToast(null), 3000)
  }

  return (
    <>
      <MeetingWorkspace
        actionItems={actionItems}
        key={id}
        meeting={meeting}
        messages={qaByMeeting[id] ?? []}
        onActionItemsChange={(items) => setActionItemsByMeeting((current) => ({ ...current, [id]: items }))}
        onMeetingChange={(next) => {
          setMeetingOverrides((current) => ({ ...current, [id]: next }))
          showToast('Meeting updated successfully.')
        }}
        onMessagesChange={(next) => setQaByMeeting((current) => ({ ...current, [id]: next }))}
        workspace={baseWorkspace}
      />
      {toast && <Toast message={toast} onClose={() => setToast(null)} />}
    </>
  )
}

interface MeetingWorkspaceProps {
  actionItems: WorkspaceActionItem[]
  meeting: Meeting
  messages: QAChatMessage[]
  onActionItemsChange: (items: WorkspaceActionItem[]) => void
  onMeetingChange: (meeting: Meeting) => void
  onMessagesChange: (messages: QAChatMessage[]) => void
  workspace: MeetingWorkspaceData
}

function MeetingWorkspace({
  actionItems,
  meeting,
  messages,
  onActionItemsChange,
  onMeetingChange,
  onMessagesChange,
  workspace,
}: MeetingWorkspaceProps) {
  const [activeTab, setActiveTab] = useState<MeetingWorkspaceTab>('overview')
  const [isEditing, setIsEditing] = useState(false)
  const workspaceView = { ...workspace, actionItems }

  const toggleActionItem = (itemId: string) => {
    onActionItemsChange(actionItems.map((item) => (
      item.id === itemId
        ? { ...item, status: item.status === 'completed' ? 'open' : 'completed' }
        : item
    )))
  }

  return (
    <div className="mx-auto grid max-w-7xl gap-6 pb-4">
      <MeetingWorkspaceHeader meeting={meeting} onEdit={() => setIsEditing(true)} />

      <Tabs
        activeTab={activeTab}
        ariaLabel="Meeting workspace tabs"
        onChange={(tabId) => setActiveTab(tabId as MeetingWorkspaceTab)}
        tabs={tabs}
      />

      <div aria-labelledby={`tab-${activeTab}`} id={`panel-${activeTab}`} role="tabpanel">
        {activeTab === 'overview' && (
          <MeetingOverview
            actionItems={actionItems}
            meeting={meeting}
            messages={messages}
            onMessagesChange={onMessagesChange}
            onOpenTab={(tab) => setActiveTab(tab)}
            workspace={workspaceView}
          />
        )}
        {activeTab === 'summary' && <MeetingSummary actionItems={actionItems} meeting={meeting} workspace={workspaceView} />}
        {activeTab === 'transcript' && <MeetingTranscript meeting={meeting} workspace={workspaceView} />}
        {activeTab === 'action-items' && <MeetingActionItems items={actionItems} onToggle={toggleActionItem} />}
        {activeTab === 'insights' && <MeetingInsights workspace={workspaceView} />}
      </div>

      <CreateMeetingModal
        initialMeeting={meeting}
        isOpen={isEditing}
        key={isEditing ? `edit-${meeting.id}` : 'edit-closed'}
        onClose={() => setIsEditing(false)}
        onCreate={(next) => {
          onMeetingChange({ ...meeting, ...next })
          setIsEditing(false)
        }}
      />
    </div>
  )
}
