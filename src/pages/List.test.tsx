import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { List } from './List'

describe('list', () => {
  it('renders the list page with items', () => {
    render(
      <MemoryRouter>
        <List />
      </MemoryRouter>,
    )

    expect(screen.getByText('Resource List')).toBeInTheDocument()
    expect(screen.getByText('Browse through our collection of development resources and guides.')).toBeInTheDocument()
    expect(screen.getByText('React Router v7 Guide')).toBeInTheDocument()
    expect(screen.getByText('TypeScript Fundamentals')).toBeInTheDocument()
  })

  it('renders correct number of items', () => {
    render(
      <MemoryRouter>
        <List />
      </MemoryRouter>,
    )

    const viewDetailsLinks = screen.getAllByText('View Details')
    expect(viewDetailsLinks).toHaveLength(6)
  })
})
