import * as React from 'react'
import Avatar from 'ui/avatar'
import Toggle from 'ui/toggle'
import salonImg from 'images/salon.png'

export interface SalonInfoCardProps {
  img: string
  name: string
  description: string
  checked: boolean
  handleToggle: () => void
}

export function SalonInfoCard({
  name,
  img,
  description,
  checked,
  handleToggle
}: SalonInfoCardProps) {
  return (
    <div className="flex justify-between px-5 py-4 shadow rounded-lg bg-white dark:bg-dark-200">
      <div className="flex items-center space-x-5">
        <Avatar src={img ?? salonImg} alt={name} className="!w-10" />
        <div className="flex flex-col items-center">
          <span>{name ?? ''}</span>
          <span>{description ?? ''}</span>
        </div>
      </div>
      <Toggle
        name={'accountStatus'}
        checked={checked}
        onChange={handleToggle}
      />
    </div>
  )
}
