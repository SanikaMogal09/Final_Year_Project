import { CalendarPlus, FileUp, ListChecks, Search } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Card } from '../ui/Card'

interface QuickActionsProps { onCreateMeeting: () => void; onToast: (message: string) => void }

const actions = [{ title: 'Upload Recording', description: 'Analyze a previous meeting recording.', icon: FileUp, to: '#upload' }, { title: 'View Action Items', description: 'Review tasks from your meetings.', icon: ListChecks, to: '/meetings?scope=action-items' }, { title: 'Search Meetings', description: 'Find information across meeting history.', icon: Search, to: '/meetings' }]

export function QuickActions({ onCreateMeeting, onToast }: QuickActionsProps) {
  return <section><div className="mb-3"><h2 className="text-lg font-semibold text-foreground">Quick Actions</h2></div><div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4"><button className="text-left" onClick={onCreateMeeting} type="button"><QuickActionCard description="Start a new meeting workspace." icon={CalendarPlus} title="Create Meeting" /></button>{actions.map((action) => action.to === '#upload' ? <button className="text-left" key={action.title} onClick={() => onToast('Recording upload will be available in a future phase.')} type="button"><QuickActionCard {...action} /></button> : <Link key={action.title} to={action.to}><QuickActionCard {...action} /></Link>)}</div></section>
}

function QuickActionCard({ description, icon: Icon, title }: { description: string; icon: typeof CalendarPlus; title: string }) { return <Card className="h-full p-4 transition-colors hover:bg-background"><span className="grid size-8 place-items-center rounded-md bg-subtle text-accent"><Icon size={17} /></span><h3 className="mt-4 text-sm font-semibold text-foreground">{title}</h3><p className="mt-1 text-sm leading-5 text-muted">{description}</p></Card> }
