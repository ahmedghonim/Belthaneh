import React from 'react'
import useTranslation from 'next-translate/useTranslation'
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
import CollapseTree from './collapse-tree'
import Tool from './tool'

function Toolbar({ open, setOpen }: OpenProps & SetOpenProps) {
  const { t } = useTranslation('common')

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
      icon: <Store />
    },
    {
      label: t('accounting'),
      href: '/admin/accounting',
      icon: <Paper />,
      subMenu: [
        {
          label: t('sales'),
          href: '/admin/accounting'
        },
        {
          label: t('expenses'),
          href: '/admin/accounting/expenses'
        },
        {
          label: t('purchases'),
          href: '/admin/accounting/purchases'
        }
      ]
    },
    {
      label: 'workplace',
      href: '/admin/workplace',
      icon: <Boxes />
    },
    {
      label: 'client',
      href: '/admin/client',
      icon: <Users />,
      subMenu: [
        {
          label: t('clients'),
          href: '/admin/client'
        },
        {
          label: t('comments'),
          href: '/admin/client/comments'
        },
        {
          label: t('chats'),
          href: '/admin/client/chats'
        },
        {
          label: t('messages'),
          href: '/admin/client/messages'
        },
        {
          label: t('forme'),
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
      label: 'service',
      href: '/admin/service',
      icon: <Store />,
      subMenu: [
        {
          label: 'shop_services',
          href: '/admin/service/shop-services'
        },
        {
          label: 'packages',
          href: '/admin/service/packages'
        },
        {
          label: 'memberships',
          href: '/admin/service/memberships'
        }
      ]
    },
    {
      label: 'products',
      href: '/admin/products',
      icon: <Store />,
      subMenu: [
        {
          label: t('products'),
          href: '/admin/products'
        },
        {
          label: t('add_product'),
          href: '/admin/products/add-product'
        }
      ]
    },
    {
      label: 'orders',
      href: '/admin/orders',
      icon: <Store />
    },

    {
      label: 'inventory',
      href: '/admin/inventory/products',
      icon: <Discover />
    }
    // {
    //   label: 'governmental',
    //   href: '/admin/governmental',
    //   icon: <Work />
    // }
  ]

  return (
    <div className="flex flex-col h-full gap-2 overflow-y-auto pe-1.5">
      {tolaBarButton.map((props) =>
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
      )}
    </div>
  )
}

export default Toolbar
