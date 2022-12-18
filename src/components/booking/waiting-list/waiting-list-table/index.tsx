import React from 'react'
import { Row } from 'react-table'
import Table from 'ui/table'
import TableActions from 'components/booking/waiting-list/table-actions'
import useTranslation from 'next-translate/useTranslation'

export interface WaitingListItem {
  id: string
  name: string
  phone: string
  notes?: string
  actions?: any
}
export interface WaitingListTableProps {
  waitingList?: WaitingListItem[]
}

export default function WaitingListTable({
  waitingList = []
}: WaitingListTableProps) {
  const { t } = useTranslation('common')

  const columns = [
    {
      Header: t('index'),
      accessor: 'id'
    },
    {
      Header: t('name'),
      accessor: 'name'
    },
    {
      Header: t('phone'),
      accessor: 'phone'
    },
    {
      Header: t('notes'),
      accessor: 'notes'
    },
    {
      Header: t('action'),
      Cell: ({ row }: { row: Row<WaitingListItem> }) => (
        <TableActions
          onClickDelete={row.original.actions.handleDelete}
          onClickEdit={row.original.actions.handleEdit}
        />
      )
    }
  ]

  return (
    <div className="sm:block hidden">
      <Table
        columns={columns}
        data={waitingList}
        noDataMessage={t('no_data_to_show')}
      />
    </div>
  )
}
