import React from 'react'
import { SetOpenProps } from '../Types'
import MobileMenu from './mobile-menu'
import PageTitle from './page-title'
import UserAccess from './user-access'

export default function Header({ setOpen }: SetOpenProps) {
  return (
    <div>
      <div className="flex justify-end sm:pt-[35px] sm:pb-[20px] sm:pe-9 sm:ps-3 py-[27px] px-[21px] dark:bg-dark-100 bg-light-200 xs:bg-white">
        <MobileMenu setOpen={setOpen} />
        <div className="xs:hidden flex-1">
          <PageTitle />
        </div>
        <UserAccess />
      </div>
      <div className="sm:hidden ps-5 flex-1 dark:bg-dark-100 bg-light-200">
        <PageTitle />
      </div>
    </div>
  )
}
