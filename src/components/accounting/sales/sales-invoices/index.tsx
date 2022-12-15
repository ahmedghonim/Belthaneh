import React from 'react'
import WebSales from '../web-view'
import MobileSales from '../mobile-view'

import { SalesInvoicesProps } from 'components/accounting/sales/type'
function SalesInvoices({ data, returnFun }: SalesInvoicesProps) {
  return (
    <div>
      <WebSales data={data} returnFun={returnFun} />
      <MobileSales data={data} returnFun={returnFun} />
    </div>
  )
}

export default SalesInvoices
