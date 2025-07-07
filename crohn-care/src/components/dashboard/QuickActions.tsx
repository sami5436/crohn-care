import { Button } from '../ui/Button'
import { PlusCircle, Utensils, Thermometer } from 'lucide-react'

const QuickActions = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Quick Actions</h3>
      <div className="space-y-3">
        <Button className="w-full flex items-center gap-2">
          <Thermometer className="w-4 h-4" />
          Log Symptom
        </Button>
        <Button className="w-full flex items-center gap-2">
          <Utensils className="w-4 h-4" />
          Log Food
        </Button>
        <Button variant="outline" className="w-full flex items-center gap-2 cursor-pointer">
          <PlusCircle className="w-4 h-4" />
          Add Note
        </Button>
      </div>
    </div>
  )
}

export default QuickActions
