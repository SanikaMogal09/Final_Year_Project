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
