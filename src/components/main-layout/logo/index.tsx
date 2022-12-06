import React from 'react'
import { OpenProps } from '../Types'
import LogoIcon from 'svg/logo.svg'
import WarshicText from 'svg/text-logo.svg'

function Logo({ open }: OpenProps) {
  return (
    <div
      className={`${
        open ? 'sm:pt-6' : 'flex-col sm:pb-7'
      } flex items-center gap-3 sm:justify-center`}
    >
      <div className={`${!open ? 'scale-0' : ''} duration-300`}>
        <WarshicText className="fill-primary-100 dark:fill-white" />
      </div>

      <LogoIcon className="fill-primary-100 dark:fill-white" />
    </div>
  )
}

export default Logo
