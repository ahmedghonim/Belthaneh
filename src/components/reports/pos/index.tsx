import useTranslation from 'next-translate/useTranslation'
import React from 'react'
import { Table } from 'ui'
import ActionsButton from '../components/action-button'
import CollapsedCard from '../components/collapsed-card'
import SearchHeader from '../components/search-header'

function POSReport() {
  const { t } = useTranslation('common')

  const columns = [
    {
      Header: t('employer_name'),
      accessor: 'employer_name'
    },
    {
      Header: t('invoices'),
      accessor: 'invoices'
    },
    {
      Header: t('gross_sales'),
      accessor: 'gross_sales'
    },
    {
      Header: t('discounts'),
      accessor: 'discounts'
    },
    {
      Header: t('refound'),
      accessor: 'refound'
    },
    {
      Header: t('tax'),
      accessor: 'tax'
    },
    {
      Header: t('date'),
      accessor: 'date'
    }
  ]

  const data = [
    {
      employer_name: 123,
      invoices: 'Lotion',
      gross_sales: 50,
      discounts: 20,
      refound: 8,
      tax: '30%',
      date: '10/10/2023'
    },
    {
      employer_name: 123,
      invoices: 'Lotion',
      gross_sales: 50,
      discounts: 20,
      refound: 8,
      tax: '30%',
      date: '10/10/2023'
    }
  ]

  return (
    <div className="space-y-7 xs:pb-24">
      <SearchHeader />
      <div className="xs:hidden">
        <Table columns={columns} data={data} />
      </div>
      <CollapsedCard columns={columns} data={data} keyOfTitle="invoices" />
      <ActionsButton />
    </div>
  )
}

export default POSReport
