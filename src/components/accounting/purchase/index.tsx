import React, { useState } from 'react'
import useTranslation from 'next-translate/useTranslation'
import SearchForm from '../serach-form'
import PurchacesInvoices from './purchases-invoices'
import PurchasesForm from './purchase-form'
import { PurchasesInvoicesType } from 'components/accounting/purchase/type'
import { Button } from 'ui'

function Purchase() {
  const { t } = useTranslation('common')

  const [Purchases, setPurchases] = useState<boolean>(false)

  // expenses invoices dummy data
  const invoicesDummyData: PurchasesInvoicesType[] = [
    {
      invoiceNo: '#123',
      clause: 'Orlando Imieto',
      Cost: '524',
      source: 'Notes about the user',
      date: '12/10/2020'
    },
    {
      invoiceNo: '#123',
      clause: 'Orlando Imieto',
      Cost: '524',
      source: 'Notes about the user',
      date: '12/10/2020'
    },
    {
      invoiceNo: '#123',
      clause: 'Orlando Imieto',
      Cost: '524',
      source: 'Notes about the user',
      date: '12/10/2020'
    },
    {
      invoiceNo: '#123',
      clause: 'Orlando Imieto',
      Cost: '524',
      source: 'Notes about the user',
      date: '12/10/2020'
    },
    {
      invoiceNo: '#123',
      clause: 'Orlando Imieto',
      Cost: '524',
      source: 'Notes about the user',
      date: '12/10/2020'
    }
  ]

  // search submit
  const onSubmit = () => {}

  const showPurchase = () => {
    setPurchases(true)
  }

  return (
    <section className="flex flex-col gap-10">
      <div className="flex flex-wrap xs:justify-end gap-4">
        <div className="xs-w-full flex-1">
          <SearchForm onSubmit={onSubmit} />
        </div>
        <Button primary className="px-5 text-base" onClick={showPurchase}>
          {t('add_purchases')}
        </Button>
      </div>
      <PurchacesInvoices data={invoicesDummyData} showForm={showPurchase} />
      <PurchasesForm show={Purchases} hideFun={setPurchases} />
    </section>
  )
}

export default Purchase
