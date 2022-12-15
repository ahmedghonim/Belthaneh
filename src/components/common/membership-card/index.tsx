import useTranslation from 'next-translate/useTranslation'
import React from 'react'
import { Button, Text } from 'ui'

export interface MembershipCardProps {
  title: string
  id: string
  subTitle: string
  oldPrice: number
  price: number
  handleAdd: () => void
  body: React.ReactNode
}

export default function MembershipCard({
  subTitle,
  title,
  oldPrice,
  price,
  handleAdd,
  body,
  id
}: MembershipCardProps) {
  const { t } = useTranslation('common')

  return (
    <div
      className="dark:bg-dark-200 bg-white rounded-md  px-9  flex flex-col justify-center item text-center sm:w-[229px] w-full py-[22px]"
      key={id}
    >
      <div className="flex flex-col gap-2">
        <Text>{title}</Text>
        <Text className="font-normal" size="xs">
          {subTitle}
        </Text>
      </div>

      <div className="flex flex-col gap-2 pt-[39px]">
        <Text className="font-normal line-through !text-dark-300">
          {t('sar')} {oldPrice}
        </Text>
        <Text>
          {t('sar')} {price} /
          <Text className="font-normal line-through !text-dark-300" size={'xs'}>
            {t('per_month')}
          </Text>
        </Text>
      </div>
      <div className="my-0 mx-auto pt-[40px]">{body}</div>
      <Button primary onClick={handleAdd} className="justify-center  mt-10">
        {t('add')}
      </Button>
    </div>
  )
}
