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
      Header: t('employer'),
      accessor: 'employer'
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
      Header: t('absences'),
      accessor: 'absences'
    },
    {
      Header: t('being_late'),
      accessor: 'being_late'
    },
    {
      Header: t('total_day'),
      accessor: 'total_day'
    },
    {
      Header: t('booking_percentage'),
      accessor: 'booking_percentage'
    },
    {
      Header: t('infraction'),
      accessor: 'infraction'
    },
    {
      Header: t('number_of_clients'),
      accessor: 'number_of_clients'
    }
  ]

  const packagesData = [
    {
      absences: 'Ali',
      being_late: 1,
      total_day: 50,
      booking_percentage: '20%',
      infraction: 8,
      number_of_clients: 30
    },
    {
      absences: 'Ali',
      being_late: 1,
      total_day: 50,
      booking_percentage: '20%',
      infraction: 8,
      number_of_clients: 30
    }
  ]

  const membershipsColumns = [
    {
      Header: t('absences'),
      accessor: 'absences'
    },
    {
      Header: t('being_late'),
      accessor: 'being_late'
    },
    {
      Header: t('total_day'),
      accessor: 'total_day'
    },
    {
      Header: t('booking_percentage'),
      accessor: 'booking_percentage'
    },
    {
      Header: t('infraction'),
      accessor: 'infraction'
    },
    {
      Header: t('number_of_clients'),
      accessor: 'number_of_clients'
    }
  ]

  const membershipsData = [
    {
      absences: 'Ali',
      being_late: 1,
      total_day: 50,
      booking_percentage: '20%',
      infraction: 8,
      number_of_clients: 30
    },
    {
      absences: 'Ali',
      being_late: 1,
      total_day: 50,
      booking_percentage: '20%',
      infraction: 8,
      number_of_clients: 30
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
