import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import React from 'react'
import ArIcon from 'svg/ar.svg'
import EnIcon from 'svg/en.svg'
import Dropdown, { Options } from 'ui/dropdown'
import LangIcon from 'svg/lang.svg'

function LangMod() {
  const { push, pathname, asPath, query } = useRouter()
  const { t } = useTranslation()

  const langList: Options[] = [
    {
      label: t('common:ar'),
      icon: <ArIcon />,
      onClick: () => {
        void push({ pathname, query }, asPath, { locale: 'ar' })
      }
    },
    {
      label: t('common:en'),
      icon: <EnIcon />,
      onClick: () => {
        void push({ pathname, query }, asPath, { locale: 'en' })
      }
    }
  ]

  return (
    <Dropdown
      icon={<LangIcon className="stroke-[#797979E0] dark:stroke-[#ffff]" />}
      options={langList}
    />
  )
}

export default LangMod
