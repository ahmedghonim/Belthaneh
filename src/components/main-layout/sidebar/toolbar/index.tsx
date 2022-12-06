import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { OpenProps } from '../../Types'
import Home from 'svg/home.svg'
import Calender from 'svg/calender.svg'
import Scan from 'svg/scan.svg'
import Store from 'svg/store.svg'
import Paper from 'svg/paper.svg'
import Boxes from 'svg/boxes.svg'
import Discover from 'svg/discover.svg'
import Chart from 'svg/chart.svg'
import Users from 'svg/users.svg'
import Work from 'svg/work.svg'
import useTranslation from 'next-translate/useTranslation'

function Toolbar({ open }: OpenProps) {
  const tolaBarButton = [
    {
      labelKey: 'dashboard',
      href: '/admin/dashboard',
      icon: <Home />
    },
    {
      labelKey: 'booking',
      href: '/admin/booking',
      icon: <Calender />
    },
    {
      labelKey: 'pos',
      href: '/admin/pos',
      icon: <Scan />
    },
    {
      labelKey: 'store',
      href: '/admin/store',
      icon: <Store />
    },
    {
      labelKey: 'sales',
      href: '/admin/sales',
      icon: <Paper />
    },
    {
      labelKey: 'workplace',
      href: '/admin/workplace',
      icon: <Boxes />
    },
    {
      labelKey: 'client',
      href: '/admin/client',
      icon: <Users />
    },
    {
      labelKey: 'online',
      href: '/admin/online',
      icon: <Discover />
    },
    {
      labelKey: 'report',
      href: '/admin/report',
      icon: <Chart />
    },
    {
      labelKey: 'governmental',
      href: '/admin/governmental',
      icon: <Work />
    }
  ]
  return (
    <div className="flex flex-col h-full gap-2 overflow-auto pe-1.5">
      {tolaBarButton.map((props) => (
        <Tool key={props.href} toggle={open} {...props} />
      ))}
    </div>
  )
}

interface ToolProps {
  labelKey: string
  icon: any
  href: string
  toggle: boolean
  callback?: () => void
}

const Tool = ({ labelKey, icon, href, toggle, callback }: ToolProps) => {
  const { t } = useTranslation('common')
  const router = useRouter()
  const isActive = router.asPath === href
  const [mouseEnter, setMouseEnter] = useState(false)
  return (
    <Link href={href} className="w-full">
      <span
        onClick={() => {
          callback?.()
        }}
        className={`
          flex  text-dark-300 dark:text-white  gap-4 rounded-xl px-5 py-3 w-full
          ${!toggle ? 'px-0' : ''}
          ${isActive ? '!text-white !bg-primary-100' : ''}
          ${mouseEnter ? 'text-primary-600 bg-primary-100 !text-white' : ''}
        `}
        onMouseEnter={() => setMouseEnter(true)}
        onMouseLeave={() => setMouseEnter(false)}
      >
        <div
          className={`
            flex justify-center items-center  hover:dark:!text-[#fff]
            ${!toggle ? 'ms-6' : ''}
          `}
        >
          {React.cloneElement(icon, {
            className: `stroke-dark-300 dark:stroke-white ${
              mouseEnter ? '!stroke-[#fff]' : ''
            } ${isActive ? 'stroke-[#fff]' : ''} `,
            style: !toggle ? { transform: 'scale(1.25)' } : null
          })}
        </div>
        {!toggle ? null : (
          <span
            className={`dark:!text-[#fff] ${
              mouseEnter ? 'dark:!text-[#fff]' : ''
            } ${
              isActive ? 'text-[#fff]' : ''
            }  whitespace-nowrap font-semibold capitalize text-center `}
          >
            {t(labelKey)}
          </span>
        )}
      </span>
    </Link>
  )
}

export default Toolbar
