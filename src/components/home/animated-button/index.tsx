import React from 'react'
import { Button } from 'ui'

function AnimatedButton({
  text,
  className,
  font = '',
  type = 'button'
}: {
  text: string
  className: string
  font?: string
  type?: 'button' | 'submit' | 'reset'
}) {
  return (
    <Button
      primary
      type={type}
      size="large"
      className={`flex justify-center items-center overflow-hidden duration-200 relative [&:hover>div]:w-full ${className}`}
    >
      <span className={`text-xs relative z-20 ${font}`}>{text}</span>
      <div className="absolute left-0 top-0 w-[0%] h-full bg-secondary-100 z-10 duration-500"></div>
    </Button>
  )
}

export default AnimatedButton
