import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { Link } from 'react-router-dom'
import { ClipboardList, BookOpen, Brain, BarChart3 } from 'lucide-react'

const features = [
  {
    icon: <ClipboardList className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />,
    title: 'Symptom Tracker',
    description: 'Log and review your symptoms easily to identify patterns over time.',
  },
  {
    icon: <BookOpen className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />,
    title: 'Food Journal',
    description: 'Track meals, ingredients, and triggers that may affect your condition.',
  },
  {
    icon: <Brain className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />,
    title: 'ML-Powered Insights',
    description: 'Receive intelligent suggestions and correlations based on your data.',
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />,
    title: 'Analytics Dashboard',
    description: 'Visualize your trends with clean, interactive graphs and summaries.',
  },
]

const OurProduct = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50 dark:from-gray-900 dark:via-emerald-900/20 dark:to-blue-900/20">
      <section className="flex-grow max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 dark:from-emerald-400 dark:via-teal-400 dark:to-blue-400 bg-clip-text text-transparent">
          What You Get with CrohnCare
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {features.map((feat) => (
            <Card
              key={feat.title}
              className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {feat.icon}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{feat.title}</h3>
                <p className="text-gray-700 dark:text-gray-400">{feat.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/sign-up">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0 cursor-pointer"
            >
              Try It Live
              <span className="ml-2">→</span>
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}


export default OurProduct
