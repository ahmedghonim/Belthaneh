import useTranslation from 'next-translate/useTranslation'
import React from 'react'
import { Table, Text } from 'ui'
import TableActions, { Props as ActionProps } from 'ui/table/actions'
// import TableActions from './table-actions'

interface Props {
  data: object[]
  title: string
}

function ReportTable({ data, title }: Props) {
  const { t } = useTranslation('common')
  const columns = [
    {
      Header: t('employees'),
      accessor: 'employees'
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
      accessor: 'status'
    },
    {
      Header: t('actions'),
      Cell: ({ row }: { row: { original: object[] } }) => (
        <TableActions {...(row.original as ActionProps)} />
      )
    }
  ]
  return (
    <div className="space-y-2 flex-1 xs:hidden">
      <Text as="h2" className="capitalize">
        {t(title)}
      </Text>
      <Table
        columns={columns}
        data={data}
        noDataMessage={t('no_order_today')}
      />
    </div>
  )
}

export default ReportTable
