import useTranslation from 'next-translate/useTranslation'
import React, { useState } from 'react'
import { Table, Tabs } from 'ui'
import { TabProps } from 'ui/tabs/types'
import ActionsButton from '../components/action-button'
import CollapsedCard from '../components/collapsed-card'
import SearchHeader from '../components/search-header'

function ServicesReport() {
  const [tabsActive, setTabsActive] = useState<
    'services' | 'packages' | 'memberships'
  >('services')
  const { t } = useTranslation('common')

  const tabsList: TabProps[] = [
    {
      label: t('services'),
      isActive: tabsActive === 'services',
      onClick: () => {
        setTabsActive('services')
      }
    },
    {
      label: t('packages'),
      isActive: tabsActive === 'packages',
      onClick: () => {
        setTabsActive('packages')
      }
    },
    {
      label: t('memberships'),
      isActive: tabsActive === 'memberships',
      onClick: () => {
        setTabsActive('memberships')
      }
    }
  ]

  const servicesColumns = [
    {
      Header: t('id'),
      accessor: 'id'
    },
    {
      Header: t('service'),
      accessor: 'service'
    },
    {
      Header: t('quantity_sold'),
      accessor: 'quantity_sold'
    },
    {
      Header: t('services_bounce'),
      accessor: 'services_bounce'
    },
    {
      Header: t('Profits'),
      accessor: 'Profits'
    }
  ]

  const servicesData = [
    {
      id: '#123',
      service: 'Hair Cut',
      employer: 'Ali',
      quantity_sold: 20,
      services_bounce: 8,
      Profits: 30
    },
    {
      id: '#123',
      service: 'Hair Cut',
      employer: 'Ali',
      quantity_sold: 20,
      services_bounce: 8,
      Profits: 30
    }
  ]

  const packagesColumns = [
    {
      Header: t('packages'),
      accessor: 'packages'
    },
    {
      Header: t('id'),
      accessor: 'id'
    },
    {
      Header: t('quantity_sold'),
      accessor: 'quantity_sold'
    },
    {
      Header: t('profits'),
      accessor: 'profits'
    }
  ]

  const packagesData = [
    {
      packages: 'Ali',
      id: 1,
      quantity_sold: 50,
      profits: 50
    },
    {
      packages: 'Ali',
      id: 1,
      quantity_sold: 50,
      profits: 50
    }
  ]

  const membershipsColumns = [
    {
      Header: t('memberships'),
      accessor: 'memberships'
    },
    {
      Header: t('id'),
      accessor: 'id'
    },
    {
      Header: t('quantity_sold'),
      accessor: 'quantity_sold'
    },
    {
      Header: t('profits'),
      accessor: 'profits'
    }
  ]

  const membershipsData = [
    {
      memberships: 'Ali',
      id: 1,
      quantity_sold: 50,
      profits: 50
    },
    {
      memberships: 'Ali',
      id: 1,
      quantity_sold: 50,
      profits: 50
    }
  ]

  const tableColumns = () => {
    if (tabsActive === 'services') return servicesColumns
    if (tabsActive === 'packages') return packagesColumns
    return membershipsColumns
  }
  const tableData = () => {
    if (tabsActive === 'services') return servicesData
    if (tabsActive === 'packages') return packagesData
    return membershipsData
  }

  return (
    <div className="h-full flex flex-col justify-between">
      <div className="space-y-7">
        <Tabs tabs={tabsList} />
        <SearchHeader />
        <Table columns={tableColumns()} data={tableData()} />
        <CollapsedCard
          columns={tableColumns()}
          data={tableData()}
          keyOfTitle="absences"
        />
      </div>
      <ActionsButton />
    </div>
  )
}

export default ServicesReport
