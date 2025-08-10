import { useState } from 'react'
import './IncrementButton.css'

interface IncrementButtonProps {
  initialValue?: number
  className?: string
  'aria-label'?: string
}

const DEFAULT_INITIAL_VALUE = 0

export function IncrementButton({ 
  initialValue = DEFAULT_INITIAL_VALUE,
  className = '',
  'aria-label': ariaLabel = 'Increment count'
}: IncrementButtonProps) {
  const [count, setCount] = useState(initialValue)

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1)
  }

  return (
    <button 
      className={`increment-button ${className}`.trim()}
      onClick={handleIncrement}
      aria-label={ariaLabel}
      type="button"
    >
      {count}
    </button>
  )
}
