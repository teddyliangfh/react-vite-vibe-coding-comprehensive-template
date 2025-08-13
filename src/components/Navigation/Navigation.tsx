import { NavLink } from 'react-router-dom'

export function Navigation() {
  return (
    <nav className="bg-gray-800 shadow-lg" data-testid="navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <NavLink
              to="/"
              className="text-white text-xl font-bold hover:text-gray-300 transition-colors"
              data-testid="nav-brand-link"
            >
              React App
            </NavLink>
          </div>

          <div className="flex items-center space-x-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive ? 'bg-gray-900 text-white' : ''
                }`}
            >
              Home
            </NavLink>
            <NavLink
              to="/list"
              className={({ isActive }) =>
                `text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive ? 'bg-gray-900 text-white' : ''
                }`}
            >
              Resources
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}
