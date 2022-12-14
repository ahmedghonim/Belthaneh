import React from 'react'
import { OpenProps, SetOpenProps } from '../../Types'
import Home from 'svg/home.svg'
import Calender from 'svg/calender.svg'
import Scan from 'svg/scan.svg'
import Store from 'svg/store.svg'
import Paper from 'svg/paper.svg'
import Boxes from 'svg/boxes.svg'
import Discover from 'svg/discover.svg'
import Chart from 'svg/chart.svg'
import Users from 'svg/users.svg'
import Setting from 'svg/setting.svg'
import LogOut from 'svg/logout.svg'
import CollapseTree from './collapse-tree'
import Tool from './tool'
import useScreen from 'hooks/useScreen'

function Toolbar({ open, setOpen }: OpenProps & SetOpenProps) {
  const screen = useScreen()
  const tolaBarButton = [
    {
      label: 'dashboard',
      href: '/admin/dashboard',
      icon: <Home />
    },
    {
      label: 'booking',
      href: '/admin/booking',
      icon: <Calender />
    },
    {
      label: 'pos',
      href: '/admin/pos',
      icon: <Scan />
    },
    {
      label: 'store',
      href: '/admin/store',
      icon: <Store />,
      subMenu: [
        {
          label: 'over_view',
          href: '/admin/store'
        },
        {
          label: 'orders',
          href: '/admin/store/orders'
        },
        {
          label: 'products',
          href: '/admin/store/products'
        }
      ]
    },
    {
      label: 'accounting',
      href: '/admin/accounting',
      icon: <Paper />,
      subMenu: [
        {
          label: 'sales',
          href: '/admin/accounting'
        },
        {
          label: 'expenses',
          href: '/admin/accounting/expenses'
        },
        {
          label: 'purchases',
          href: '/admin/accounting/purchases'
        }
      ]
    },
    {
      label: 'workplace',
      href: '/admin/workplace/services',
      icon: <Boxes />,
      subMenu: [
        {
          label: 'services',
          href: '/admin/workplace/services'
        },
        {
          label: 'inventory',
          href: '/admin/workplace/inventory'
        },
        {
          label: 'employees',
          href: '/admin/workplace/employees'
        }
      ]
    },
    {
      label: 'client',
      href: '/admin/client',
      icon: <Users />,
      subMenu: [
        {
          label: 'clients',
          href: '/admin/client'
        },
        {
          label: 'comments',
          href: '/admin/client/comments'
        },
        {
          label: 'chats',
          href: '/admin/client/chats'
        },
        {
          label: 'messages',
          href: '/admin/client/messages'
        },
        {
          label: 'forme',
          href: '/admin/client/forme'
        }
      ]
    },
    {
      label: 'online',
      href: '/admin/online',
      icon: <Discover />
    },
    {
      label: 'reports',
      href: '/admin/reports',
      icon: <Chart />
    },
    {
      label: 'setting',
      href: '/admin/setting',
      icon: <Setting />
    },
    {
      label: 'logout',
      href: '/login',
      icon: <LogOut />
    }
  ]

  const tabsDisableInMobile = (label: string): boolean => {
    if (screen === 'phone') {
      return ['store', 'booking'].includes(label)
    }
    if (screen === 'desktop' || screen === 'tablet') {
      return ['logout', 'setting'].includes(label)
    }
    return false
  }
  console.log(tabsDisableInMobile('booking'))

  return (
    <div className="flex flex-col h-full gap-2 overflow-y-auto pe-1.5">
      {tolaBarButton.map((props) =>
        !tabsDisableInMobile(props.label) ? (
          props?.subMenu == null ? (
            <Tool key={props.href} toggle={open} {...props} setOpen={setOpen} />
          ) : (
            <CollapseTree
              key={props.href}
              open={open}
              {...props}
              setOpen={setOpen}
            />
          )
        ) : null
      )}
    </div>
  )
}

export default Toolbar
