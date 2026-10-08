import type { AIInsight, ActionItem, Meeting, Participant } from '../types'

export const participants: Participant[] = [
  { id: 'sanika', initials: 'SM', name: 'Sanika Mogal' },
  { id: 'rahul', initials: 'RK', name: 'Rahul Khanna' },
  { id: 'priya', initials: 'PS', name: 'Priya Shah' },
  { id: 'aarav', initials: 'AM', name: 'Aarav Mehta' },
  { id: 'neha', initials: 'NG', name: 'Neha Gupta' },
]

export const upcomingMeetings: Meeting[] = [
  { id: 'architecture', title: 'Product Architecture Discussion', dateLabel: 'Today · 10:30 AM', dateValue: '2026-10-09', duration: '45 min', participantIds: ['sanika', 'rahul', 'priya', 'aarav'], status: 'upcoming' },
  { id: 'client-review', title: 'Client Requirements Review', dateLabel: 'Today · 2:00 PM', dateValue: '2026-10-09', duration: '30 min', participantIds: ['sanika', 'priya', 'neha'], status: 'upcoming' },
  { id: 'sprint-planning', title: 'Sprint Planning', dateLabel: 'Tomorrow · 11:00 AM', dateValue: '2026-10-10', duration: '60 min', participantIds: ['sanika', 'rahul', 'priya', 'aarav', 'neha'], status: 'upcoming' },
]

export const recentMeetings: Meeting[] = [
  { id: 'architecture-recent', title: 'Product Architecture Discussion', dateLabel: 'Oct 8', dateValue: '2026-10-08', duration: '45 min', participantIds: ['sanika', 'rahul', 'priya', 'aarav'], status: 'completed', summaryStatus: 'Available', actionItemCount: 5 },
  { id: 'backend-planning', title: 'Backend Planning', dateLabel: 'Oct 7', dateValue: '2026-10-07', duration: '38 min', participantIds: ['sanika', 'rahul', 'priya'], status: 'completed', summaryStatus: 'Available', actionItemCount: 3 },
  { id: 'sprint-review', title: 'Sprint Review', dateLabel: 'Oct 6', dateValue: '2026-10-06', duration: '52 min', participantIds: ['sanika', 'rahul', 'priya', 'aarav', 'neha'], status: 'completed', summaryStatus: 'Available', actionItemCount: 7 },
  { id: 'client-feedback', title: 'Client Feedback Session', dateLabel: 'Oct 5', dateValue: '2026-10-05', duration: '41 min', participantIds: ['sanika', 'priya', 'aarav', 'neha'], status: 'completed', summaryStatus: 'Available', actionItemCount: 2 },
]

export const actionItems: ActionItem[] = [
  { id: 'database-schema', task: 'Prepare database schema', assigneeId: 'rahul', dueDate: 'Due Oct 10', priority: 'High', isComplete: false },
  { id: 'api-docs', task: 'Complete API documentation', assigneeId: 'sanika', dueDate: 'Due Oct 11', priority: 'Medium', isComplete: false },
  { id: 'deployment-review', task: 'Review deployment strategy', assigneeId: 'priya', dueDate: 'Due Oct 12', priority: 'Medium', isComplete: false },
  { id: 'auth-flow', task: 'Finalize authentication flow', assigneeId: 'aarav', dueDate: 'Due Oct 14', priority: 'Low', isComplete: false },
]

export const aiInsights: AIInsight[] = [
  { id: 'due-soon', title: 'Action items due soon', description: '3 action items from your recent meetings are due tomorrow.', category: 'Action Items', time: '2 hours ago' },
  { id: 'repeated-topic', title: 'Repeated discussion', description: 'Database architecture was discussed across 4 meetings this week.', category: 'Meeting Memory', time: '5 hours ago' },
  { id: 'unresolved', title: 'Unresolved question', description: 'The backup strategy has not been finalized.', category: 'Follow-up', time: 'Yesterday' },
]
