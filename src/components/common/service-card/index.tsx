import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import React from 'react'
import { Text } from 'ui'

export interface ServiceCardProps {
  id: string
  name: string
  description: string
  img: string
  actions?: React.ReactNode | null
  price: number
}

export default function ServiceCard({
  price,
  name,
  description,
  img = '',
  actions = null
}: ServiceCardProps) {
  const { t } = useTranslation('common')

  return (
    <div className="flex dark:bg-dark-200 bg-white rounded-[10px] shadow-xl p-4 w-full relative">
      <div className="flex items-center">
        <Image
          src={img}
          alt={name}
          width={70}
          height={70}
          className="rounded-lg"
          onLoad={() => img}
        />
      </div>
      <div className="flex flex-col justify-between px-[17px] py-1">
        <Text className="card-title font-bold " size={'xs'}>
          {name}
        </Text>
        <Text style={{ lineClamp: 2 }} className="!text-[10px]">
          {description}
        </Text>
      </div>
      <div className="flex flex-col justify-between  ltr:ml-auto rtl:mr-auto  ">
        <Text
          className="card-title font-bold self-end w-max"
          secondary={'light'}
          size={'xs'}
        >
          {price} {t('sar')}
        </Text>
        {actions}
      </div>
    </div>
  )
}
