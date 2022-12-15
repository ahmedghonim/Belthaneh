import React from 'react'
import ExpensesWebView from './web-view/'
import ExpensesMobileView from './mobile-view'
import { ExpensesInvoicesPropsType } from 'components/accounting/expenses/type'

function ExpensesInvoices({ data, onEdit }: ExpensesInvoicesPropsType) {
  return (
    <div>
      <ExpensesWebView data={data} onEdit={onEdit} />
      <ExpensesMobileView data={data} onEdit={onEdit} />
    </div>
  )
}

export default ExpensesInvoices
