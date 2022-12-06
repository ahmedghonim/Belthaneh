import React from 'react'
import Trans from 'next-translate/trans'
import { Table } from 'ui'
import { OrdersDetailsType } from '../..'
import useTranslation from 'next-translate/useTranslation'

interface Props {
  data: OrdersDetailsType[]
}

// dummy data
const columns = [
  {
    Header: <Trans i18nKey="common:order_num" />,
    accessor: 'orderNum'
  },
  {
    Header: <Trans i18nKey="common:customer" />,
    accessor: 'customer'
  },
  {
    Header: <Trans i18nKey="common:date" />,
    accessor: 'date'
  },
  {
    Header: <Trans i18nKey="common:order" />,
    accessor: 'order'
  },
  {
    Header: <Trans i18nKey="common:price" />,
    accessor: 'price'
  },
  {
    Header: <Trans i18nKey="common:status" />,
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

function OrdersDetailsTable({ data }: Props) {
  const { t } = useTranslation('common')
  return (
    <div className="hidden sm:block">
      <Table columns={columns} data={data} noDataMessage={t('no_data')} />
    </div>
  )
}

export default OrdersDetailsTable
