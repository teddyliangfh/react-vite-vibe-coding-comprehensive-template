import { fireEvent, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'
import { IncrementButton } from './IncrementButton'

describe('incrementButton', () => {
  beforeEach(() => {
    // Reset any mocks or setup before each test
  })

  describe('rendering', () => {
    it('renders with initial count of 0', () => {
      render(<IncrementButton />)
      expect(screen.getByTestId('count-display')).toHaveTextContent('0')
    })

    it('displays correct button text', () => {
      render(<IncrementButton />)
      expect(screen.getByTestId('increment-button')).toBeInTheDocument()
      expect(screen.getByTestId('count-display')).toHaveTextContent('0')
    })

    it('accepts initial count prop', () => {
      render(<IncrementButton count={5} />)
      // The component shows both state count (0) and prop count (5)
      expect(screen.getByTestId('count-display')).toHaveTextContent('0')
      expect(screen.getByTestId('prop-count')).toHaveTextContent('5')
    })

    it('does not show prop count when not provided', () => {
      render(<IncrementButton />)
      expect(screen.queryByTestId('prop-count')).not.toBeInTheDocument()
    })
  })

  describe('user Interactions', () => {
    it('increments count when clicked', () => {
      render(<IncrementButton />)
      const button = screen.getByTestId('increment-button')

      fireEvent.click(button)
      expect(screen.getByTestId('count-display')).toHaveTextContent('1')

      fireEvent.click(button)
      expect(screen.getByTestId('count-display')).toHaveTextContent('2')
    })

    it('handles multiple rapid clicks', () => {
      render(<IncrementButton />)
      const button = screen.getByTestId('increment-button')

      // Click multiple times rapidly
      fireEvent.click(button)
      fireEvent.click(button)
      fireEvent.click(button)

      expect(screen.getByTestId('count-display')).toHaveTextContent('3')
    })
  })

  describe('edge Cases', () => {
    it('handles zero count correctly', () => {
      render(<IncrementButton />)
      expect(screen.getByTestId('count-display')).toHaveTextContent('0')
    })

    it('maintains button accessibility', () => {
      render(<IncrementButton />)
      const button = screen.getByTestId('increment-button')

      expect(button).toHaveAttribute('type', 'button')
      expect(button).toBeEnabled()
    })
  })
})
