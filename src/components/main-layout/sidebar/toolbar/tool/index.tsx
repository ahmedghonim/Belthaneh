import useScreen from 'hooks/useScreen'
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { ToolProps } from '../types'

const Tool = ({ label, icon, href, toggle = false, setOpen }: ToolProps) => {
  const screen = useScreen()
  const { t } = useTranslation('common')
  const router = useRouter()
  const isActive = router.asPath === href
  const [mouseEnter, setMouseEnter] = useState(false)

  return (
    <Link href={href} className="w-full">
      <span
        className={`
            flex  text-dark-300 dark:text-white  gap-4 rounded-xl px-5 py-3 w-full
            ${!toggle ? 'px-0' : ''}
            ${isActive ? '!text-white !bg-primary-100' : ''}
            ${mouseEnter ? 'text-primary-600 bg-primary-100 !text-white' : ''}
          `}
        onClick={() => {
          screen === 'phone' && setOpen(true)
        }}
        onMouseEnter={() => setMouseEnter(true)}
        onMouseLeave={() => setMouseEnter(false)}
      >
        <div
          className={`
              flex justify-center items-center  hover:dark:!text-white
              ${!toggle ? 'ms-6' : ''}
            `}
        >
          {React.cloneElement(icon, {
            className: `stroke-dark-300 dark:stroke-white ${
              mouseEnter ? '!stroke-white' : ''
            } ${isActive ? 'stroke-white' : ''} `,
            style: !toggle ? { transform: 'scale(1.25)' } : null
          })}
        </div>
        {!toggle ? null : (
          <span
            className={`dark:!text-white flex justify-between items-end w-full ${
              mouseEnter ? 'dark:!text-white' : ''
            } ${
              isActive ? 'text-white' : ''
            }  whitespace-nowrap font-semibold capitalize text-center `}
          >
            {t(label)}
          </span>
        )}
      </span>
    </Link>
  )
}

export default Tool
