import { Link } from 'react-router-dom'
import { Github } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600 dark:text-gray-400">
        <p className="mb-4 sm:mb-0">
          © {new Date().getFullYear()} <span className="font-semibold">CrohnCare</span>. All rights reserved.
        </p>

        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-sm">
          <a
            href="https://github.com/sami5436/crohn-care"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-emerald-600 transition-colors"
          >
            <Github className="h-4 w-4 mr-1" />
            GitHub
          </a>
          <Link to="/contact" className="hover:text-emerald-600 transition-colors">
            Contact Us
          </Link>
          <span className="italic text-xs text-gray-500 dark:text-gray-500">
            Your data is private and never shared.
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
