import React from 'react'
import SalesInvoicesBox from './box'
import { SalesInvoicesProps } from 'components/accounting/sales/type'

function MobileSalesInvoices({ data, returnFun }: SalesInvoicesProps) {
  return (
    <div className="sm:hidden flex flex-col gap-4">
      {data.map((box) => {
        return (
          <SalesInvoicesBox
            key={box.invoiceNo}
            {...box}
            returnFun={returnFun}
          />
        )
      })}
    </div>
  )
}

export default MobileSalesInvoices
