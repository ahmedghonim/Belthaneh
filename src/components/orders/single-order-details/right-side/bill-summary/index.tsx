import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import RoundedBox from 'ui/rounded-box'
import DetailsBox from 'ui/details-box'

interface BillProps {
  subTotal: number
  shipping: number
  tax: number
  discount: number
  total: number
}

function BillSummary({ subTotal, shipping, tax, discount, total }: BillProps) {
  const { t } = useTranslation('common')

  return (
    <RoundedBox className="p-4">
      <h2 className="dark:text-white text-dark-100 mb-4 font-bold text-md">
        {t('Billing_Summary')}
      </h2>
      <ul className="flex flex-col gap-4 ">
        <DetailsBox
          withLabel={true}
          labelType={`${t('Sub_total')}:`}
          text={`$${subTotal.toFixed(2)}`}
        />
        <DetailsBox
          withLabel={true}
          labelType={`${t('shipping')}:`}
          text={`$${shipping.toFixed(2)}`}
        />
        <DetailsBox
          withLabel={true}
          labelType={`${t('tax')}:`}
          text={`$${tax.toFixed(2)}`}
        />
        <DetailsBox
          withLabel={true}
          labelType={`${t('discount')}:`}
          text={`$${discount.toFixed(2)}`}
          mainstyling="pb-5 border-b-2 dark:border-dark-400 border-dark-300"
        />
        <DetailsBox
          withLabel={true}
          labelType={`${t('total')}:`}
          text={`$${total.toFixed(2)}`}
        />
      </ul>
    </RoundedBox>
  )
}

export default BillSummary
