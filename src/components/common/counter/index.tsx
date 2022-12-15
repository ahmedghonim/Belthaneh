import React from 'react'
import { Button } from 'ui'

interface CounterProps {
  value: number
  onRemove: () => void
  onAdd: () => void
}
export default function Counter({ value, onAdd, onRemove }: CounterProps) {
  return (
    <div className="flex gap-2">
      <Button
        primary
        onClick={onRemove}
        className="justify-center rounded-[50%] !p-0 w-[24px] h-[24px]"
      >
        -
      </Button>
      {value}
      <Button
        primary
        onClick={onAdd}
        className="justify-center rounded-[50%] !p-0 w-[24px] h-[24px]"
      >
        +
      </Button>
    </div>
  )
}
