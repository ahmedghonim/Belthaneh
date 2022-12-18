import useTranslation from 'next-translate/useTranslation'
import React from 'react'
import { Text } from 'ui'

export interface MembershipCardProps {
  title: string
  id: string
  subTitle: string
  oldPrice: number
  price: number
  action?: React.ReactNode
  body: React.ReactNode
}

export default function MembershipCard({
  subTitle,
  title,
  oldPrice,
  price,
  action,
  body,
  id
}: MembershipCardProps) {
  const { t } = useTranslation('common')

  return (
    <div
      className="dark:bg-dark-200 bg-white rounded-md  px-9  flex flex-col justify-center item text-center w-full py-5 relative"
      key={id}
    >
      <div className="flex flex-col gap-2">
        <Text className="font-bold">{title}</Text>
        <Text className="font-normal" size="xs">
          {subTitle}
        </Text>
      </div>

      <div className="flex flex-col gap-2 pt-10">
        <Text className="font-normal line-through !text-dark-300">
          {t('sar')} {oldPrice}
        </Text>
        <Text className="font-bold">
          {t('sar')} {price} /
          <Text className="font-normal line-through !text-dark-300" size={'xs'}>
            {t('per_month')}
          </Text>
        </Text>
      </div>
      <div className="my-0 mx-auto pt-10">{body}</div>
      {action}
    </div>
  )
}
