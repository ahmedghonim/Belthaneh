import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import { DetailsBox, ThreeDots } from 'ui'
import { SalesInfoType } from 'components/accounting/sales/type'

function SalesInvoicesBox({
  invoiceNo,
  client,
  clause,
  cost,
  phoneNum,
  date,
  returnFun = () => {}
}: SalesInfoType) {
  const { t } = useTranslation('common')

  return (
    <div>
      <div className="flex justify-between dark:bg-dark-200 bg-[#D4D6D9] p-4 rounded-lg">
        <div className="flex gap-3 dark:text-white text-dark-100">
          <span>{t('invoice_no')}:</span>
          <span>{invoiceNo}</span>
        </div>
        <div className="flex gap-5">
          <span className="dark:text-white text-dark-100">{cost}</span>
          <ThreeDots onClick={() => returnFun(true)} />
        </div>
      </div>
      <ul className="flex flex-col gap-2 p-2">
        <DetailsBox withLabel labelType={t('client')} text={client} />
        <DetailsBox withLabel labelType={t('phone')} text={phoneNum} />
        <DetailsBox withLabel labelType={t('clause')} text={clause} />
        <DetailsBox withLabel labelType={t('date')} text={date} />
      </ul>
    </div>
  )
}

export default SalesInvoicesBox
