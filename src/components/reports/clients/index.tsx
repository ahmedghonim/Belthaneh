import useTranslation from 'next-translate/useTranslation'
import React from 'react'
import { Table } from 'ui'
import ActionsButton from '../components/action-button'
import CollapsedCard from '../components/collapsed-card'
import SearchHeader from '../components/search-header'

function ClientsReport() {
  const { t } = useTranslation('common')

  const columns = [
    {
      Header: t('client_name'),
      accessor: 'client_name'
    },
    {
      Header: t('services'),
      accessor: 'services'
    },
    {
      Header: t('packages'),
      accessor: 'packages'
    },
    {
      Header: t('memberships'),
      accessor: 'memberships'
    },
    {
      Header: t('client_number'),
      accessor: 'client_number'
    },
    {
      Header: t('client_total_sales'),
      accessor: 'client_total_sales'
    }
  ]

  const data = [
    {
      client_name: 'Hanaa',
      services: 50,
      packages: 20,
      memberships: 8,
      client_number: 30,
      client_total_sales: 30
    },
    {
      client_name: 'Hanaa',
      services: 50,
      packages: 20,
      memberships: 8,
      client_number: 30,
      client_total_sales: 30
    }
  ]

  return (
    <div className="space-y-7 pb-20">
      <SearchHeader />
      <div className="xs:hidden">
        <Table columns={columns} data={data} />
      </div>
      <CollapsedCard columns={columns} data={data} keyOfTitle="client_name" />
      <ActionsButton />
    </div>
  )
}

export default ClientsReport
