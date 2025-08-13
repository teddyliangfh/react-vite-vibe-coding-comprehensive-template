import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { ListItemDetail } from './ListItemDetail'

describe('listItemDetail', () => {
  it('renders item details for valid ID', () => {
    render(
      <MemoryRouter initialEntries={['/list/1']}>
        <Routes>
          <Route path="/list/:id" element={<ListItemDetail />} />
        </Routes>
      </MemoryRouter>,
    )

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('React Router v7 Guide')
    expect(screen.getByText('Complete guide to React Router v7 features and best practices')).toBeInTheDocument()
    expect(screen.getByText(text => text.includes('By') && text.includes('React Team'))).toBeInTheDocument()
  })

  it('renders navigation breadcrumbs', () => {
    render(
      <MemoryRouter initialEntries={['/list/1']}>
        <Routes>
          <Route path="/list/:id" element={<ListItemDetail />} />
        </Routes>
      </MemoryRouter>,
    )

    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('List')).toBeInTheDocument()
  })

  it('renders tags for the item', () => {
    render(
      <MemoryRouter initialEntries={['/list/1']}>
        <Routes>
          <Route path="/list/:id" element={<ListItemDetail />} />
        </Routes>
      </MemoryRouter>,
    )

    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('Routing')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
  })
})
