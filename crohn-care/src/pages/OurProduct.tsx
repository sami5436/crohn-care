import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { Link } from 'react-router-dom'
import { ClipboardList, BookOpen, Brain, BarChart3, LineChart, BarChart4, ArrowRight } from 'lucide-react'

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

const phases = [
  {
    title: 'LLM-Powered Start',
    subtitle: 'Days 1–30',
    icon: <Brain className="w-6 h-6 text-white" />,
    color: 'from-emerald-500 to-emerald-600',
    label: 'Early insights from logs + medical research',
    description:
      'You begin tracking meals, symptoms, and lifestyle context. CrohnCare uses a large language model (LLM) to provide preliminary insights based on general medical knowledge — not yet personalized.',
  },
  {
    title: 'Pattern Recognition',
    subtitle: 'Days 31–90',
    icon: <LineChart className="w-6 h-6 text-white" />,
    color: 'from-teal-500 to-teal-600',
    label: 'Correlations between food & flares emerge',
    description:
      'As more data accumulates, CrohnCare starts recognizing consistent patterns. It links certain foods or conditions to symptoms using simple correlation logic + LLM support.',
  },
  {
    title: 'ML Personalization',
    subtitle: 'Day 91+',
    icon: <BarChart4 className="w-6 h-6 text-white" />,
    color: 'from-blue-500 to-blue-600',
    label: 'Predictions tailored to you',
    description:
      'At this stage, a machine learning model trained on your personal data powers symptom forecasts, risk scores, and daily recommendations with high confidence.',
  },
]

const OurProduct = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50 dark:from-gray-900 dark:via-emerald-900/20 dark:to-blue-900/20">
      <section className="flex-grow max-w-6xl mx-auto px-4 py-20">
        {/* Title */}
        <h2 className="text-4xl font-extrabold text-center mb-16 bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 dark:from-emerald-400 dark:via-teal-400 dark:to-blue-400 bg-clip-text text-transparent">
          Everything You Get with CrohnCare
        </h2>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mb-24">
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

        {/* Phases Flowchart */}
        <h3 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">How CrohnCare Evolves With You</h3>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-4 mb-20">
          {phases.map((phase, index) => (
            <div key={index} className="flex items-center gap-4 lg:gap-6">
              <div className={`rounded-xl p-6 w-[260px] h-[200px] flex flex-col justify-between bg-gradient-to-br ${phase.color} text-white shadow-lg`}>
                <div className="flex items-center gap-2">
                  {phase.icon}
                  <div>
                    <h3 className="text-md font-bold">{phase.title}</h3>
                    <p className="text-xs opacity-80">{phase.subtitle}</p>
                  </div>
                </div>
                <div className="mt-4 text-sm opacity-90 leading-snug">{phase.label}</div>
              </div>
              {index < phases.length - 1 && (
                <div className="hidden lg:block">
                  <ArrowRight className="w-6 h-6 text-emerald-500 dark:text-emerald-400" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Descriptions */}
        <div className="grid gap-12 max-w-4xl mx-auto mb-16">
          {phases.map((phase, index) => (
            <div key={index}>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {phase.title} <span className="text-sm text-gray-500 dark:text-gray-400">({phase.subtitle})</span>
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">{phase.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
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
