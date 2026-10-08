import { Card } from '../ui/Card'

const metrics = [{ label: 'Meeting hours this week', value: '12.5h' }, { label: 'AI summaries generated', value: '8' }, { label: 'Action items completed', value: '23' }, { label: 'Average meeting duration', value: '42 min' }]

export function ProductivityOverview() {
  return <section><div className="mb-3"><h2 className="text-lg font-semibold text-foreground">Your Meeting Productivity</h2><p className="mt-1 text-sm text-muted">A quick view of your work this week.</p></div><Card className="grid divide-y divide-border sm:grid-cols-2 sm:divide-x sm:divide-y-0 xl:grid-cols-4">{metrics.map((metric) => <div className="p-4" key={metric.label}><p className="text-xs text-muted">{metric.label}</p><p className="mt-2 text-xl font-semibold tracking-tight text-foreground">{metric.value}</p></div>)}</Card></section>
}
