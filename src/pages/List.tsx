import { ResourceGrid } from '../components/ResourceGrid'
import { getAllResourceListItems } from '../data/mockResources'

export function List() {
  const resources = getAllResourceListItems()

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Resource List</h1>
          <p className="text-gray-600">
            Browse through our collection of development resources and guides.
          </p>
        </div>

        <ResourceGrid resources={resources} />
      </div>
    </div>
  )
}
