import { Menu, Transition } from '@headlessui/react'
import useTranslation from 'next-translate/useTranslation'
import { Fragment, ReactElement } from 'react'

export interface Options {
  label: string
  icon?: ReactElement<SVGAElement, any>
  onClick?: () => void
}

interface Props {
  options: Options[]
  label?: string
  icon?: ReactElement<SVGAElement, any>
  titleStyle?: string
  className?: string
}

export default function Dropdown({
  label,
  icon,
  titleStyle = '',
  className = '',
  options
}: Props) {
  const { lang } = useTranslation()
  const { Button } = Menu
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Button className={`flex items-center gap-3 ${titleStyle}`}>
          <span>{label}</span> <span className="mt-1">{icon}</span>
        </Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={`absolute ${className} ${
            lang === 'ar' ? 'left-0' : 'right-0'
          }  mt-2 z-50 origin-top-right divide-y divide-gray-100 rounded-md whitespace-nowrap bg-dark-200 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
        >
          <div className="px-1 py-1 ">
            {options?.map(({ label, icon, onClick }) => (
              <Menu.Item key={label}>
                {({ active }) => (
                  <button
                    className={`flex gap-4 ${
                      active ? 'bg-primary-100 text-white' : 'text-white'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm `}
                    onClick={onClick}
                  >
                    {icon} {label}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
