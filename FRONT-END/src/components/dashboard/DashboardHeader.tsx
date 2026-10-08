import { Plus } from 'lucide-react'
import { Button } from '../ui/Button'

interface DashboardHeaderProps {
  onCreateMeeting: () => void
}

export function DashboardHeader({ onCreateMeeting }: DashboardHeaderProps) {
  return (
    <header className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
      <div>
        <h2 className="text-3xl font-semibold tracking-tight text-foreground">Good morning, Sanika</h2>
        <p className="mt-2 text-sm text-secondary">Here&apos;s what&apos;s happening with your meetings.</p>
      </div>
      <Button onClick={onCreateMeeting}><Plus size={17} />New Meeting</Button>
    </header>
  )
}
