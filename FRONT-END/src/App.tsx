import { Navigate, Route, Routes } from 'react-router-dom'
import { AppLayout } from './components/layout/AppLayout'
import { Dashboard } from './pages/Dashboard'
import { Meetings } from './pages/Meetings'
import { PlaceholderPage } from './pages/PlaceholderPage'

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route element={<Dashboard />} path="/dashboard" />
        <Route element={<Meetings />} path="/meetings" />
        <Route element={<PlaceholderPage name="Meeting detail" />} path="/meetings/:id" />
        <Route element={<PlaceholderPage name="Live meeting" />} path="/meetings/:id/live" />
        <Route element={<PlaceholderPage name="Meeting transcript" />} path="/meetings/:id/transcript" />
        <Route element={<PlaceholderPage name="AI summary" />} path="/meetings/:id/summary" />
        <Route element={<PlaceholderPage name="Action items" />} path="/meetings/:id/action-items" />
        <Route element={<PlaceholderPage name="Meeting insights" />} path="/meetings/:id/insights" />
        <Route element={<PlaceholderPage name="Analytics" />} path="/analytics" />
        <Route element={<PlaceholderPage name="Calendar" />} path="/calendar" />
        <Route element={<PlaceholderPage name="Settings" />} path="/settings" />
        <Route element={<PlaceholderPage name="Help" />} path="/help" />
        <Route element={<Navigate replace to="/dashboard" />} path="*" />
      </Routes>
    </AppLayout>
  )
}

export default App
