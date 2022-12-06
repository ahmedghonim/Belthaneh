import { cva } from 'class-variance-authority'
import React from 'react'
import { TabProps } from './types'

const tab = cva('tab !rounded-full', {
  variants: {
    isActive: {
      true: 'tab-active'
    }
  }
})
interface Props {
  tabs: TabProps[]
}

function Tabs({ tabs }: Props) {
  return (
    <div className="tabs tabs-boxed rounded-full p-2 w-fit gap-3 bg-[#1C1F2D]">
      {tabs.map(({ label, onClick, isActive }) => (
        <span key={label} onClick={onClick} className={tab({ isActive })}>
          {label}
        </span>
      ))}
    </div>
  )
}

export default Tabs
