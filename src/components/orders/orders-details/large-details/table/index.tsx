import React from 'react'
import { Table } from 'ui'
import { OrdersDetailsType } from '../..'
import useTranslation from 'next-translate/useTranslation'

interface Props {
  data: OrdersDetailsType[]
}

function OrdersDetailsTable({ data }: Props) {
  const { t } = useTranslation('common')
  // dummy data
  const columns = [
    {
      Header: t('common:order_num'),
      accessor: 'orderNum'
    },
    {
      Header: t('common:customer'),
      accessor: 'customer'
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
          {row.original.status}
        </span>
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
