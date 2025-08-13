import { Link } from 'react-router-dom'

interface NavigationButtonsProps {
  currentId: number
  totalItems: number
  basePath: string
}

export function NavigationButtons({ currentId, totalItems, basePath }: NavigationButtonsProps) {
  return (
    <div className="flex space-x-4">
      {currentId > 1 && (
        <Link
          to={`${basePath}/${currentId - 1}`}
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

      {currentId < totalItems && (
        <Link
          to={`${basePath}/${currentId + 1}`}
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
  )
}
