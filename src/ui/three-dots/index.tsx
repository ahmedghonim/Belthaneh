import React from 'react'
import Circle from 'svg/circle.svg'

interface Props {
  onClick: () => void
}

function ThreeDots({ onClick }: Props) {
  return (
    <button
      className="flex flex-col items-center justify-center gap-1"
      onClick={onClick}
    >
      <Circle className="scale-125 fill-black dark:fill-light-200" />
      <Circle className="scale-125 fill-black dark:fill-light-200" />
      <Circle className="scale-125 fill-black dark:fill-light-200" />
    </button>
  )
}

export default ThreeDots
