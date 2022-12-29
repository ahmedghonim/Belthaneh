import React from 'react'
import { Table } from 'ui'
import { OrdersDetailsType } from 'components/orders/orders-details'
import useTranslation from 'next-translate/useTranslation'
import TableActions from 'ui/table/actions'
import { useRouter } from 'next/router'
import { Row } from 'react-table'

interface Props {
  data: OrdersDetailsType[]
}

// dummy data

function OrdersDetailsTable({ data }: Props) {
  const { push, pathname } = useRouter()
  const { t } = useTranslation('common')
  const columns = [
    {
      Header: t('common:order_num'),
      accessor: 'orderNum'
    },
    {
      Header: t('common:client'),
      accessor: 'client'
    },
    {
      Header: t('common:date'),
      accessor: 'date'
    },
    {
      Header: t('common:order'),
      accessor: 'order'
    },
    {
      Header: t('common:price'),
      accessor: 'price'
    },
    {
      Header: t('common:status'),
      accessor: 'status',
      Cell: ({ row }: { row: any }) => (
        <span
          className={`${
            row.original.status === 'completed'
              ? 'text-green-600'
              : 'text-[#F92618]'
          }`}
        >
          {row.original.status === 'canceled' ? t('Canceled') : t('Completed')}
        </span>
      )
    },
    {
      id: 'edit',
      Header: '',
      Cell: ({ row }: { row: Row<OrdersDetailsType> }) => (
        <TableActions
          onView={() => {
            void push(`/${pathname}/${row.original.id}`)
          }}
        />
      )
    }
  ]
  return (
    <div className="hidden sm:block">
      <Table columns={columns} data={data} noDataMessage={t('no_data')} />
    </div>
  )
}

export default OrdersDetailsTable
