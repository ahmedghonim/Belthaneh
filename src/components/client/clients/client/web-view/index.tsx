import React from 'react'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'
import TableActions from 'ui/table/actions'
import { Table } from 'ui'
import { DataPropType } from 'components/client/clients/types'

function WebData({ data }: DataPropType) {
  const { t } = useTranslation('common')
  const { push } = useRouter()

  // onView function
  const onShowFunction = async (id: any) => {
    await push(`/admin/client/${id as string}`)
  }

  // onDelete function
  const onDeleteFunction = () => {}

  // onEdit function
  const onEditFunction = () => {}

  // table columns
  const columns = [
    {
      Header: t('phone_number'),
      accessor: 'phoneNum'
    },
    {
      Header: t('name'),
      accessor: 'name'
    },
    {
      Header: t('total_visits'),
      accessor: 'totalVisits'
    },
    {
      Header: t('total_sales'),
      accessor: 'totalSales'
    },
    {
      Header: t('notes'),
      accessor: 'notes'
    },
    {
      id: 'action',
      Header: t('action'),
      Cell: ({ row }: { row: any }) => (
        <TableActions
          onView={async () => await onShowFunction(row.original.id)}
          onDelete={onDeleteFunction}
          onEdit={onEditFunction}
        />
      )
    }
  ]
  return (
    <div className="xs:hidden">
      <Table columns={columns} data={data} noDataMessage={t('no_data')} />
    </div>
  )
}

export default WebData
