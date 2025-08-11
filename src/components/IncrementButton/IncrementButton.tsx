import { useState } from 'react'

interface IncrementButtonProps {
  count?: number
}

export function IncrementButton(props: IncrementButtonProps) {
  const [count, setCount] = useState(0)

  return (
    <div className="text-center">
      <button
        type="button"
        onClick={() => setCount(count + 1)}
        className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-100 transition-colors duration-200"
      >
        Count is
        {' '}
        {count}
        {props.count}
      </button>
    </div>
  )
}
