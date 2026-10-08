import { useLocation } from 'react-router-dom'
import { Card } from '../components/ui/Card'

interface PlaceholderPageProps {
  name: string
}

export function PlaceholderPage({ name }: PlaceholderPageProps) {
  const { search } = useLocation()
  const scope = new URLSearchParams(search).get('scope')
  const pageName = scope === 'mine' ? 'My Meetings' : scope === 'action-items' ? 'Action Items' : scope === 'insights' ? 'Saved Insights' : name

  return (
    <div className="mx-auto max-w-6xl">
      <Card className="max-w-xl p-6 sm:p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ai">Coming next</p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">{pageName}</h2>
        <p className="mt-2 text-sm leading-6 text-secondary">{pageName} will be implemented in a later phase.</p>
      </Card>
    </div>
  )
}
