import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import React from 'react'
import { Tabs, Button, Select } from 'ui'
import { TabProps } from 'ui/tabs/types'
import PlusSquareIcon from 'svg/plus-square.svg'
function Navigation() {
  const { t } = useTranslation('common')
  const { push, asPath } = useRouter()
  const isActive = (path: string): boolean => asPath.split('/')[3] === path

  const tabs: TabProps[] = [
    {
      isActive: isActive('home-services'),
      label: t('home_services'),
      onClick: async () => {
        await push('home-services')
      }
    },
    {
      isActive: isActive('shop-services'),
      label: t('shop_services'),
      onClick: async () => {
        await push('shop-services')
      }
    },
    {
      isActive: isActive('packages'),
      label: t('packages'),
      onClick: async () => {
        await push('packages')
      }
    },
    {
      isActive: isActive('membership'),
      label: t('membership'),
      onClick: async () => {
        await push('membership')
      }
    }
  ]

  const categoryOptions = [
    {
      label: t('home_services'),
      value: 'home-services'
    },
    {
      label: t('shop_services'),
      value: 'shop-services'
    },
    {
      label: t('packages'),
      value: 'packages'
    },
    {
      label: t('membership'),
      value: 'membership'
    }
  ]

  return (
    <div className="flex justify-between">
      <div className="xs:hidden">
        <Tabs tabs={tabs} />
      </div>
      <div className="sm:hidden w-3/4">
        <Select
          options={categoryOptions}
          onChange={(e: any) => {
            void push(e.value as string)
          }}
        />
      </div>
      <Button primary>
        <PlusSquareIcon /> <span className="xs:hidden">{t('add_package')}</span>
      </Button>
    </div>
  )
}

export default Navigation
