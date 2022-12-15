import React from 'react'
import PurchasesWebView from './web-view'
import PurchasesMobileView from './mobile-view'
import { PurchasesInvoicesDataProps } from 'components/accounting/purchase/type'
function PurchacesInvoices({ data, showForm }: PurchasesInvoicesDataProps) {
  return (
    <div>
      <PurchasesWebView data={data} showForm={showForm} />
      <PurchasesMobileView data={data} showForm={showForm} />
    </div>
  )
}

export default PurchacesInvoices
