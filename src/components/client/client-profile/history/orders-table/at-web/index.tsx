import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import { OrdersTableType } from 'components/client/client-profile/types'
import { Table } from 'ui'
import TableActions from 'ui/table/actions'

interface Props {
  data: OrdersTableType[]
}

function WebClientOrders({ data }: Props) {
  const { t } = useTranslation('common')

  const columns = [
    {
      Header: t('order_no'),
      accessor: 'OrderNo'
    },
    {
      Header: t('client'),
      accessor: 'client'
    },
    {
      Header: t('date'),
      accessor: 'date'
    },
    {
      Header: t('order'),
      accessor: 'order'
    },
    {
      Header: t('pricing'),
      accessor: 'pricing'
    },
    {
      Header: t('status'),
      accessor: 'status',
      Cell: ({ row }: { row: any }) => (
        <span
          className={`${
            ['completed', 'paid'].includes(row.original.status)
              ? 'text-success-200'
              : 'text-[#F92618]'
          }`}
        >
          {row.original.status}
        </span>
      )
    },
    {
      id: 'edit',
      Header: '',
      Cell: () => <TableActions onView={() => {}} />
    }
  ]

  return (
    <div className="xs:hidden">
      <Table data={data} columns={columns} noDataMessage={t('no_data')} />
    </div>
  )
}

export default WebClientOrders
