import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import RoundedBox from 'ui/rounded-box'
import { SingleOrderBoxType } from 'components/orders/single-order-details'
import Image from 'next/image'

function OrderDeatailsBox({
  client,
  brand,
  id,
  stock,
  sold,
  price,
  source
}: SingleOrderBoxType) {
  const { t } = useTranslation('common')

  return (
    <RoundedBox className="sm:hidden overflow-hidden p-4 flex justify-between gap-4">
      <div className="w-32 rounded-lg overflow-hidden">
        <Image
          width="100"
          height="100"
          src={source}
          alt="product-image"
          className="h-full w-full"
        />
      </div>
      <div className="relative flex-1">
        <h2 className="font-medium text-base">{client}</h2>
        <div className="dark:text-dark-400 text-dark-100 xs:!text-xs">
          <p>
            {t('Brand_Name')}: {brand}
          </p>
          <p>
            {t('id')}: {id}
          </p>
          <p>
            {t('left')}: {stock}
          </p>
          <p>
            {t('sold')}: {sold}
          </p>
          <p className="absolute bottom-0 ltr:right-0 rtl:left-0 bg-secondary-100 text-white py-1 px-5 rounded-lg">{`$${price}`}</p>
        </div>
      </div>
    </RoundedBox>
  )
}

export default OrderDeatailsBox
