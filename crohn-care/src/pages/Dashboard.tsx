import { useUser } from '@clerk/clerk-react'
import { Card } from '../components/ui/Card'
import SymptomTrends from '../components/dashboard/SymptomTrends'
import RecentEntries from '../components/dashboard/RecentEntries'
import QuickActions from '../components/dashboard/QuickActions'
import TriggerAnalysis from '../components/dashboard/TriggerAnalysis'

const Dashboard = () => {
  const { user } = useUser()

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50 dark:from-gray-900 dark:via-emerald-900/20 dark:to-blue-900/20">
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-extrabold mb-10 bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 dark:from-emerald-400 dark:via-teal-400 dark:to-blue-400 bg-clip-text text-transparent">
          Welcome back, {user?.firstName || 'Friend'} 👋
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <Card className="lg:col-span-2 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700">
            <SymptomTrends />
          </Card>
          <Card className="bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700">
            <QuickActions />
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700">
            <TriggerAnalysis />
          </Card>
          <Card className="bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700">
            <RecentEntries />
          </Card>
        </div>
      </section>
    </div>
  )
}

export default Dashboard
