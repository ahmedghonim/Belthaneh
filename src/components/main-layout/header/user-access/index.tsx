import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Dropdown from 'ui/dropdown'
import Avatar from 'ui/avatar'
import ArrowIcon from 'svg/arrow.svg'
import Message from 'svg/message.svg'
import Setting from 'svg/setting.svg'
import Link from 'next/link'
import ThemeMode from './theme-mode'
import LangMod from './lang-mode'
import Notifications from './notifications'

function UserAccess() {
  const { t } = useTranslation('common')

  const option = [
    {
      label: t('logout')
    }
  ]
  return (
    <div className="flex items-center gap-5">
      <div className="flex items-center gap-7">
        <Message className="xs:hidden stroke-[#797979E0] dark:stroke-[#ffff]" />

        <Notifications />
        <Link className="xs:hidden" href="/admin/setting">
          <Setting className="xs:hidden stroke-[#797979E0] dark:stroke-[#ffff] scale-110" />
        </Link>

        {/* theme mode  */}
        <div className="xs:hidden">
          <ThemeMode />
        </div>
      </div>

      {/* avatar and menu */}
      <div className="flex items-center gap-4 xs:hidden">
        <Avatar src="https://placeimg.com/192/192/people" />
        <Dropdown
          label={'sama ahmed'}
          icon={
            <ArrowIcon className="stroke-[#797979E0] dark:stroke-[#ffff]" />
          }
          options={option}
        />
      </div>
      <div className="xs:hidden flex items-start scale-125">
        <LangMod />
      </div>
    </div>
  )
}

export default UserAccess
