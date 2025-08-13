import type { Resource } from '../../types/resource'
import { Link } from 'react-router-dom'
import { Breadcrumb } from '../Breadcrumb'

interface ResourceDetailProps {
  resource: Resource
  totalResources: number
}

export function ResourceDetail({ resource, totalResources }: ResourceDetailProps) {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'List', href: '/list' },
    { label: resource.title },
  ]

  return (
    <div className="max-w-4xl mx-auto px-4">
      <Breadcrumb items={breadcrumbItems} />

      {/* Main Content */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-8">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {resource.title}
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              {resource.description}
            </p>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
              <span>
                By
                {' '}
                {resource.author}
              </span>
              <span>•</span>
              <span>
                Published
                {' '}
                {new Date(resource.publishedDate).toLocaleDateString()}
              </span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {resource.tags.map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed">
              {resource.content}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-8 flex justify-between">
        <Link
          to="/list"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
        >
          <svg
            className="mr-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to List
        </Link>

        <div className="flex space-x-4">
          {resource.id > 1 && (
            <Link
              to={`/list/${resource.id - 1}`}
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              <svg
                className="mr-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Previous
            </Link>
          )}

          {resource.id < totalResources && (
            <Link
              to={`/list/${resource.id + 1}`}
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              Next
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
          )}
        </div>
      </div>
    </div>
  )
}
