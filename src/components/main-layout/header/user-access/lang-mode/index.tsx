import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import React, { ReactElement } from 'react'
import ArIcon from 'svg/ar.svg'
import EnIcon from 'svg/en.svg'
import Dropdown, { Options } from 'ui/dropdown'
import LangIcon from 'svg/lang.svg'

interface Props {
  icon?: ReactElement<SVGAElement, any>
}
function LangMod({ icon }: Props) {
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
      icon={
        icon === undefined ? (
          <LangIcon
            width={12}
            height={12}
            className="fill-[#797979E0] scale-125 dark:fill-[#ffff]"
          />
        ) : (
          icon
        )
      }
      options={langList}
    />
  )
}

export default LangMod
