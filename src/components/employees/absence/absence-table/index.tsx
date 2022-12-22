import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import { Table } from 'ui'

export interface AbsenceItemDataProps {
  date: string
  period: number
  type: string
  reason: string
}

function AbsenceTable({ data }: { data: AbsenceItemDataProps[] }) {
  const { t } = useTranslation('common')

  //  table columns
  const columns = [
    { Header: t('date'), accessor: 'date' },
    { Header: t('period'), accessor: 'period' },
    { Header: t('type'), accessor: 'type' },
    { Header: t('reason'), accessor: 'reason' }
  ]

  return (
    <div className="xs:hidden">
      <Table columns={columns} data={data} />
    </div>
  )
}
export default AbsenceTable
