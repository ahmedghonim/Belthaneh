import Image from 'next/image'
import React from 'react'
import { Text } from 'ui'
import User from 'svg/brought.svg'
import useTranslation from 'next-translate/useTranslation'

export interface PackageCardProps {
  img: string
  id: string
  title: string
  reviews: number
  oldPrice: number
  price: number
  broughtNumber: number
  discount: number
  totalReviews: number
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
  totalReviews,
  actions,
  id
}: PackageCardProps) {
  const { t } = useTranslation('common')
  const starsNumber = (reviews / totalReviews) * 5
  const disabledStarsNumber = 5 - starsNumber

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
            {Array.from(Array(starsNumber).keys()).map((_item) => (
              <svg
                key={Math.random()}
                aria-hidden="true"
                className="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            ))}
            {Array.from(Array(disabledStarsNumber).keys()).map((_item) => (
              <svg
                key={Math.random()}
                aria-hidden="true"
                className="w-5 h-5 text-gray-300 dark:text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            ))}
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
