import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import { PurchasesInvoicesDataProps } from 'components/accounting/purchase/type'
import { Table } from 'ui'
import TableActions from 'ui/table/actions'

function PurchasesWebView({ data }: PurchasesInvoicesDataProps) {
  const { t } = useTranslation('common')

  // Table Actions Handlers
  const onDeleteFun = () => {}
  const onShowFun = () => {}
  const onEditFun = () => {}

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
          onShow={() => onShowFun}
          onEdit={() => onEditFun}
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

export default PurchasesWebView
