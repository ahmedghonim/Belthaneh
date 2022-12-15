import EmployeesReport from 'components/reports/employees'
import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'
import React from 'react'

function Employees() {
  const { t } = useTranslation('pages-title')
  return (
    <>
      <Head>
        <title>{t('reports_employees')}</title>
      </Head>
      <EmployeesReport />
    </>
  )
}

export default Employees
