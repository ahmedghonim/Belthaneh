import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import { Tabs, Select } from 'ui'
import { TabProps } from 'ui/tabs/types'

interface Props {
  splitNum: number
}

function NavigatorTabs({ splitNum }: Props) {
  const { t } = useTranslation('common')
  const { push, asPath } = useRouter()
  const isActive = (path: string): boolean =>
    asPath.split('/')[splitNum] === path

  // web tabs
  const webTabs: TabProps[] = [
    {
      isActive: isActive('client'),
      label: t('client'),
      onClick: async () => {
        await push('/admin/client')
      }
    },
    {
      isActive: isActive('comments'),
      label: t('comments'),
      onClick: async () => {
        await push('/admin/client/comments')
      }
    },
    {
      isActive: isActive('chats'),
      label: t('chats'),
      onClick: async () => {
        await push('/admin/client/chats')
      }
    },
    {
      isActive: isActive('messages'),
      label: t('messages'),
      onClick: async () => {
        await push('/admin/client/messages')
      }
    },
    {
      isActive: isActive('forme'),
      label: t('forme'),
      onClick: async () => {
        await push('/admin/client/forme')
      }
    }
  ]

  // select options
  const selectOptions = [
    { value: '', label: t('client') },
    { value: 'comments', label: t('comments') },
    { value: 'chats', label: t('chats') },
    { value: 'messages', label: t('messages') },
    { value: 'forme', label: t('forme') }
  ]

  //   select box change function
  const onChangeHandler = (e: any) => {
    void push(`/admin/client/${e.value as string}`)
  }

  return (
    <section>
      <div className="xs:hidden">
        <Tabs tabs={webTabs} />
      </div>
      <div className="sm:hidden">
        <Select
          options={selectOptions}
          placeholder={t('all_services')}
          onChange={onChangeHandler}
        />
      </div>
    </section>
  )
}

export default NavigatorTabs
