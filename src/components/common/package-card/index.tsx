import Image from 'next/image'
import React from 'react'
import { Text } from 'ui'
import User from 'svg/brought.svg'
import useTranslation from 'next-translate/useTranslation'
import Rating from '../rating'

export interface PackageCardProps {
  img: string
  id: string
  title: string
  reviews: number
  oldPrice: number
  price: number
  broughtNumber: number
  discount: number
  actions?: React.ReactNode
}

export default function PackageCard({
  img,
  title,
  reviews,
  oldPrice,
  price,
  broughtNumber,
  discount,
  actions,
  id
}: PackageCardProps) {
  const { t } = useTranslation('common')

  return (
    <div
      className="card w-full dark:bg-dark-200 bg-white shadow-xl rounded-[10px] relative pb-[18px]"
      key={id}
    >
      <figure className="w-full h-[149px] relative">
        <Image src={img} alt={title} fill onLoad={() => img} />
      </figure>
      <div className="card-body pt-3 px-3 !pb-0">
        <Text className="card-title font-bold !p-0" size="sm">
          {title}
        </Text>
        <div className="flex items-center">
          <User className="fill-secondary-100 ltr:pr-[3px] rtl:pl-[3px]" />{' '}
          <Text className="font-normal" size={'xs'}>
            {broughtNumber} {t('brought')}
          </Text>
        </div>
        <div className="flex">
          <div className="flex items-center">
            <Rating ratings={reviews} />

            <Text className="font-normal" size={'xs'}>
              {reviews} {t('reviews')}
            </Text>
          </div>
        </div>
        <div className="card-actions flex justify-between items-center">
          <div className="flex gap-2">
            <Text
              className="font-normal line-through !text-dark-300"
              size={'md'}
            >
              {oldPrice} {t('sar')}
            </Text>
            <Text className="font-normal" size={'md'}>
              {price} {t('sar')}
            </Text>
          </div>
          {actions}
        </div>
      </div>
      <Text
        className="bg-secondary-100 py-[2px] px-[6px] top-[14px] absolute ltr:right-3 rtl:left-3 rounded-sm font-bold"
        size="sm"
        white
      >
        {discount}%
      </Text>
    </div>
  )
}
