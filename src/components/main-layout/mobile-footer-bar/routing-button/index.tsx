import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { RoutingProps } from '../Types'

function RoutingButton({ href, label, icon: Icon, className }: RoutingProps) {
  const { t } = useTranslation('common')
  const { asPath } = useRouter()
  const isActive = asPath === href
  return (
    <Link
      href={href}
      className={`!rounded-full ${
        isActive ? 'bg-light-300' : ''
      } text-primary-200 font-semibold flex items-center gap-2 p-2 px-3 justify-center`}
    >
      <Icon
        className={` ${
          isActive ? 'fill-primary-100' : 'fill-dark-500'
        }  ${className}`}
      />
      {isActive && t(label)}
    </Link>
  )
}

export default RoutingButton
