import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import { Table } from 'ui'
import { TodayBookingViewsProps } from 'components/employees/total-booking/types'

function TodayBookingWeb({ data }: TodayBookingViewsProps) {
  const { t } = useTranslation('common')
  // table columns
  const columns = [
    {
      Header: t('clients'),
      accessor: 'client'
    },
    {
      Header: t('date'),
      accessor: 'date'
    },
    {
      Header: t('services'),
      accessor: 'service'
    },
    {
      Header: t('price'),
      accessor: 'price'
    },
    {
      Header: t('status'),
      accessor: 'status',
      Cell: ({ row }: { row: any }) => (
        <span
          className={`${
            ['completed'].includes(row.original.status)
              ? 'text-[#03FF1C]'
              : 'text-[#F92618]'
          }`}
        >
          {row.original.status}
        </span>
      )
    }
  ]

  return (
    <div className="xs:hidden">
      <Table columns={columns} data={data} />
    </div>
  )
}

export default TodayBookingWeb
