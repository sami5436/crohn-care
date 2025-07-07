import { useUser } from '@clerk/clerk-react'
import { useState } from 'react'
import { Plus, X, UtensilsCrossed, BedDouble, Meh } from 'lucide-react'
import { Card } from '../components/ui/Card'
import SymptomTrends from '../components/dashboard/SymptomTrends'
import RecentEntries from '../components/dashboard/RecentEntries'
import QuickActions from '../components/dashboard/QuickActions'
import TriggerAnalysis from '../components/dashboard/TriggerAnalysis'

type DrawerType = 'sleep' | 'food' | 'symptoms' | null

const Dashboard = () => {
  const { user } = useUser()
  const [drawer, setDrawer] = useState<DrawerType>(null)
  const [showMealFields, setShowMealFields] = useState(false)

  const today = new Date().toLocaleDateString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50 dark:from-gray-900 dark:via-emerald-900/20 dark:to-blue-900/20">
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

      {/* Floating Action Menu */}
      <div className="fixed bottom-6 right-6 z-50 group">
        {/* Expanded buttons */}
        <div className="flex flex-col items-end space-y-2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={() => setDrawer('sleep')}
            className="flex items-center gap-2 bg-white dark:bg-gray-800 shadow px-4 py-2 rounded-md text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
          >
            <BedDouble className="w-4 h-4" />
            Sleep & Stress
          </button>
          <button
            onClick={() => setDrawer('food')}
            className="flex items-center gap-2 bg-white dark:bg-gray-800 shadow px-4 py-2 rounded-md text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
          >
            <UtensilsCrossed className="w-4 h-4" />
            Food Entry
          </button>
          <button
            onClick={() => setDrawer('symptoms')}
            className="flex items-center gap-2 bg-white dark:bg-gray-800 shadow px-4 py-2 rounded-md text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
          >
            <Meh className="w-4 h-4" />
            Symptoms
          </button>
        </div>

        {/* Plus Button */}
        <button
          className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full p-4 shadow-lg transition-all duration-200 cursor-pointer"
          aria-label="Add Entry"
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>

      {/* Sidebar Drawer */}
      {drawer && (
        <div className="fixed top-0 right-0 h-full w-80 bg-white dark:bg-gray-900 shadow-lg z-50 px-6 py-8 overflow-y-auto transition-transform duration-300">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white capitalize">
              {drawer} Entry
            </h3>
            <button onClick={() => { setDrawer(null); setShowMealFields(false); }}>
              <X className="w-5 h-5 text-gray-500 dark:text-gray-300 cursor-pointer" />
            </button>
          </div>

          <div className="space-y-6 text-sm text-gray-800 dark:text-gray-200">
            <p><strong>Date:</strong> {today}</p>

            {(drawer === 'sleep' || drawer === 'food') && (
              <>
                <div>
                  <label className="block font-medium mb-1">Sleep Quality (1–10)</label>
                  <input
                    type="number"
                    min={1}
                    max={10}
                    className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2"
                    placeholder="e.g. 7"
                  />
                </div>

                <div>
                  <label className="block font-medium mb-1">Stress Level (1–10)</label>
                  <input
                    type="number"
                    min={1}
                    max={10}
                    className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2"
                    placeholder="e.g. 5"
                  />
                </div>
              </>
            )}

            {drawer === 'food' && (
              <>
                <div>
                  <button
                    onClick={() => setShowMealFields(!showMealFields)}
                    className="text-sm text-emerald-600 hover:underline"
                  >
                    {showMealFields ? 'Hide meal details' : 'Got a food entry?'}
                  </button>
                </div>

                {showMealFields && (
                  <>
                    <div>
                      <label className="block font-medium mb-1">Meal Type</label>
                      <select className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2">
                        <option>Breakfast</option>
                        <option>Lunch</option>
                        <option>Dinner</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-medium mb-1">Time of Meal</label>
                      <input
                        type="time"
                        className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2"
                      />
                    </div>

                    <div>
                      <label className="block font-medium mb-1">Food Description</label>
                      <input
                        type="text"
                        placeholder="e.g. Grilled chicken + salad"
                        className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2"
                      />
                    </div>
                  </>
                )}
              </>
            )}

            {drawer === 'symptoms' && (
              <>
                <div>
                  <label className="block font-medium mb-1">Symptoms (comma separated)</label>
                  <input
                    type="text"
                    placeholder="e.g. Bloating, Cramps"
                    className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2"
                  />
                </div>

                <div>
                  <label className="block font-medium mb-1">Severity (1–10)</label>
                  <input
                    type="number"
                    min={1}
                    max={10}
                    className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2"
                  />
                </div>
              </>
            )}

            <button
              className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 rounded-md cursor-pointer"
            >
              Save Entry
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Dashboard
