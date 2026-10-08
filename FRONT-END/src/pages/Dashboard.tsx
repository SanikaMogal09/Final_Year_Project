import { useState } from 'react'
import { actionItems, aiInsights, participants, upcomingMeetings } from '../data/mockData'
import type { ActionItem, Meeting } from '../types'
import { ActionItemsPreview } from '../components/dashboard/ActionItemsPreview'
import { AIInsights } from '../components/dashboard/AIInsights'
import { CreateMeetingModal } from '../components/dashboard/CreateMeetingModal'
import { DashboardHeader } from '../components/dashboard/DashboardHeader'
import { ProductivityOverview } from '../components/dashboard/ProductivityOverview'
import { QuickActions } from '../components/dashboard/QuickActions'
import { RecentMeetings } from '../components/dashboard/RecentMeetings'
import { StatsGrid } from '../components/dashboard/StatsGrid'
import { UpcomingMeetings } from '../components/dashboard/UpcomingMeetings'
import { Toast } from '../components/ui/Toast'
import { recentMeetings } from '../data/mockData'

export function Dashboard() {
  const [isCreateOpen, setIsCreateOpen] = useState(false)
  const [upcoming, setUpcoming] = useState<Meeting[]>(upcomingMeetings)
  const [items, setItems] = useState<ActionItem[]>(actionItems)
  const [toast, setToast] = useState<string | null>(null)
  const showToast = (message: string) => { setToast(message); window.setTimeout(() => setToast(null), 3500) }
  const createMeeting = (meeting: Meeting) => { setUpcoming((current) => [meeting, ...current]); setIsCreateOpen(false); showToast('Meeting created successfully.') }
  const toggleItem = (id: string) => setItems((current) => current.map((item) => item.id === id ? { ...item, isComplete: !item.isComplete } : item))

  return <div className="mx-auto grid max-w-7xl gap-8 pb-4"><DashboardHeader onCreateMeeting={() => setIsCreateOpen(true)} /><StatsGrid /><div className="grid gap-7 xl:grid-cols-[minmax(0,1.25fr)_minmax(340px,0.75fr)]"><UpcomingMeetings meetings={upcoming.slice(0, 3)} participants={participants} /><AIInsights insights={aiInsights} /></div><RecentMeetings meetings={recentMeetings} /><div className="grid gap-7 xl:grid-cols-2"><ActionItemsPreview items={items} onToggle={toggleItem} participants={participants} /><ProductivityOverview /></div><QuickActions onCreateMeeting={() => setIsCreateOpen(true)} onToast={showToast} /><CreateMeetingModal isOpen={isCreateOpen} key={isCreateOpen ? 'create-open' : 'create-closed'} onClose={() => setIsCreateOpen(false)} onCreate={createMeeting} />{toast && <Toast message={toast} onClose={() => setToast(null)} />}</div>
}
