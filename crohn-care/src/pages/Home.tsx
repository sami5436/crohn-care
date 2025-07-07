import { Link } from 'react-router-dom'
import { Button } from '../components/ui/Button'

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50 dark:from-gray-900 dark:via-emerald-900/20 dark:to-blue-900/20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 py-20 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-emerald-200 to-teal-200 dark:from-emerald-600/30 dark:to-teal-600/30 rounded-full blur-2xl opacity-60 animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 bg-gradient-to-br from-blue-200 to-indigo-200 dark:from-blue-600/30 dark:to-indigo-600/30 rounded-full blur-xl opacity-50 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-teal-300 to-emerald-300 dark:from-teal-500/40 dark:to-emerald-500/40 rounded-full blur-lg opacity-40 animate-bounce"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-100 dark:bg-emerald-900/50 rounded-full text-emerald-800 dark:text-emerald-200 text-sm font-medium mb-8 border border-emerald-200 dark:border-emerald-700">
            <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></span>
            Your Health Journey Starts Here
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 dark:from-emerald-400 dark:via-teal-400 dark:to-blue-400 bg-clip-text text-transparent mb-8 leading-tight">
            Track. Understand. 
            <br />
            <span className="text-gray-900 dark:text-white">Thrive.</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-12 leading-relaxed font-light">
            CrohnCare empowers you to monitor symptoms, optimize your diet, and discover what truly works for your body—powered by intelligent insights and compassionate care.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/product" className="group">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0 cursor-pointer"
              >
                Learn More
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Button>
            </Link>
            <Link to="/dashboard" className="group">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-emerald-500 dark:hover:border-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-400 px-8 py-4 text-lg font-semibold bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 cursor-pointer"
              >
                Try Live Demo
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">↗</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20 px-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Everything you need to manage your health
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Comprehensive tools designed specifically for inflammatory bowel disease management
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "📊",
                title: "Smart Tracking",
                description: "Monitor symptoms, food intake, and medication with intelligent pattern recognition"
              },
              {
                icon: "🍎",
                title: "Dietary Insights",
                description: "Discover trigger foods and optimize your diet with personalized recommendations"
              },
              {
                icon: "🧠",
                title: "AI-Powered Analysis",
                description: "Get meaningful insights from your data to make informed health decisions"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-700 dark:to-teal-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to take control of your health?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Join others who are already using CrohnCare to manage their IBD journey with confidence.
          </p>
          <Link to="/dashboard">
            <Button 
              size="lg" 
              className="bg-black text-emerald-600 hover:bg-gray-600 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0 cursor-pointer"
            >
              Start Your Journey Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home