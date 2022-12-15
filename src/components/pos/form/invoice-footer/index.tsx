import useTranslation from 'next-translate/useTranslation'
import React from 'react'
import { Text } from 'ui'

export interface InvoiceFooterProps {
  subTotal: number
  taxPercentage: number
  tax: number
  total: number
}

export default function InvoiceFooter({
  taxPercentage,
  subTotal,
  tax,
  total
}: InvoiceFooterProps) {
  const { t } = useTranslation('common')

  return (
    <div className="py-3 flex flex-col gap-4">
      <div className="flex justify-between">
        <Text className=" !text-xs">{t('subtotal')}</Text>
        <Text className=" !text-[10px]">
          {subTotal} {t('sar')}
        </Text>
      </div>
      <div className="flex justify-between">
        <Text className=" font-normal !text-[10px]">
          {t('tax')}({taxPercentage}%)
        </Text>
        <Text className=" !text-[10px]">
          {tax} {t('sar')}
        </Text>
      </div>
      <div className=" w-full  mt-[10px] border-dashed border-[1px] border-primary-100"></div>
      <Text className=" self-end !text-primary-100 !text-[10px]">
        {total} {t('sar')}
      </Text>
    </div>
  )
}
