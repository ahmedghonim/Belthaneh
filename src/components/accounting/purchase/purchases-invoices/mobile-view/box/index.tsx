import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import { DetailsBox, ThreeDots } from 'ui'
import { PurchasesInvoicesType } from 'components/accounting/purchase/type'

function PurchasesInvoiceBox({
  invoiceNo,
  clause,
  Cost,
  source,
  date,
  showForm = () => {}
}: PurchasesInvoicesType) {
  const { t } = useTranslation('common')

  return (
    <div>
      <div className="flex justify-between p-4 dark:bg-dark-200 bg-[#D4D6D9] rounded-lg">
        <div className="flex gap-3 dark:text-white text-dark-100">
          <span>{t('invoice_no')}:</span>
          <span>{invoiceNo}</span>
        </div>
        <div className="flex gap-5">
          <span className="dark:text-white text-dark-100">{Cost}</span>
          <ThreeDots onClick={() => showForm()} />
        </div>
      </div>
      <ul className="flex flex-col gap-2 p-2">
        <DetailsBox withLabel labelType={t('clause')} text={clause} />
        <DetailsBox withLabel labelType={t('account_source')} text={source} />
        <DetailsBox withLabel labelType={t('date')} text={date} />
      </ul>
    </div>
  )
}

export default PurchasesInvoiceBox
