import React from 'react'
import ExpensesInvoiceBox from './box'
import { ExpensesInvoicesPropsType } from 'components/accounting/expenses/type'

function ExpensesMobileView({ data, onEdit }: ExpensesInvoicesPropsType) {
  return (
    <div className="sm:hidden flex flex-col gap-4">
      {data.map((box) => {
        return (
          <ExpensesInvoiceBox key={box.invoiceNo} {...box} editEx={onEdit} />
        )
      })}
    </div>
  )
}

export default ExpensesMobileView
