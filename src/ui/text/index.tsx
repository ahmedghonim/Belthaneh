import { cva, VariantProps } from 'class-variance-authority'
import React from 'react'
const text = cva(['dark:text-[#fff]', 'text-[#1A0A0A]'], {
  variants: {
    secondary: {
      light: '!text-secondary-100'
    },
    white: {
      true: '!text-white'
    },
    danger: {
      true: '!text-error-200'
    },
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-md',
      base: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl'
    }
  },
  defaultVariants: {
    size: 'base'
  }
})

interface Props
  extends VariantProps<typeof text>,
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLSpanElement>,
      HTMLSpanElement
    > {
  children: string | React.ReactNode
  as?: React.ElementType
  className?: string
}

function Text({ className, children, as, ...props }: Props) {
  const Component = as ?? 'span'
  return (
    <Component className={text({ className, ...props })}>{children}</Component>
  )
}

export default Text
