import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { Menu, X, User } from 'lucide-react'
import { Button } from '../ui/Button'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    { label: 'Our Story', to: '/our-story' },
    { label: 'Our Product', to: '/product' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Left: Logo */}
        <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
          CrohnCare
        </Link>

        {/* Right: Nav + Auth */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-emerald-600 ${
                  isActive ? 'text-emerald-600' : 'text-gray-700 dark:text-gray-300'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <SignedOut>
            <Link to="/sign-in" title="Sign In">
              <div className="p-2 rounded-full border border-gray-300 dark:border-gray-600 hover:border-emerald-500 transition-all">
                <User className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </div>
            </Link>
          </SignedOut>

          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-200"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 bg-white dark:bg-gray-900 border-t dark:border-gray-800">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block text-sm font-medium hover:text-emerald-600 ${
                  isActive ? 'text-emerald-600' : 'text-gray-700 dark:text-gray-200'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <SignedOut>
            <Link to="/sign-in" onClick={() => setMenuOpen(false)} title="Sign In">
              <div className="inline-flex items-center gap-2 mt-3 text-gray-700 dark:text-gray-200 hover:text-emerald-600">
                <User className="w-5 h-5" />
                <span className="text-sm">Sign In</span>
              </div>
            </Link>
          </SignedOut>

          <SignedIn>
            <div className="mt-3">
              <UserButton afterSignOutUrl="/" />
            </div>
          </SignedIn>
        </div>
      )}
    </header>
  )
}

export default Navbar
