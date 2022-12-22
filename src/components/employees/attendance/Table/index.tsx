import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import { Table } from 'ui'
import { AttendanceViewProps } from 'components/employees/attendance/type'

function AttendanceTable({ data }: AttendanceViewProps) {
  const { t } = useTranslation('common')
  const columns = [
    {
      Header: t('date'),
      accessor: 'date'
    },
    {
      Header: t('attendance'),
      accessor: 'attend'
    },
    {
      Header: t('leave'),
      accessor: 'leave'
    },
    {
      Header: t('over_time'),
      accessor: 'overTime'
    }
  ]

  return (
    <div className="xs:hidden">
      <Table data={data} columns={columns} />
    </div>
  )
}

export default AttendanceTable
