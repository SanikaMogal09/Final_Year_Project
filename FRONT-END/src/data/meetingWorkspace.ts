import type { MeetingWorkspaceData } from '../types'

export const meetingWorkspaces: Record<string, MeetingWorkspaceData> = {
  'product-architecture': {
    meetingId: 'product-architecture',
    hasSummary: true,
    hasTranscript: true,
    summary:
      'The team aligned on a modular architecture for the AI Meeting Assistant, separating ingestion, processing, and presentation layers. PostgreSQL was selected as the primary store, with retrieval-augmented generation planned for later phases. Ownership of API contracts and deployment strategy was assigned before the next sprint.',
    executiveSummary:
      'This session established the technical foundation for the AI Meeting Assistant. Participants agreed to keep the frontend mock-first while designing backend boundaries early. The group settled on a service-oriented API layer, PostgreSQL for structured meeting data, and a delayed RAG rollout until transcript quality is validated.',
    keyTopics: ['Backend Architecture', 'Database Design', 'API Structure', 'Deployment', 'Security'],
    keyDecisions: [
      'Use a modular service boundary between transcription processing and the product API.',
      'Adopt PostgreSQL as the primary application database.',
      'Defer vector search and RAG until Phase 7 validation criteria are defined.',
      'Ship the Meeting Workspace with mock AI content before integrating external models.',
    ],
    unresolvedQuestions: [
      'Which staging environment should host the first backend prototype?',
      'What retention policy should apply to stored transcripts?',
    ],
    nextSteps: [
      'Draft API contract for meetings, transcripts, and action items.',
      'Prepare an initial PostgreSQL schema proposal.',
      'Document security requirements for authentication sessions.',
    ],
    actionItems: [
      { id: 'pa-1', task: 'Draft initial API contract for meetings and transcripts', assigneeId: 'sanika', dueDate: 'Due Oct 12', priority: 'High', status: 'open' },
      { id: 'pa-2', task: 'Propose PostgreSQL schema for meetings and participants', assigneeId: 'rahul', dueDate: 'Due Oct 11', priority: 'High', status: 'open' },
      { id: 'pa-3', task: 'Outline deployment environments for staging and production', assigneeId: 'priya', dueDate: 'Due Oct 14', priority: 'Medium', status: 'open' },
      { id: 'pa-4', task: 'Capture security checklist for session handling', assigneeId: 'aarav', dueDate: 'Due Oct 15', priority: 'Medium', status: 'completed' },
    ],
    insights: [
      { id: 'pa-i1', category: 'Theme', title: 'Architecture modularity', description: 'Discussion repeatedly returned to separating ingestion, processing, and presentation concerns.' },
      { id: 'pa-i2', category: 'Risk', title: 'Premature RAG investment', description: 'Several participants warned that vector search should wait until transcript quality is reliable.' },
      { id: 'pa-i3', category: 'Pattern', title: 'Database consensus', description: 'PostgreSQL was endorsed across architecture, backend, and security conversations.' },
      { id: 'pa-i4', category: 'Follow-up', title: 'Environment ownership', description: 'Deployment environment ownership remains open and should be resolved before implementation starts.' },
    ],
    participantDetails: [
      { participantId: 'sanika', role: 'Facilitator · product and API direction' },
      { participantId: 'rahul', role: 'Backend lead · data model recommendations' },
      { participantId: 'priya', role: 'Platform · deployment and environments' },
      { participantId: 'aarav', role: 'Security · session and access concerns' },
      { participantId: 'neha', role: 'Product · roadmap and phase sequencing' },
    ],
    transcriptSegments: [
      { id: 'pa-t1', speakerId: 'sanika', timestamp: '10:30', text: 'Let us begin by reviewing the architecture goals for the AI Meeting Assistant.' },
      { id: 'pa-t2', speakerId: 'rahul', timestamp: '10:32', text: 'We should separate the API layer from the processing pipeline so transcription work does not block the product surface.' },
      { id: 'pa-t3', speakerId: 'priya', timestamp: '10:35', text: 'I agree. Deployment becomes simpler if we can scale the processing workers independently.' },
      { id: 'pa-t4', speakerId: 'aarav', timestamp: '10:38', text: 'We also need a clear boundary for authentication before any transcript data is persisted.' },
      { id: 'pa-t5', speakerId: 'neha', timestamp: '10:41', text: 'From a roadmap view, mock summaries are fine for Phase 6 as long as the workspace structure is production-ready.' },
      { id: 'pa-t6', speakerId: 'sanika', timestamp: '10:44', text: 'Decision: PostgreSQL for structured data, and RAG stays out of scope until later validation.' },
      { id: 'pa-t7', speakerId: 'rahul', timestamp: '10:48', text: 'I will draft the schema proposal and share it before Friday.' },
      { id: 'pa-t8', speakerId: 'priya', timestamp: '10:51', text: 'I still need clarity on which staging environment we will use for the first prototype.' },
    ],
  },

  'client-requirements': {
    meetingId: 'client-requirements',
    hasSummary: false,
    hasTranscript: true,
    keyTopics: ['Requirements', 'Deliverables', 'Priorities', 'Timeline'],
    keyDecisions: [
      'Prioritize Meeting Workspace delivery before calendar integrations.',
      'Treat AI Q&A as a frontend demonstration for the current milestone.',
    ],
    unresolvedQuestions: [
      'What is the deadline for the remaining integration work?',
      'Will the client review include transcript search as a must-have?',
    ],
    nextSteps: [
      'Share an updated requirements checklist with stakeholders.',
      'Confirm acceptance criteria for the Meeting Workspace demo.',
    ],
    actionItems: [
      { id: 'cr-1', task: 'Update requirements checklist with client priorities', assigneeId: 'sanika', dueDate: 'Due Oct 10', priority: 'High', status: 'open' },
      { id: 'cr-2', task: 'Prepare demo script for Meeting Workspace walkthrough', assigneeId: 'priya', dueDate: 'Due Oct 11', priority: 'Medium', status: 'open' },
      { id: 'cr-3', task: 'Confirm timeline language for the next client update', assigneeId: 'neha', dueDate: 'Due Oct 12', priority: 'Medium', status: 'completed' },
    ],
    insights: [
      { id: 'cr-i1', category: 'Theme', title: 'Delivery focus', description: 'Conversation concentrated on shipping a convincing workspace experience before broader integrations.' },
      { id: 'cr-i2', category: 'Risk', title: 'Scope creep', description: 'Calendar and live meeting integrations remain attractive but risk delaying the current milestone.' },
      { id: 'cr-i3', category: 'Follow-up', title: 'Acceptance criteria', description: 'Client acceptance language for transcript search still needs confirmation.' },
    ],
    participantDetails: [
      { participantId: 'sanika', role: 'Lead · requirements synthesis' },
      { participantId: 'priya', role: 'Delivery · demo readiness' },
      { participantId: 'neha', role: 'Stakeholder communication' },
    ],
    transcriptSegments: [
      { id: 'cr-t1', speakerId: 'sanika', timestamp: '14:00', text: 'Let us review the latest client priorities and map them to our phase plan.' },
      { id: 'cr-t2', speakerId: 'neha', timestamp: '14:03', text: 'They want the Meeting Workspace to feel complete even if AI answers are mocked for now.' },
      { id: 'cr-t3', speakerId: 'priya', timestamp: '14:07', text: 'We should keep calendar integrations out of this release to protect the timeline.' },
      { id: 'cr-t4', speakerId: 'sanika', timestamp: '14:12', text: 'Agreed. Workspace quality and trustworthy empty states matter more than extra integrations.' },
      { id: 'cr-t5', speakerId: 'neha', timestamp: '14:18', text: 'I will confirm whether transcript search is explicitly listed as a must-have.' },
    ],
  },

  'sprint-planning': {
    meetingId: 'sprint-planning',
    hasSummary: false,
    hasTranscript: false,
    keyTopics: ['Sprint Goals', 'Capacity', 'Priorities'],
    keyDecisions: [],
    unresolvedQuestions: [
      'How much capacity remains after finishing Phase 6 polish?',
      'Should analytics scaffolding start in the same sprint?',
    ],
    nextSteps: [
      'Finalize sprint backlog after the meeting begins.',
      'Confirm owners for Meeting Workspace QA.',
    ],
    actionItems: [],
    insights: [
      { id: 'sp-i1', category: 'Follow-up', title: 'Planning incomplete', description: 'This upcoming meeting does not yet have transcript or summary content to analyze.' },
    ],
    participantDetails: [
      { participantId: 'sanika', role: 'Sprint lead' },
      { participantId: 'rahul', role: 'Engineering' },
      { participantId: 'priya', role: 'Platform' },
      { participantId: 'aarav', role: 'Security' },
      { participantId: 'neha', role: 'Product' },
    ],
    transcriptSegments: [],
  },

  'backend-planning': {
    meetingId: 'backend-planning',
    hasSummary: true,
    hasTranscript: true,
    summary:
      'The backend planning session defined API ownership, database responsibilities, and sequencing for authentication work. The team agreed that meetings, transcripts, and action items should share a consistent relational model, with clear service boundaries for later AI enrichment.',
    executiveSummary:
      'Participants mapped the first backend slices needed after the frontend workspace lands. They chose a meetings-centric schema, delayed live integrations, and assigned ownership for API documentation and schema design.',
    keyTopics: ['API Architecture', 'Database Structure', 'Auth Sequencing', 'Service Boundaries'],
    keyDecisions: [
      'Model meetings as the aggregate root for transcripts and action items.',
      'Document public API endpoints before implementation begins.',
      'Sequence authentication work immediately after schema approval.',
    ],
    unresolvedQuestions: [
      'Should transcript segments live in the same database as meetings?',
      'Who owns rate-limiting policy for future Ask AI endpoints?',
    ],
    nextSteps: [
      'Publish draft OpenAPI notes for meetings endpoints.',
      'Review schema proposal with the architecture group.',
    ],
    actionItems: [
      { id: 'bp-1', task: 'Complete API documentation draft for meetings endpoints', assigneeId: 'sanika', dueDate: 'Due Oct 11', priority: 'High', status: 'open' },
      { id: 'bp-2', task: 'Prepare database schema for meetings and action items', assigneeId: 'rahul', dueDate: 'Due Oct 10', priority: 'High', status: 'open' },
      { id: 'bp-3', task: 'List authentication dependencies for the first backend milestone', assigneeId: 'priya', dueDate: 'Due Oct 13', priority: 'Medium', status: 'open' },
    ],
    insights: [
      { id: 'bp-i1', category: 'Theme', title: 'Meetings as aggregate root', description: 'The team consistently framed transcripts and action items as dependent meeting resources.' },
      { id: 'bp-i2', category: 'Risk', title: 'Auth sequencing', description: 'Authentication dependencies could block persistence work if left unresolved.' },
      { id: 'bp-i3', category: 'Follow-up', title: 'Transcript storage', description: 'Segment storage location remains an open technical decision.' },
    ],
    participantDetails: [
      { participantId: 'sanika', role: 'API contracts' },
      { participantId: 'rahul', role: 'Database design' },
      { participantId: 'priya', role: 'Auth and platform sequencing' },
    ],
    transcriptSegments: [
      { id: 'bp-t1', speakerId: 'sanika', timestamp: '09:15', text: 'Today we need a clear ownership map for the first backend slices.' },
      { id: 'bp-t2', speakerId: 'rahul', timestamp: '09:18', text: 'I recommend meetings as the root entity, with transcripts and action items linked by meeting ID.' },
      { id: 'bp-t3', speakerId: 'priya', timestamp: '09:22', text: 'Authentication should land right after schema approval so we are not prototyping against open endpoints.' },
      { id: 'bp-t4', speakerId: 'sanika', timestamp: '09:28', text: 'I will draft the OpenAPI notes while Rahul prepares the schema.' },
      { id: 'bp-t5', speakerId: 'rahul', timestamp: '09:34', text: 'We still need to decide whether transcript segments stay in PostgreSQL or move later.' },
    ],
  },

  'design-review': {
    meetingId: 'design-review',
    hasSummary: false,
    hasTranscript: true,
    keyTopics: ['Usability', 'Workspace Layout', 'Empty States', 'Mobile Tabs'],
    keyDecisions: [
      'Prefer compact panels over oversized cards in the Meeting Workspace.',
      'Keep tab navigation sticky and horizontally scrollable on mobile.',
    ],
    unresolvedQuestions: [
      'Should Ask AI occupy a dedicated right rail on desktop?',
      'Do we need denser typography for transcript lines?',
    ],
    nextSteps: [
      'Incorporate review notes into the workspace layout.',
      'Validate tab usability at 390px width.',
    ],
    actionItems: [
      { id: 'dr-1', task: 'Refine empty-state copy for missing summaries and transcripts', assigneeId: 'sanika', dueDate: 'Due Oct 9', priority: 'High', status: 'open' },
      { id: 'dr-2', task: 'Adjust tab overflow behavior for narrow screens', assigneeId: 'priya', dueDate: 'Due Oct 10', priority: 'High', status: 'open' },
      { id: 'dr-3', task: 'Prototype denser transcript typography options', assigneeId: 'aarav', dueDate: 'Due Oct 12', priority: 'Low', status: 'open' },
      { id: 'dr-4', task: 'Document preferred panel spacing for overview sections', assigneeId: 'priya', dueDate: 'Due Oct 11', priority: 'Medium', status: 'completed' },
    ],
    insights: [
      { id: 'dr-i1', category: 'Theme', title: 'Information density', description: 'Reviewers preferred a premium dense layout over spacious marketing-style cards.' },
      { id: 'dr-i2', category: 'Risk', title: 'Mobile tab overflow', description: 'Too many workspace tabs can become hard to use without horizontal scrolling.' },
      { id: 'dr-i3', category: 'Follow-up', title: 'Ask AI placement', description: 'Desktop placement for the Q&A panel still needs a final recommendation.' },
    ],
    participantDetails: [
      { participantId: 'sanika', role: 'Product design review' },
      { participantId: 'priya', role: 'Interaction and responsive behavior' },
      { participantId: 'aarav', role: 'Transcript readability feedback' },
    ],
    transcriptSegments: [
      { id: 'dr-t1', speakerId: 'sanika', timestamp: '15:30', text: 'The workspace should feel dense and professional, not like a marketing landing page.' },
      { id: 'dr-t2', speakerId: 'priya', timestamp: '15:34', text: 'Tabs need to remain usable on mobile, so horizontal scroll with clear active states is important.' },
      { id: 'dr-t3', speakerId: 'aarav', timestamp: '15:39', text: 'Transcript lines are easier to scan when timestamps stay aligned and speaker labels are consistent.' },
      { id: 'dr-t4', speakerId: 'sanika', timestamp: '15:45', text: 'Empty states should explain why content is missing instead of looking broken.' },
      { id: 'dr-t5', speakerId: 'priya', timestamp: '15:50', text: 'I am still unsure whether Ask AI should live in a right rail or remain in the overview flow.' },
    ],
  },

  'team-standup': {
    meetingId: 'team-standup',
    hasSummary: false,
    hasTranscript: true,
    keyTopics: ['Progress', 'Blockers', 'Priorities'],
    keyDecisions: [
      'Prioritize Meeting Workspace completion before analytics scaffolding.',
    ],
    unresolvedQuestions: [
      'Can authentication design review happen today without blocking Phase 6?',
    ],
    nextSteps: [
      'Finish workspace tab content.',
      'Share blockers in the afternoon sync if needed.',
    ],
    actionItems: [
      { id: 'ts-1', task: 'Complete Meeting Workspace overview and Ask AI panel', assigneeId: 'sanika', dueDate: 'Due Oct 9', priority: 'High', status: 'open' },
    ],
    insights: [
      { id: 'ts-i1', category: 'Theme', title: 'Execution focus', description: 'Standup updates centered on finishing Phase 6 rather than opening new workstreams.' },
      { id: 'ts-i2', category: 'Risk', title: 'Context switching', description: 'Authentication discussions could distract from workspace delivery if not timeboxed.' },
    ],
    participantDetails: [
      { participantId: 'sanika', role: 'Workspace implementation' },
      { participantId: 'rahul', role: 'Backend planning follow-up' },
      { participantId: 'priya', role: 'Responsive QA' },
      { participantId: 'aarav', role: 'Auth design notes' },
    ],
    transcriptSegments: [
      { id: 'ts-t1', speakerId: 'sanika', timestamp: '09:00', text: 'Yesterday I finished the meetings management interactions and started the workspace shell.' },
      { id: 'ts-t2', speakerId: 'rahul', timestamp: '09:02', text: 'Schema notes are ready for review, but I am waiting on final endpoint naming.' },
      { id: 'ts-t3', speakerId: 'priya', timestamp: '09:04', text: 'I can help validate tabs on mobile once the overview content is in place.' },
      { id: 'ts-t4', speakerId: 'aarav', timestamp: '09:06', text: 'I have auth design notes, but they should not block Phase 6 frontend work.' },
      { id: 'ts-t5', speakerId: 'sanika', timestamp: '09:08', text: 'Priority today is finishing the Meeting Workspace tabs and mock Ask AI behavior.' },
    ],
  },

  'deployment-strategy': {
    meetingId: 'deployment-strategy',
    hasSummary: false,
    hasTranscript: false,
    keyTopics: ['Environments', 'Monitoring', 'Release Strategy'],
    keyDecisions: [],
    unresolvedQuestions: [
      'Which deployment environment should be used for the first backend prototype?',
      'What monitoring baseline is required before production?',
    ],
    nextSteps: [
      'Prepare environment comparison notes before the meeting.',
      'Draft a release checklist outline.',
    ],
    actionItems: [],
    insights: [
      { id: 'ds-i1', category: 'Follow-up', title: 'Upcoming planning session', description: 'Deployment strategy content will populate after the meeting occurs.' },
    ],
    participantDetails: [
      { participantId: 'sanika', role: 'Release planning' },
      { participantId: 'rahul', role: 'Backend environments' },
      { participantId: 'neha', role: 'Go-to-market timing' },
    ],
    transcriptSegments: [],
  },

  'authentication-architecture': {
    meetingId: 'authentication-architecture',
    hasSummary: true,
    hasTranscript: true,
    summary:
      'The team reviewed authentication and authorization requirements for the AI Meeting Assistant. Session handling, role expectations, and secure access to transcripts were the main themes. The group preferred a staged approach that starts with secure session-based auth before expanding into finer-grained permissions.',
    executiveSummary:
      'Participants aligned on a pragmatic authentication path: establish secure sessions first, protect transcript and summary routes early, and postpone advanced authorization matrix work until core persistence exists.',
    keyTopics: ['Authentication', 'Authorization', 'Sessions', 'Security Requirements'],
    keyDecisions: [
      'Start with session-based authentication before advanced role matrices.',
      'Protect transcript and summary routes as soon as persistence is introduced.',
      'Keep frontend demos free of real credentials during Phase 6.',
    ],
    unresolvedQuestions: [
      'Should invitation-based access land in the first auth milestone?',
      'What session timeout is acceptable for transcript review sessions?',
    ],
    nextSteps: [
      'Draft authentication flow diagrams.',
      'List protected routes for the first backend milestone.',
      'Define password and session policies for internal users.',
    ],
    actionItems: [
      { id: 'aa-1', task: 'Finalize authentication flow diagrams', assigneeId: 'aarav', dueDate: 'Due Oct 14', priority: 'High', status: 'open' },
      { id: 'aa-2', task: 'List protected routes for meetings and transcripts', assigneeId: 'sanika', dueDate: 'Due Oct 12', priority: 'High', status: 'open' },
      { id: 'aa-3', task: 'Propose session timeout defaults', assigneeId: 'rahul', dueDate: 'Due Oct 13', priority: 'Medium', status: 'open' },
      { id: 'aa-4', task: 'Document password policy assumptions for internal users', assigneeId: 'aarav', dueDate: 'Due Oct 15', priority: 'Medium', status: 'open' },
      { id: 'aa-5', task: 'Capture open questions for invitation-based access', assigneeId: 'sanika', dueDate: 'Due Oct 16', priority: 'Low', status: 'completed' },
    ],
    insights: [
      { id: 'aa-i1', category: 'Theme', title: 'Session-first approach', description: 'The discussion favored establishing secure sessions before building complex authorization rules.' },
      { id: 'aa-i2', category: 'Risk', title: 'Transcript exposure', description: 'Unprotected transcript routes were called out as a high-risk area once persistence begins.' },
      { id: 'aa-i3', category: 'Pattern', title: 'Security before integrations', description: 'Participants preferred securing core product routes before adding external meeting providers.' },
      { id: 'aa-i4', category: 'Follow-up', title: 'Invitations', description: 'Invitation-based access remains unresolved for the first auth milestone.' },
    ],
    participantDetails: [
      { participantId: 'sanika', role: 'Product security requirements' },
      { participantId: 'rahul', role: 'Session and API implications' },
      { participantId: 'aarav', role: 'Authentication design lead' },
    ],
    transcriptSegments: [
      { id: 'aa-t1', speakerId: 'aarav', timestamp: '11:30', text: 'We should secure sessions first and avoid overbuilding authorization in the first milestone.' },
      { id: 'aa-t2', speakerId: 'sanika', timestamp: '11:34', text: 'Transcript and summary routes need protection as soon as we persist any meeting content.' },
      { id: 'aa-t3', speakerId: 'rahul', timestamp: '11:39', text: 'A sensible session timeout will matter for long transcript review sessions.' },
      { id: 'aa-t4', speakerId: 'aarav', timestamp: '11:45', text: 'Invitation-based access can wait unless it is required for the first pilot users.' },
      { id: 'aa-t5', speakerId: 'sanika', timestamp: '11:50', text: 'Phase 6 should continue using mock data with no real credentials in the frontend demo.' },
      { id: 'aa-t6', speakerId: 'rahul', timestamp: '11:55', text: 'I can propose timeout defaults after we list the protected routes.' },
    ],
  },

  'legacy-kickoff': {
    meetingId: 'legacy-kickoff',
    hasSummary: true,
    hasTranscript: true,
    summary:
      'The archived kickoff captured the original product vision, team roles, and phase sequencing for the AI Meeting Assistant. It remains useful reference material for later planning even though active work has moved into the Meetings Management and Workspace phases.',
    executiveSummary:
      'Kickoff participants defined the product thesis, agreed on a phased delivery plan, and established ownership across product, engineering, and platform workstreams.',
    keyTopics: ['Product Vision', 'Team Roles', 'Phase Plan', 'Success Metrics'],
    keyDecisions: [
      'Deliver frontend workspace experiences before integrating live meeting providers.',
      'Use mock AI behavior until backend retrieval is ready.',
      'Keep the design system light and enterprise-focused.',
    ],
    unresolvedQuestions: [
      'Which success metric best represents meeting memory quality?',
    ],
    nextSteps: [
      'Archive kickoff notes for future onboarding.',
      'Reuse phase definitions in later planning sessions.',
    ],
    actionItems: [
      { id: 'lk-1', task: 'Publish kickoff notes to the shared workspace archive', assigneeId: 'neha', dueDate: 'Due Sep 30', priority: 'Medium', status: 'completed' },
      { id: 'lk-2', task: 'Confirm phase owners for Phases 5 through 7', assigneeId: 'sanika', dueDate: 'Due Oct 1', priority: 'High', status: 'completed' },
    ],
    insights: [
      { id: 'lk-i1', category: 'Theme', title: 'Phased delivery', description: 'The kickoff emphasized staged value: dashboard, meetings management, then workspace intelligence.' },
      { id: 'lk-i2', category: 'Pattern', title: 'Mock-first AI', description: 'The team planned frontend demonstrations of AI features before connecting real model APIs.' },
      { id: 'lk-i3', category: 'Follow-up', title: 'Memory quality metric', description: 'A durable success metric for meeting memory quality was left open.' },
    ],
    participantDetails: [
      { participantId: 'sanika', role: 'Product owner' },
      { participantId: 'rahul', role: 'Engineering lead' },
      { participantId: 'priya', role: 'Platform lead' },
      { participantId: 'neha', role: 'Program and communications' },
    ],
    transcriptSegments: [
      { id: 'lk-t1', speakerId: 'sanika', timestamp: '16:00', text: 'Our goal is an AI Meeting Assistant that turns conversations into durable organizational memory.' },
      { id: 'lk-t2', speakerId: 'rahul', timestamp: '16:05', text: 'We should prove the frontend workspace before investing heavily in live integrations.' },
      { id: 'lk-t3', speakerId: 'priya', timestamp: '16:10', text: 'A light enterprise design system will help the product feel credible early.' },
      { id: 'lk-t4', speakerId: 'neha', timestamp: '16:18', text: 'I will archive these notes so future planning sessions can reuse the phase definitions.' },
      { id: 'lk-t5', speakerId: 'sanika', timestamp: '16:25', text: 'Mock AI answers are acceptable until retrieval and persistence are ready.' },
    ],
  },
}

export function getMeetingWorkspace(meetingId: string): MeetingWorkspaceData | undefined {
  return meetingWorkspaces[meetingId]
}
