import React from 'react'
import PurchasesInvoiceBox from './box'
import { PurchasesInvoicesDataProps } from 'components/accounting/purchase/type'

function PurchasesMobileView({ data, showForm }: PurchasesInvoicesDataProps) {
  return (
    <div className="sm:hidden flex flex-col gap-4">
      {data.map((box) => {
        return (
          <PurchasesInvoiceBox
            key={box.invoiceNo}
            {...box}
            showForm={showForm}
          />
        )
      })}
    </div>
  )
}

export default PurchasesMobileView
