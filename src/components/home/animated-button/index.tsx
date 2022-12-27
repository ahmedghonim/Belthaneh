import React from 'react'
import { Button } from 'ui'

function AnimatedButton({
  text,
  className
}: {
  text: string
  className: string
}) {
  return (
    <Button
      primary
      className={`flex justify-center items-center overflow-hidden duration-200 relative [&:hover>div]:w-full ${className}`}
    >
      <span className="text-xs relative z-20">{text}</span>
      <div className="absolute left-0 top-0 w-[0%] h-full bg-secondary-100 z-10 duration-500"></div>
    </Button>
  )
}

export default AnimatedButton
