import React, { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div className="flex gap-2 items-center">
      <button
        className="bg-primary-100 rounded-full w-8 h-8"
        onClick={() => setCount((prev) => (prev !== 0 ? --prev : 0))}
      >
        -
      </button>
      <div data-testid="counter">{count}</div>
      <button
        className="bg-primary-100 rounded-full w-8 h-8"
        onClick={() => setCount((prev) => ++prev)}
      >
        +
      </button>
    </div>
  )
}

export default Counter
