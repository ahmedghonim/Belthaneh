import useTranslation from 'next-translate/useTranslation'
import React from 'react'
import { Table } from 'ui'
import ActionsButton from '../components/action-button'
import CollapsedCard from '../components/collapsed-card'
import SearchHeader from '../components/search-header'

function SalesReport() {
  const { t } = useTranslation('common')

  const columns = [
    {
      Header: t('products_sell'),
      accessor: 'products_sell'
    },
    {
      Header: t('services_sell'),
      accessor: 'services_sell'
    },
    {
      Header: t('packages_sell'),
      accessor: 'packages_sell'
    },
    {
      Header: t('memberships_sell'),
      accessor: 'memberships_sell'
    },
    {
      Header: t('client_number'),
      accessor: 'client_number'
    },
    {
      Header: t('total_profit'),
      accessor: 'total_profit'
    }
  ]

  const data = [
    {
      products_sell: 123,
      services_sell: 50,
      packages_sell: 20,
      memberships_sell: 8,
      client_number: 30,
      total_profit: 30
    },
    {
      products_sell: 123,
      services_sell: 50,
      packages_sell: 20,
      memberships_sell: 8,
      client_number: 30,
      total_profit: 30
    }
  ]

  return (
    <div className="space-y-7 xs:pb-5">
      <SearchHeader />
      <div className="xs:hidden">
        <Table columns={columns} data={data} />
      </div>
      <CollapsedCard columns={columns} data={data} keyOfTitle="products_sell" />
      <ActionsButton />
    </div>
  )
}

export default SalesReport
