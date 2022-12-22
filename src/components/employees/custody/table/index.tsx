import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import TableActions from 'ui/table/actions'
import { Table } from 'ui'
import moment from 'moment'
export interface CustodySingleObjectType {
  custody: string
  amount: number
  category: string
  price: number
  date: Date
  id?: number | string
  onEdit: () => void
  onDelete: () => void
}

function CustodyWebView({ data }: { data: CustodySingleObjectType[] }) {
  const { t } = useTranslation('common')

  // table columns
  const columns = [
    {
      Header: t('custody'),
      accessor: 'custody'
    },
    {
      Header: t('amount'),
      accessor: 'amount'
    },
    {
      Header: t('category'),
      accessor: 'category'
    },
    {
      Header: t('price'),
      accessor: 'price'
    },
    {
      Header: t('date'),
      Cell: ({ row }: { row: any }) =>
        moment(row.original.date).format('DD/MM/YYYY')
    },
    {
      id: 'action',
      Header: t('action'),
      Cell: ({ row }: { row: any }) => (
        <TableActions
          onDelete={row.original.onDelete}
          onEdit={row.original.onEdit}
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

export default CustodyWebView
