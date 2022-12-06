import useTranslation from 'next-translate/useTranslation'
import React from 'react'
import Table from 'ui/table'
import TableActions from './table-actions'

interface Props {
  data: object[]
}

function SalesTable({ data }: Props) {
  const { t } = useTranslation('common')
  const columns = [
    {
      Header: t('invoice_no'),
      accessor: 'invoice_no'
    },
    {
      Header: t('clause'),
      accessor: 'clause'
    },
    {
      Header: t('cost'),
      accessor: 'cost'
    },
    {
      Header: t('date'),
      accessor: 'date'
    },
    {
      Header: t('state'),
      Cell: () => <TableActions />
    }
  ]

  return (
    <div>
      <Table columns={columns} data={data} />
    </div>
  )
}

export default SalesTable
