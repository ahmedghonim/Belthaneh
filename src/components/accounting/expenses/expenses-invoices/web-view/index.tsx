import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import { Table } from 'ui'
import TableActions from 'ui/table/actions'
import { ExpensesInvoicesPropsType } from 'components/accounting/expenses/type'

function ExpensesWebView({ data, onEdit }: ExpensesInvoicesPropsType) {
  const { t } = useTranslation('common')

  // Table Actions Handlers
  const onDeleteFun = () => {}
  const onShowFun = () => {}

  const columns = [
    {
      Header: t('invoice_no'),
      accessor: 'invoiceNo'
    },
    {
      Header: t('clause'),
      accessor: 'clause'
    },
    {
      Header: t('cost'),
      accessor: 'Cost'
    },
    {
      Header: t('account_source'),
      accessor: 'source'
    },

    {
      Header: t('date'),
      accessor: 'date'
    },
    {
      Header: t('action'),
      Cell: () => (
        <TableActions
          onView={() => onShowFun}
          onEdit={onEdit}
          onDelete={() => onDeleteFun}
        />
      )
    }
  ]

  return (
    <div className="xs:hidden">
      <Table data={data} columns={columns} />
    </div>
  )
}

export default ExpensesWebView
