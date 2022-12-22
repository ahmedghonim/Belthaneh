import moment from 'moment'
import useTranslation from 'next-translate/useTranslation'
import { Row } from 'react-table'
import { Table } from 'ui'

export interface CommissionItem {
  id: string
  date: Date
  type: string
  totalAmount: number
  commission: number
}
export interface CommissionTableProps {
  list: CommissionItem[]
}

export default function CommissionTable({ list }: CommissionTableProps) {
  const { t } = useTranslation('common')

  const columns = [
    {
      Header: t('date'),
      Cell: ({ row }: { row: Row<CommissionItem> }) =>
        moment(row.original.date).format('DD/MM/YYYY')
    },
    {
      Header: t('commission'),
      Cell: ({ row }: { row: Row<CommissionItem> }) =>
        `${row.original.commission} ${t('sar')}`
    },
    {
      Header: t('total_amount'),
      accessor: 'totalAmount'
    },
    {
      Header: t('type'),
      Cell: ({ row }: { row: Row<CommissionItem> }) => t(row.original.type)
    }
  ]
  return (
    <Table columns={columns} data={list} noDataMessage={t('no_data_to_show')} />
  )
}
