import React, { ReactElement } from 'react'
import useTranslation from 'next-translate/useTranslation'
import Edit from 'svg/edit.svg'
import Trash from 'svg/trash.svg'

export interface CardDataProps {
  brand?: string
  code?: string | number
  quantity?: number
  description?: string
  children?: ReactElement
  className?: string
}

function Card({
  brand,
  code,
  quantity,
  description,
  children,
  className = ''
}: CardDataProps) {
  const { t } = useTranslation('common')
  return (
    <div
      className={`xs:w-2/3 text-sm p-4 flex flex-col gap-1 capitalize text-dark-100 dark:text-white relative ${className}`}
    >
      <h2 className="sm:hidden text-base">{brand}</h2>
      <h2 className="xs:hidden text-base capitalize">
        {t('brand')}: {brand}
      </h2>
      <p>
        {`${t('code')}:`} {code}
      </p>
      <span>
        {`${t('Quantity')}:`} {quantity}
      </span>
      <p>
        {`${t('Description')}:`} <br /> {description}
      </p>
      {children}
      <div className="flex items-center absolute top-1 right-0">
        <Edit className="dark:stroke-white stroke-black scale-75 cursor-pointer" />
        <Trash className="scale-75 cursor-pointer" />
      </div>
    </div>
  )
}

export default Card
