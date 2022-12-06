import React from 'react'
import Home from 'svg/home.svg'
import Store from 'svg/store.svg'
import Calender from 'svg/calender.svg'
import User from 'svg/circle_user.svg'
import RoutingButton from './routing-button'

function MobileFooterBar() {
  return (
    <div className="absolute text-xs h-[70px] left-2 right-2 dark:bg-dark-200 bg-white bottom-0 sm:hidden flex items-center justify-around rounded-full">
      <RoutingButton
        label="home"
        href="/admin/dashboard"
        icon={Home}
        className="scale-150"
      />

      <RoutingButton
        label="booking"
        href="/admin/booking"
        icon={Calender}
        className="scale-150"
      />

      <RoutingButton
        label="store"
        href="/admin/store"
        icon={Store}
        className="scale-150"
      />

      <RoutingButton
        label="setting"
        href="/admin/setting"
        icon={User}
        className="scale-125"
      />
    </div>
  )
}

export default MobileFooterBar
