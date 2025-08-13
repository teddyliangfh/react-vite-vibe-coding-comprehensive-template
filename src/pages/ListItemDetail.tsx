import { Navigate, useParams } from 'react-router-dom'
import { ResourceDetail } from '../components/ResourceDetail'
import { getAllResources, getResourceById } from '../data/mockResources'

export function ListItemDetail() {
  const { id } = useParams<{ id: string }>()

  // Find the item by ID
  const resource = getResourceById(Number(id))
  const allResources = getAllResources()

  // If item not found, redirect to 404
  if (!resource) {
    return <Navigate to="/404" replace />
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <ResourceDetail resource={resource} totalResources={allResources.length} />
    </div>
  )
}
