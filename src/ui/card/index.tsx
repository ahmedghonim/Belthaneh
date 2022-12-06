import { cva, VariantProps } from 'class-variance-authority'
import React from 'react'

const card = cva('dark:bg-dark-200 bg-white rounded-md p-3 flex-1', {
  variants: {}
})
interface CardWonProps {
  children: React.ReactNode
  className?: string
}

function Card({
  children,
  className
}: CardWonProps & VariantProps<typeof card>) {
  return <div className={card({ className })}>{children}</div>
}

export default Card
