import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import React from 'react'
import { Tabs, Button, Select } from 'ui'
import { TabProps } from 'ui/tabs/types'
import PlusSquareIcon from 'svg/plus-square.svg'
import PlusIcon from 'svg/plus.svg'

export interface NavigationProps {
  handleAddService?: () => void
  handleAddPackage?: () => void
  handleAddMembership?: () => void
}

function Navigation({
  handleAddService,
  handleAddPackage,
  handleAddMembership
}: NavigationProps) {
  const { t } = useTranslation('common')
  const { push, asPath } = useRouter()
  const isActive = (path: string): boolean => asPath.split('/')[3] === path
  const tabs: TabProps[] = [
    {
      isActive: isActive('shop-services'),
      label: t('shop_services'),
      onClick: async () => {
        await push('shop-services')
      }
    },
    // {
    //   isActive: isActive('home-services'),
    //   label: t('home_services'),
    //   onClick: async () => {
    //     await push('home-services')
    //   }
    // },
    {
      isActive: isActive('packages'),
      label: t('packages'),
      onClick: async () => {
        await push('packages')
      }
    },
    {
      isActive: isActive('memberships'),
      label: t('memberships'),
      onClick: async () => {
        await push('memberships')
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
  const addButtons: any = {
    packages: { title: t('add_package'), onClick: handleAddPackage },
    memberships: { title: t('membership'), onClick: handleAddMembership },
    'shop-services': { title: t('add_new_service'), onClick: handleAddService }
  }
  const currentPath: string = asPath.split('/')[3] ?? 'shop-services'

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
      <Button
        primary
        className={'py-[5px] px-[23px]'}
        onClick={addButtons[currentPath].onClick}
      >
        <PlusIcon className="sm:hidden" />{' '}
        <PlusSquareIcon className="xs:hidden" />
        <span className="xs:hidden">{addButtons[currentPath].title}</span>
      </Button>
    </div>
  )
}

export default Navigation
