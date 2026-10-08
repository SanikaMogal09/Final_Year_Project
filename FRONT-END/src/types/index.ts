export interface Participant {
  id: string
  initials: string
  name: string
}

export interface Meeting {
  aiStatus?: 'AI Summary Available' | 'Processing' | 'Transcript Available' | 'No Transcript'
  createdAt?: string
  id: string
  description?: string
  title: string
  dateLabel: string
  dateValue: string
  duration: string
  participantIds: string[]
  status: 'upcoming' | 'live' | 'completed' | 'archived'
  time?: string
  summaryStatus?: 'Available'
  actionItemCount?: number
}

export interface ActionItem {
  assigneeId: string
  dueDate: string
  id: string
  isComplete: boolean
  priority: 'High' | 'Medium' | 'Low'
  task: string
}

export interface AIInsight {
  category: 'Action Items' | 'Meeting Memory' | 'Follow-up'
  description: string
  id: string
  time: string
  title: string
}

export interface TranscriptSegment {
  id: string
  speakerId: string
  timestamp: string
  text: string
}

export interface WorkspaceActionItem {
  assigneeId: string
  dueDate?: string
  id: string
  priority: 'High' | 'Medium' | 'Low'
  status: 'open' | 'completed'
  task: string
}

export interface WorkspaceInsight {
  category: 'Theme' | 'Risk' | 'Follow-up' | 'Pattern'
  description: string
  id: string
  title: string
}

export interface MeetingParticipantDetail {
  participantId: string
  role: string
}

export interface MeetingWorkspaceData {
  actionItems: WorkspaceActionItem[]
  executiveSummary?: string
  hasSummary: boolean
  hasTranscript: boolean
  insights: WorkspaceInsight[]
  keyDecisions: string[]
  keyTopics: string[]
  meetingId: string
  nextSteps: string[]
  participantDetails: MeetingParticipantDetail[]
  summary?: string
  transcriptSegments: TranscriptSegment[]
  unresolvedQuestions: string[]
}

export type MeetingWorkspaceTab = 'overview' | 'summary' | 'transcript' | 'action-items' | 'insights'

export interface QAChatMessage {
  id: string
  role: 'user' | 'assistant'
  text: string
}
