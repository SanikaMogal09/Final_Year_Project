import { CalendarDays, CheckCircle2, Clock3, Sparkles, type LucideIcon } from 'lucide-react'
import { Card } from '../ui/Card'

const stats: { icon: LucideIcon; label: string; note: string; value: string }[] = [
  { icon: CalendarDays, label: 'Total meetings', value: '24', note: '+12% this month' },
  { icon: Clock3, label: 'Meeting hours', value: '18.5h', note: '+8% this month' },
  { icon: CheckCircle2, label: 'Action items', value: '37', note: '8 pending' },
  { icon: Sparkles, label: 'AI insights', value: '126', note: '+18 this month' },
]

export function StatsGrid() {
  return (
    <section aria-label="Meeting statistics" className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map(({ icon: Icon, label, note, value }) => (
        <Card className="p-5" key={label}>
          <div className="flex items-start justify-between gap-3"><p className="text-xs font-medium uppercase tracking-[0.12em] text-muted">{label}</p><span className="grid size-8 place-items-center rounded-md bg-accent/8 text-accent"><Icon size={17} /></span></div>
          <p className="mt-5 text-2xl font-semibold tracking-tight text-foreground">{value}</p>
          <p className="mt-1 text-xs text-muted">{note}</p>
        </Card>
      ))}
    </section>
  )
}
