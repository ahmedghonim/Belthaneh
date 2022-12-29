import useTranslation from 'next-translate/useTranslation'
import React from 'react'
import { Column } from 'react-table'
import { Table, Text } from 'ui'
// import TableActions from './table-actions'

interface Props {
  data: object[]
  title: string
  columns: Array<(Column<object> & object) | any>
}

function ReportTable({ data, title, columns }: Props) {
  const { t } = useTranslation('common')

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
