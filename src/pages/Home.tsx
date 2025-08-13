import { Link } from 'react-router-dom'
import { IncrementButton } from '../components/IncrementButton'

export function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
      <main className="text-center">
        <h1 className="text-4xl font-bold text-white mb-8">Welcome to React Router v7</h1>
        <p className="text-xl text-white mb-8">
          Explore our comprehensive collection of development resources
        </p>
        <div className="space-y-4">
          <IncrementButton />
          <div>
            <Link
              to="/list"
              className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium"
            >
              Browse Resources
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
