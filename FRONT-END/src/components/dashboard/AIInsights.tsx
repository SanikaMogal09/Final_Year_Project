import { ArrowUpRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { AIInsight } from '../../types'
import { Badge } from '../ui/Badge'
import { Card } from '../ui/Card'

export function AIInsights({ insights }: { insights: AIInsight[] }) {
  return (
    <section><div className="mb-3"><h2 className="text-lg font-semibold text-foreground">AI Insights</h2><p className="mt-1 text-sm text-muted">Important things your meeting assistant noticed.</p></div>
      <div className="grid gap-3">
        {insights.map((insight) => <Card className="border-violet/25 bg-[#f5f3ff] p-4 shadow-none" key={insight.id}><div className="flex gap-3"><span className="grid size-8 shrink-0 place-items-center rounded-md bg-card text-ai"><Sparkles size={16} /></span><div className="min-w-0 flex-1"><div className="flex items-start justify-between gap-3"><h3 className="text-sm font-semibold text-foreground">{insight.title}</h3><ArrowUpRight className="shrink-0 text-ai" size={16} /></div><p className="mt-1.5 text-sm leading-5 text-secondary">{insight.description}</p><div className="mt-3 flex items-center justify-between gap-3"><Badge tone="ai">{insight.category}</Badge><span className="text-xs text-muted">{insight.time}</span></div></div></div></Card>)}
      </div>
      <Link className="mt-3 inline-flex text-sm font-medium text-ai hover:text-violet" to="/meetings?scope=insights">View all insights</Link>
    </section>
  )
}
