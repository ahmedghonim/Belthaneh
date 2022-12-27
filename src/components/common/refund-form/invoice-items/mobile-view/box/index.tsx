import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import { DetailsBox, ThreeDots } from 'ui'
import { RecieptItemsType } from 'components/accounting/sales/type'

function SalesInvoiceBox({
  serviceName,
  amount,
  discount,
  employer,
  date
}: RecieptItemsType) {
  const { t } = useTranslation('common')
  // edit expenses
  const onClickHandler = () => {}

  return (
    <div>
      <div className="flex justify-between dark:bg-dark-200 bg-[#D4D6D9] p-4 rounded-lg">
        <div className="flex gap-3 dark:text-white text-dark-100">
          <span>{serviceName}</span>
        </div>
        <div className="flex gap-4">
          <span className="dark:text-white text-dark-100">{amount}</span>
          <ThreeDots onClick={onClickHandler} />
        </div>
      </div>
      <ul className="flex flex-col gap-2 p-2">
        <DetailsBox withLabel labelType={t('discount')} text={discount} />
        <DetailsBox withLabel labelType={t('employer')} text={employer} />
        <DetailsBox withLabel labelType={t('date')} text={date} />
      </ul>
    </div>
  )
}

export default SalesInvoiceBox
