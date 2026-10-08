import { Lightbulb } from 'lucide-react'
import type { MeetingWorkspaceData } from '../../types'
import { Badge } from '../ui/Badge'
import { Card } from '../ui/Card'

const categoryTone = {
  Theme: 'info',
  Risk: 'warning',
  'Follow-up': 'ai',
  Pattern: 'default',
} as const

interface MeetingInsightsProps {
  workspace: MeetingWorkspaceData
}

export function MeetingInsights({ workspace }: MeetingInsightsProps) {
  if (workspace.insights.length === 0) {
    return (
      <Card className="p-8 text-center">
        <Lightbulb className="mx-auto text-muted" size={24} />
        <h3 className="mt-3 text-lg font-semibold text-foreground">No insights yet</h3>
        <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-secondary">Sample insights will appear here when meeting content is available.</p>
      </Card>
    )
  }

  return (
    <div className="grid gap-4">
      <div>
        <h3 className="text-lg font-semibold text-foreground">Insights</h3>
        <p className="mt-1 text-sm text-muted">Sample AI insights for demonstration · not derived from live audio analysis</p>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        {workspace.insights.map((insight) => (
          <Card className="p-5" key={insight.id}>
            <div className="flex flex-wrap items-center gap-2">
              <Badge tone={categoryTone[insight.category]}>{insight.category}</Badge>
              <span className="text-[11px] font-medium uppercase tracking-wide text-muted">Sample insight</span>
            </div>
            <h4 className="mt-3 text-sm font-semibold text-foreground">{insight.title}</h4>
            <p className="mt-2 text-sm leading-6 text-secondary">{insight.description}</p>
          </Card>
        ))}
      </div>
    </div>
  )
}
