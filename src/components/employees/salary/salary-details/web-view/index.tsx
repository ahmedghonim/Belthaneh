import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import { SalaryViewProps } from 'components/employees/salary/type'
import { Table } from 'ui'

function SalaryWebView({ data }: SalaryViewProps) {
  const { t } = useTranslation('common')

  // table columns
  const columns = [
    { Header: t('basic_salary'), accessor: 'basic' },
    { Header: t('over_time'), accessor: 'overTime' },
    { Header: t('days_of_absence'), accessor: 'absence' },
    { Header: t('deduction'), accessor: 'deduction' },
    { Header: t('total'), accessor: 'total' }
  ]

  return (
    <div className="xs:hidden">
      <Table columns={columns} data={data} />
    </div>
  )
}

export default SalaryWebView
