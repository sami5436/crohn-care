import { Brain, Filter, BarChart4 } from 'lucide-react'

const phases = [
  {
    title: 'LLM Foundation',
    description:
      'We began with a natural language model interface so users could describe their symptoms and receive structured tracking in return.',
    icon: Brain,
  },
  {
    title: 'Hybrid Reasoning',
    description:
      'We layered logic-based filtering on top of LLMs to improve accuracy and begin associating patterns between symptoms and food/environment.',
    icon: Filter,
  },
  {
    title: 'ML Intelligence',
    description:
      'Today, our backend supports ML-powered insights to offer predictions, trends, and recommendations personalized to each user.',
    icon: BarChart4,
  },
]

const OurStory = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50 dark:from-gray-900 dark:via-emerald-900/20 dark:to-blue-900/20">
      <section className="max-w-4xl mx-auto px-4 py-20">
        <h2 className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 dark:from-emerald-400 dark:via-teal-400 dark:to-blue-400 bg-clip-text text-transparent">
          Our Mission
        </h2>

        <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-16 leading-relaxed">
          CrohnCare was born out of a simple but powerful idea: to give people with Crohn’s Disease more control, clarity, and confidence in their daily health decisions.
          What started as a symptom tracker evolved into a full-fledged intelligent assistant.
        </p>

        <div className="relative border-l-2 border-emerald-400 dark:border-emerald-600 ml-4">
          {phases.map((phase, index) => (
            <div key={index} className="relative pl-10 pb-12 group">
              <span className="absolute -left-[22px] top-1.5 w-4 h-4 bg-emerald-500 dark:bg-emerald-400 rounded-full border-4 border-white dark:border-gray-900 shadow-md"></span>

              <div className="flex items-center gap-4 mb-2">
                <phase.icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{phase.title}</h3>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                {phase.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <blockquote className="italic text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            "CrohnCare exists because managing Crohn’s should feel empowering — not overwhelming."
          </blockquote>
          <p className="mt-2 text-sm text-gray-400">– The CrohnCare Team</p>
        </div>
      </section>
    </div>
  )
}

export default OurStory
