import React from 'react'
import WebInvoiceItems from './web-view'
import MobileInvoiceItems from './mobile-view'
import { RecieptItemsType } from 'components/accounting/sales/type'

interface Props {
  data: RecieptItemsType[]
}

function InvoiceItems({ data }: Props) {
  return (
    <div>
      <WebInvoiceItems data={data} />
      <MobileInvoiceItems data={data} />
    </div>
  )
}

export default InvoiceItems
