import React, { useState } from 'react'
import useTranslation from 'next-translate/useTranslation'
import SearchForm from '../serach-form'
import ExpensesInfo from './expenses-info'
import ExpensesInvoices from './expenses-invoices'
import ExpensesForm from './expenses-form'
import { Button } from 'ui'
import {
  ExpensesInvoicesType,
  ExpensesFormControlersType
} from 'components/accounting/expenses/type'

// expenses invoices dummy data
const invoicesDummyData: ExpensesInvoicesType[] = [
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

function Expenses() {
  const initialControlerValues = {
    show: false,
    type: '',
    dataObj: {
      type: '',
      clause: '',
      source: '',
      date: '',
      price: '',
      discount: '',
      paid: '',
      vat: '',
      recipient: '',
      invoiceNum: '',
      description: ''
    }
  }

  const [Expenses, setExpenses] = useState<ExpensesFormControlersType>(
    initialControlerValues
  )
  const { t } = useTranslation('common')

  // search submit
  const onSubmit = () => {}

  // add expenses function
  const showExpenses = () => {
    setExpenses({ ...Expenses, show: true })
  }

  // Edit expenses function
  const editExpenses = () => {
    setExpenses({
      ...Expenses,
      show: true,
      type: 'edit',
      dataObj: {
        type: 'Car Rent',
        clause: 'asd',
        source: 'asd',
        date: 'asd',
        price: 20,
        discount: 50,
        paid: 120,
        vat: 100,
        recipient: 'asd',
        invoiceNum: 1235,
        src: 'https://placeimg.com/192/192/people'
      }
    })
  }

  // Hide expenses function
  const hideExpenses = () => {
    setExpenses(initialControlerValues)
  }

  return (
    <section className="flex flex-col gap-16 pb-6 xs:pb-24">
      <div className="flex flex-wrap xs:justify-end gap-4">
        <div className="xs-w-full flex-1">
          <SearchForm onSubmit={onSubmit} />
        </div>
        <Button primary className="px-5 text-base" onClick={showExpenses}>
          {t('add_expenses')}
        </Button>
      </div>
      <div>
        <ExpensesInfo />
      </div>
      <div>
        <ExpensesInvoices data={invoicesDummyData} onEdit={editExpenses} />
        <ExpensesForm {...Expenses} hideFun={hideExpenses} />
      </div>
    </section>
  )
}

export default Expenses
