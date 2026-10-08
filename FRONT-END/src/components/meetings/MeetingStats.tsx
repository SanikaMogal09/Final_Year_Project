import { CalendarDays, CheckCircle2, Clock3, Video } from 'lucide-react'
import { Card } from '../ui/Card'

const stats = [{ label: 'Total meetings', value: '24', icon: CalendarDays }, { label: 'This month', value: '12', icon: Clock3 }, { label: 'Completed', value: '18', icon: CheckCircle2 }, { label: 'Upcoming', value: '6', icon: Video }]

export function MeetingStats() {
  return <section aria-label="Meeting statistics" className="grid grid-cols-2 gap-3 lg:grid-cols-4">{stats.map(({ icon: Icon, label, value }) => <Card className="flex items-center justify-between p-4 shadow-none" key={label}><div><p className="text-xs text-muted">{label}</p><p className="mt-1 text-xl font-semibold tracking-tight text-foreground">{value}</p></div><Icon className="text-muted" size={18} /></Card>)}</section>
}
