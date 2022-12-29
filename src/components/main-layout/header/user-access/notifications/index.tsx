import React from 'react'
import Dropdown, { Options } from 'ui/dropdown'
import Bell from 'svg/bell.svg'

function Notifications() {
  const notificationsList: Options[] = [
    {
      label: 'notification 1'
    },
    {
      label: 'notification 2'
    },
    {
      label: 'notification 3'
    }
  ]

  return (
    <Dropdown
      icon={<Bell className="stroke-[#797979E0] dark:stroke-[#ffff]" />}
      options={notificationsList}
    />
  )
}

export default Notifications
