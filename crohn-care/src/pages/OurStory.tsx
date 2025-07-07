const OurStory = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50 dark:from-gray-900 dark:via-emerald-900/10 dark:to-blue-900/10">
      <section className="max-w-3xl mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl font-extrabold mb-10 bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 dark:from-emerald-400 dark:via-teal-400 dark:to-blue-400 bg-clip-text text-transparent">
          Why We Built CrohnCare
        </h2>

        <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 leading-relaxed">
          My brother was diagnosed with Crohn’s disease in his early age. Watching him struggle through food uncertainty, flare-ups, and emotional burnout made something clear: managing a chronic condition shouldn’t be this overwhelming.
        </p>

        <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 leading-relaxed">
          We built CrohnCare to empower people like him — with intelligent tracking, meaningful insights, and support that learns with you. It's not just an app. It’s the tool we wish he had from the beginning.
        </p>

        <div className="italic text-gray-500 dark:text-gray-400 max-w-md mx-auto mt-12">
          “We believe that personalized care starts with understanding. One log at a time.”
        </div>
        <p className="text-sm text-gray-400 mt-2">– The CrohnCare Team</p>
      </section>
    </div>
  )
}

export default OurStory
