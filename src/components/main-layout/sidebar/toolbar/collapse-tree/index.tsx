import React, { useEffect, useState } from 'react'
import { ToolProps } from '../types'
import ArrowIcon from 'svg/arrow.svg'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'
import { Button } from 'ui'
import useScreen from 'hooks/useScreen'

const CollapseTree = ({
  label,
  icon,
  href,
  open = true,
  subMenu = [],
  setOpen
}: ToolProps) => {
  const screen = useScreen()
  const { t } = useTranslation('common')
  const router = useRouter()
  const [mainMenuIsActive, setMainMenuIsActive] = useState(false)
  const [mouseEnter, setMouseEnter] = useState(false)
  const [mouseEnterMenu, setMouseEnterMenu] = useState(false)
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    const arrayOfCondition = subMenu.map(({ href }) => router.asPath === href)
    if (arrayOfCondition.includes(true)) {
      setMainMenuIsActive(true)
    } else {
      setMainMenuIsActive(false)
    }
  }, [router.asPath, subMenu])

  useEffect(() => {
    if (!mouseEnterMenu && !open) {
      setToggle(false)
    }
  }, [mouseEnterMenu, open])

  return (
    <div>
      <span
        onClick={() => {
          setToggle(!toggle)
        }}
        className={`
    flex cursor-pointer text-dark-300 dark:text-white  gap-4 rounded-xl px-5 py-3 w-full
    ${!open ? 'px-0' : ''}
    ${mainMenuIsActive ? '!text-white !bg-primary-100' : ''}
    ${mouseEnter ? 'text-primary-600 bg-primary-100 !text-white' : ''}
  `}
        onMouseEnter={() => setMouseEnter(true)}
        onMouseLeave={() => setMouseEnter(false)}
      >
        <div
          className={`
      flex justify-center items-center  hover:dark:!text-white
      ${!open ? 'ms-6' : ''}
    `}
        >
          {React.cloneElement(icon, {
            className: `stroke-dark-300 dark:stroke-white ${
              mouseEnter ? '!stroke-white' : ''
            } ${mainMenuIsActive ? 'stroke-white' : ''} `,
            style: !open ? { transform: 'scale(1.25)' } : null
          })}
        </div>
        {!open ? null : (
          <span
            className={`dark:!text-white flex justify-between items-end w-full ${
              mouseEnter ? 'dark:!text-white' : ''
            } ${
              mainMenuIsActive ? 'text-white' : ''
            }  whitespace-nowrap font-semibold capitalize text-center `}
          >
            {t(label)}{' '}
            <ArrowIcon
              className={`stroke-white  ${mouseEnter ? 'stroke-white' : ''} ${
                mainMenuIsActive
                  ? 'stroke-white'
                  : 'dark:stroke-white stroke-dark-200'
              } ${!toggle ? ' duration-300 ' : 'rotate-180 duration-300'}`}
            />
          </span>
        )}
      </span>

      <div
        onMouseEnter={() => setMouseEnterMenu(true)}
        onMouseLeave={() => setMouseEnterMenu(false)}
        className={`${!toggle ? 'h-0 overflow-hidden' : 'pb-5'} ${
          !open
            ? 'absolute dark:bg-dark-200 bg-white rounded-lg ltr:left-0 rtl:right-0 z-50 w-[200px]'
            : ''
        }`}
      >
        {subMenu?.length !== 0 && (
          <div className="ms-12 border-2 ps-2 border-t-0 rounded-t-none border-e-0  pt-2 rounded-e-none border-white rounded-lg h-6 w-28">
            <Button
              onClick={() => {
                void router.push(subMenu[0].href)
                screen === 'phone' && setOpen(true)
              }}
              rounded="full"
              size="xSmall"
              className={`${
                router.asPath === href
                  ? '!bg-secondary-100 '
                  : 'dark:bg-dark-200 bg-white'
              } hover:!bg-secondary-100 !px-3 w-[130px]`}
            >
              {t(subMenu[0].label) ?? subMenu[0].label}
            </Button>
          </div>
        )}
        {subMenu.map(({ label, href }, index) => {
          return (
            index !== 0 && (
              <div className="ms-12 border-2 ps-2 border-t-0 rounded-t-none border-e-0 pt-6 rounded-e-none border-whit rounded-lg h-10 w-28">
                <Button
                  onClick={() => {
                    void router.push(href)
                    screen === 'phone' && setOpen(true)
                  }}
                  rounded="full"
                  size="xSmall"
                  className={`${
                    router.asPath === href
                      ? '!bg-secondary-100 '
                      : 'dark:bg-dark-200 bg-white'
                  } hover:!bg-secondary-100 w-[130px] !px-3`}
                >
                  {t(label) ?? label}
                </Button>
              </div>
            )
          )
        })}
      </div>
    </div>
  )
}

export default CollapseTree
