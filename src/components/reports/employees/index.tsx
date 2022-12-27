import useTranslation from 'next-translate/useTranslation'
import React, { useState } from 'react'
import { Table, Tabs } from 'ui'
import { TabProps } from 'ui/tabs/types'
import ActionsButton from '../components/action-button'
import CollapsedCard from '../components/collapsed-card'
import SearchHeader from '../components/search-header'

function EmployeesReport() {
  const [tabsActive, setTabsActive] = useState<'finance' | 'hr'>('finance')
  const { t } = useTranslation('common')

  const tabsList: TabProps[] = [
    {
      label: t('finance'),
      isActive: tabsActive === 'finance',
      onClick: () => {
        setTabsActive('finance')
      }
    },
    {
      label: t('hr'),
      isActive: tabsActive === 'hr',
      onClick: () => {
        setTabsActive('hr')
      }
    }
  ]

  const financeColumns = [
    {
      Header: t('employer_name'),
      accessor: 'employer_name'
    },
    {
      Header: t('salary'),
      accessor: 'salary'
    },
    {
      Header: t('deductions'),
      accessor: 'deductions'
    },
    {
      Header: t('products_bounce'),
      accessor: 'products_bounce'
    },
    {
      Header: t('services_bounce'),
      accessor: 'services_bounce'
    },
    {
      Header: t('extra_time_commission'),
      accessor: 'extra_time_commission'
    },
    {
      Header: t('paid_amount'),
      accessor: 'paid_amount'
    },
    {
      Header: t('revenues'),
      accessor: 'revenues'
    }
  ]

  const financeData = [
    {
      employer_name: 'All',
      salary: 10000,
      deductions: 50,
      products_bounce: 20,
      services_bounce: 8,
      extra_time_commission: 30,
      paid_amount: 30,
      revenues: 30
    },
    {
      employer_name: 'All',
      salary: 10000,
      deductions: 50,
      products_bounce: 20,
      services_bounce: 8,
      extra_time_commission: 30,
      paid_amount: 30,
      revenues: 30
    }
  ]

  const hrColumns = [
    {
      Header: t('employer_name'),
      accessor: 'employer_name'
    },
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

  const hrData = [
    {
      employer_name: 'All',
      absences: 'Ali',
      being_late: 1,
      total_day: 50,
      booking_percentage: '20%',
      infraction: 8,
      number_of_clients: 30
    },
    {
      employer_name: 'All',
      absences: 'Ali',
      being_late: 1,
      total_day: 50,
      booking_percentage: '20%',
      infraction: 8,
      number_of_clients: 30
    }
  ]

  const tableColumns = () => {
    if (tabsActive === 'finance') return financeColumns
    return hrColumns
  }
  const tableData = () => {
    if (tabsActive === 'finance') return financeData
    return hrData
  }

  const keyOfTitle = () => {
    if (tabsActive === 'finance') return 'employer_name'
    return 'absences'
  }

  return (
    <div className="space-y-7 xs:pb-5">
      <Tabs tabs={tabsList} />
      <SearchHeader />
      <div className="xs:hidden">
        <Table columns={tableColumns()} data={tableData()} />
      </div>
      <CollapsedCard
        columns={tableColumns()}
        data={tableData()}
        keyOfTitle={keyOfTitle()}
      />
      <ActionsButton />
    </div>
  )
}

export default EmployeesReport
