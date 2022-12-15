import React from 'react'
import { cva, VariantProps } from 'class-variance-authority'

const button = cva(
  'bg-white p-3 dark:text-white px-7 text-black rounded-lg text-md flex gap-3 duration-300 items-center disabled:opacity-25',
  {
    variants: {
      primary: {
        true: '!bg-primary-100 !text-white  disabled:!opacity-25'
      },
      primaryBorder: {
        true: '!border-primary-100 border !bg-transparent !text-primary-100'
      },
      secondary: {
        true: 'dark:!bg-secondary-200 !bg-secondary-100 border-2  dark:!border-secondary-100 !border-secondary-100 !text-white',
        light:
          'bg-secondary-100 border-2  dark:!border-secondary-100 !border-secondary-100 !text-white'
      },
      secondaryBorder: {
        true: '!border-secondary-100 border-2 dark:!text-white text-black hover:!bg-secondary-200  !bg-transparent'
      },
      fullWidth: {
        true: 'w-full flex-1'
      },
      center: {
        true: 'justify-center'
      },
      rounded: {
        full: '!rounded-full'
      },
      size: {
        xSmall: ['[&>span]:text-sm', 'px-2', 'py-1', 'h-fit'],
        small: ['[&>span]:text-sm', 'px-2', 'py-2', 'h-fit'],
        medium: ['[&>span]:text-md', 'h-10', 'px-3'],
        large: '[&>span]:text-base h-12 font-bold'
      }
    },
    defaultVariants: {
      size: 'medium'
    }
  }
)
export type ButtonProps = VariantProps<typeof button>

interface Props {
  onClick?: () => void
  form?: boolean
  type?: 'button' | 'submit' | 'reset'
  className?: CSSStyleSheet | any
  children?: React.ReactNode | any
  disabled?: boolean
  id?: string
}

function Button({
  onClick,
  primary,
  primaryBorder,
  className,
  children,
  secondary,
  fullWidth,
  size,
  rounded,
  center,
  type,
  secondaryBorder,
  disabled
}: Props & ButtonProps) {
  return (
    <button
      className={button({
        className,
        primary,
        primaryBorder,
        rounded,
        secondary,
        fullWidth,
        center,
        secondaryBorder,
        size
      })}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
