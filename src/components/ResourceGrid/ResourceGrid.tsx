import type { ResourceListItem } from '../../types/resource'
import { Link } from 'react-router-dom'

interface ResourceGridProps {
  resources: ResourceListItem[]
}

export function ResourceGrid({ resources }: ResourceGridProps) {
  if (resources.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No items found.</p>
      </div>
    )
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {resources.map(resource => (
        <div
          key={resource.id}
          className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
        >
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              {resource.title}
            </h2>
            <p className="text-gray-600 mb-4 line-clamp-3">
              {resource.description}
            </p>
            <Link
              to={`/list/${resource.id}`}
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              View Details
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}
