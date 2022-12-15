import React from 'react'
import RouterCard, { RouterCardProps } from './components/router-card'
import UsersIcons from 'svg/users.svg'
import ServicesIcon from 'svg/services.svg'
import CartIcon from 'svg/cart.svg'
import ProgressIcon from 'svg/progress.svg'
import ActionIcon from 'svg/action.svg'
import ListIcon from 'svg/list.svg'

function ReportRouter() {
  const routesArray: RouterCardProps[] = [
    {
      icon: (
        <UsersIcons className="scale-[1.4] ms-1 mt-2 dark:fill-white fill-dark-300" />
      ),
      label: 'employees',
      href: '/admin/reports/employees'
    },
    {
      icon: (
        <CartIcon className="scale-[1.4] ms-1 mt-2 dark:fill-white fill-dark-300" />
      ),
      label: 'products',
      href: '/admin/reports/products'
    },
    {
      icon: <ServicesIcon className="ms-1 dark:fill-white fill-dark-300" />,
      label: 'appointment',
      href: '/admin/reports/services'
    },
    {
      icon: (
        <UsersIcons className="scale-[1.4] ms-1 mt-2 dark:fill-white fill-dark-300" />
      ),
      label: 'clients',
      href: '/admin/reports/clients'
    },
    {
      icon: (
        <ListIcon className="ms-1 scale-[0.8] dark:fill-white fill-dark-300" />
      ),
      label: 'pos',
      href: '/admin/reports/pos'
    },
    {
      icon: (
        <ProgressIcon className="ms-1 mt-2 dark:fill-white fill-dark-300" />
      ),
      label: 'sales',
      href: '/admin/reports/sales'
    },
    {
      icon: <ActionIcon className="ms-1 dark:fill-white fill-dark-300" />,
      label: 'action_lines',
      href: '/admin/reports/action-lines'
    }
  ]
  return (
    <div className="space-y-3 pb-14 xs:pb-20">
      {routesArray.map((data) => (
        <RouterCard key={data.label} {...data} />
      ))}
    </div>
  )
}

export default ReportRouter
