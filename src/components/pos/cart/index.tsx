import useTranslation from 'next-translate/useTranslation'
import React from 'react'
import { Text } from 'ui'
import CartCard, { CartCardProps } from './card'

export interface CartProps {
  list: CartCardProps[]
}

export default function Cart({ list }: CartProps) {
  const { t } = useTranslation('common')

  return (
    <div className="flex flex-col gap-2 h-1/3 max-h-[40vh] overflow-y-scroll">
      <div className="flex flex-col gap-2">
        <Text size={'sm'} className="font-bold">
          {t('services')}
        </Text>
        <div className="flex gap-2 flex-col">
          {list.map(
            (_item) =>
              _item.serviceType === 'service' && (
                <div key={_item.id}>
                  <CartCard {..._item} />
                </div>
              )
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Text size={'sm'} className="font-bold">
          {t('package')}
        </Text>
        <div className="flex gap-2 flex-col">
          {list.map(
            (_item) =>
              _item.serviceType === 'package' && (
                <div key={_item.id}>
                  <CartCard {..._item} />
                </div>
              )
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Text size={'sm'} className="font-bold">
          {t('membership')}
        </Text>
        <div className="flex gap-2 flex-col">
          {list.map(
            (_item) =>
              _item.serviceType === 'membership' && (
                <div key={_item.id}>
                  <CartCard {..._item} />
                </div>
              )
          )}
        </div>
      </div>
    </div>
  )
}
