import { cva } from 'class-variance-authority'
import React from 'react'

interface Props {
  children: React.ReactNode
  className?: string
}

const cardStyle = cva(
  'dark:bg-dark-200 bg-white rounded-lg transition ease-in-out'
)
function RoundedBox({ children, className }: Props) {
  return <div className={cardStyle({ className })}>{children}</div>
}

export default RoundedBox
