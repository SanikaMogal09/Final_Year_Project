import { participants } from '../data/mockData'
import type { Meeting, MeetingWorkspaceData } from '../types'

function participantName(id: string) {
  return participants.find((participant) => participant.id === id)?.name ?? 'A teammate'
}

export function answerMeetingQuestion(question: string, meeting: Meeting, workspace: MeetingWorkspaceData): string {
  const normalized = question.trim().toLowerCase()
  if (!normalized) {
    return 'Please ask a question about this meeting.'
  }

  const demoNote = ' (Frontend demo using mock meeting data — not a live AI model.)'

  if (/key decision|decisions?|what did (we|the team) (decide|agree)/.test(normalized)) {
    if (workspace.keyDecisions.length === 0) {
      return `No key decisions are recorded for "${meeting.title}" yet.${demoNote}`
    }
    return `Key decisions from "${meeting.title}":\n${workspace.keyDecisions.map((item, index) => `${index + 1}. ${item}`).join('\n')}${demoNote}`
  }

  if (/action item|assigned to me|my tasks?|todo|to-do/.test(normalized)) {
    if (workspace.actionItems.length === 0) {
      return `There are no action items recorded for "${meeting.title}".${demoNote}`
    }
    if (/assigned to me|my tasks?/.test(normalized)) {
      const mine = workspace.actionItems.filter((item) => item.assigneeId === 'sanika')
      if (mine.length === 0) {
        return `No action items are assigned to Sanika Mogal in this meeting's mock data.${demoNote}`
      }
      return `Action items assigned to Sanika Mogal:\n${mine.map((item) => `• ${item.task}${item.dueDate ? ` (${item.dueDate})` : ''} — ${item.status}`).join('\n')}${demoNote}`
    }
    return `Action items from "${meeting.title}":\n${workspace.actionItems.map((item) => `• ${item.task} — ${participantName(item.assigneeId)}${item.dueDate ? `, ${item.dueDate}` : ''} [${item.status}]`).join('\n')}${demoNote}`
  }

  if (/unresolved|open question|remaining question|still open/.test(normalized)) {
    if (workspace.unresolvedQuestions.length === 0) {
      return `No unresolved questions are listed for "${meeting.title}".${demoNote}`
    }
    return `Unresolved questions:\n${workspace.unresolvedQuestions.map((item) => `• ${item}`).join('\n')}${demoNote}`
  }

  if (/risk|risks|concern|blocker/.test(normalized)) {
    const risks = workspace.insights.filter((insight) => insight.category === 'Risk')
    if (risks.length === 0) {
      return `The available meeting information does not list clear risks for "${meeting.title}".${demoNote}`
    }
    return `Sample risks and concerns from this meeting:\n${risks.map((item) => `• ${item.title}: ${item.description}`).join('\n')}${demoNote}`
  }

  if (/participant|who (was|is) (in|at)|attended|contribution|contribute/.test(normalized)) {
    const details = workspace.participantDetails
      .map((detail) => {
        const person = participants.find((participant) => participant.id === detail.participantId)
        return person ? `• ${person.name} — ${detail.role}` : null
      })
      .filter(Boolean)
    return `Participants in "${meeting.title}":\n${details.join('\n')}${demoNote}`
  }

  if (/summar|overview|main (point|takeaway)|what (was|is) (this|the) meeting/.test(normalized)) {
    if (!workspace.hasSummary || !workspace.summary) {
      return `An AI summary is not available for "${meeting.title}" yet. Status: ${meeting.aiStatus ?? 'No Transcript'}.${demoNote}`
    }
    return `Summary of "${meeting.title}":\n${workspace.summary}${demoNote}`
  }

  if (/topic|theme|discussed/.test(normalized)) {
    if (workspace.keyTopics.length === 0) {
      return `No key topics are recorded for "${meeting.title}".${demoNote}`
    }
    return `Key topics: ${workspace.keyTopics.join(', ')}.${demoNote}`
  }

  if (/next step|follow[- ]?up/.test(normalized)) {
    if (workspace.nextSteps.length === 0) {
      return `No next steps are recorded for "${meeting.title}".${demoNote}`
    }
    return `Next steps:\n${workspace.nextSteps.map((item) => `• ${item}`).join('\n')}${demoNote}`
  }

  return `The available meeting information for "${meeting.title}" does not contain a clear answer to that question. Try asking about decisions, action items, unresolved questions, participants, summary, topics, or risks.${demoNote}`
}
