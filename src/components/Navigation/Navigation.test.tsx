import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { Navigation } from './Navigation'

// Wrapper component to provide router context for testing
function renderWithRouter(component: React.ReactElement) {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>,
  )
}

describe('navigation', () => {
  it('renders navigation links', () => {
    renderWithRouter(<Navigation />)

    expect(screen.getByTestId('navigation')).toBeInTheDocument()
    expect(screen.getByTestId('nav-brand-link')).toHaveTextContent('React App')
  })

  it('has correct navigation structure', () => {
    renderWithRouter(<Navigation />)

    const nav = screen.getByTestId('navigation')
    expect(nav).toBeInTheDocument()

    const links = screen.getAllByRole('link')
    expect(links.length).toBeGreaterThan(0)
  })

  it('has correct link text and href', () => {
    renderWithRouter(<Navigation />)

    const link = screen.getByTestId('nav-brand-link')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/')
    expect(link).toHaveTextContent('React App')
  })
})
