import React from 'react'
import EmployeeSideMenuListSlider from './menu-list-slider-mobile'
import Booking from 'svg/employee-booking.svg'
import Certificate from 'svg/certificate.svg'
import Offense from 'svg/offense.svg'
import Salary from 'svg/salary.svg'
import Absence from 'svg/absence.svg'
import Permissions from 'svg/permissions.svg'
import Commission from 'svg/commission.svg'
import Custody from 'svg/custody.svg'
import Attendance from 'svg/attendance.svg'
import { MenuListItemProps } from './types'
import MenuListWebView from './menu-list-web-view'
import { useRouter } from 'next/router'

function EmployeeSideMenu() {
  const { asPath } = useRouter()
  const isActive = (path: string): boolean =>
    asPath.split('/').reverse()[0] === path

  // list items
  const listItems: MenuListItemProps[] = [
    {
      href: 'total-booking',
      icon: Booking,
      isActive: isActive('total-booking')
    },
    {
      href: 'certificates',
      icon: Certificate,
      isActive: isActive('certificates')
    },
    {
      href: 'offense',
      icon: Offense,
      isActive: isActive('offense')
    },
    {
      href: 'salary',
      icon: Salary,
      isActive: isActive('salary')
    },
    {
      href: 'absence',
      icon: Absence,
      isActive: isActive('absence')
    },
    {
      href: 'permissions',
      icon: Permissions,
      isActive: isActive('permissions')
    },
    {
      href: 'commissions',
      icon: Commission,
      isActive: isActive('commissions')
    },
    {
      href: 'custody',
      icon: Custody,
      isActive: isActive('custody')
    },
    {
      href: 'attendance',
      icon: Attendance,
      isActive: isActive('attendance')
    }
  ]

  return (
    <section>
      <div className="xs:hidden">
        <MenuListWebView listItems={listItems} />
      </div>
      <div className="sm:hidden py-2 px-1">
        <EmployeeSideMenuListSlider listItems={listItems} />
      </div>
    </section>
  )
}

export default EmployeeSideMenu
