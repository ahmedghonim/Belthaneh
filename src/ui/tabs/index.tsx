import { cva, VariantProps } from 'class-variance-authority'
import React from 'react'
import { TabProps } from './types'

export const tab = cva('tab !rounded-full text-dark-100 dark:text-white', {
  variants: {
    isActive: {
      true: 'tab-active'
    },
    primaryBorder: {
      true: '!border-primary-100 border !text-primary-100'
    },
    size: {
      small: 'px-[24px] h-[30px]',
      medium: 'px-[18px] h-[43px] font-bold text-md '
    }
  },
  defaultVariants: {
    size: 'small'
  }
})
export type TabsProps = VariantProps<typeof tab>

interface Props {
  tabs: TabProps[]
  className?: string
}

function Tabs({ tabs, className = '' }: Props & TabsProps) {
  return (
    <div
      className={`tabs tabs-boxed rounded-full  p-2 w-fit gap-3 dark:bg-[#1C1F2D] bg-white ${className}`}
    >
      {tabs.map(({ label, onClick, isActive, primaryBorder, size }) => (
        <span
          key={label}
          onClick={onClick}
          className={tab({ isActive, primaryBorder, size })}
        >
          {label}
        </span>
      ))}
    </div>
  )
}

export default Tabs
