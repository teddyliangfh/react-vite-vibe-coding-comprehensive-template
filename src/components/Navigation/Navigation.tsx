import { NavLink } from 'react-router-dom'

export function Navigation() {
  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="text-white text-xl font-bold hover:text-gray-300 transition-colors">
              React App
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}
