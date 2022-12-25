import useTranslation from 'next-translate/useTranslation'
import React from 'react'
import Camera from 'svg/camera.svg'
import Clients from 'svg/clients.svg'
import City from 'svg/city.svg'
import TableActions from 'ui/table/actions'
import CardInfo from './card-info'
import ChartCardContainer from './chart-card-container'
import LineChart from './charts/LineChart'
import BarChart from './charts/bar-chart'
import { Table } from 'ui'
import BookingCard from './booking-card'

interface Data {
  id: string
  branch: string
  date: string
  total: string
  status: string
}
interface RowCellType {
  original: Data
}

function Dashboard() {
  const { t } = useTranslation('common')

  const columns = [
    {
      Header: t('id'),
      accessor: 'id'
    },
    {
      Header: t('branch'),
      accessor: 'branch'
    },
    {
      Header: t('date'),
      accessor: 'date'
    },
    {
      Header: t('total'),
      accessor: 'total'
    },
    {
      Header: t('status'),
      accessor: 'status',
      Cell: ({ row }: { row: RowCellType }) => (
        <span className="text-secondary-100">{row.original.status}</span>
      )
    },
    {
      Header: t('action'),
      Cell: ({ row }: { row: any }) => (
        <TableActions
          onShow={async () => {}}
          onDelete={() => {}}
          onEdit={() => {}}
        />
      )
    }
  ]

  const data: Data[] = [
    {
      id: '#456',
      branch: 'Al-olaia',
      date: '1/11/2022',
      total: '$50',
      status: 'Confirmed'
    },
    {
      id: '#456',
      branch: 'Al-olaia',
      date: '1/11/2022',
      total: '$50',
      status: 'Confirmed'
    },
    {
      id: '#456',
      branch: 'Al-olaia',
      date: '1/11/2022',
      total: '$50',
      status: 'Confirmed'
    },
    {
      id: '#456',
      branch: 'Al-olaia',
      date: '1/11/2022',
      total: '$50',
      status: 'Confirmed'
    }
  ]

  return (
    <div className="flex flex-col gap-7">
      {/* Card info */}
      <div className="flex gap-3 xs:flex-col">
        <CardInfo
          className="!bg-primary-100 text-white"
          title={t('total-booking')}
          total={100}
          progress={40}
          percentage={17}
          icon={<Camera />}
        />
        <CardInfo
          title={t('total_clients')}
          total={100}
          progress={40}
          percentage={17}
          icon={<Clients />}
        />
        <CardInfo
          title={t('total_orders')}
          total={100}
          progress={40}
          percentage={17}
          icon={<City />}
        />
        <CardInfo
          title={t('total_employees')}
          total={100}
          progress={40}
          percentage={17}
          icon={<Clients />}
        />
      </div>
      <div className="flex sm:h-[237px] h-[804px] gap-5  w-full xs:flex-col">
        <ChartCardContainer title="booking_per_month" subTitle="just_updated">
          <BarChart />
        </ChartCardContainer>

        <ChartCardContainer title="monthly_income" subTitle="just_updated">
          <BarChart />
        </ChartCardContainer>

        <ChartCardContainer title="order_per_month" subTitle="just_updated">
          <LineChart />
        </ChartCardContainer>
      </div>

      <h3 className="darK:text-white">{t('today_booking')}</h3>
      <div className="xs:hidden">
        <Table columns={columns} data={data} noDataMessage={t('no_data')} />
      </div>
      <div className="sm:hidden">
        <BookingCard name="ahmed" date={new Date()} order={444} total={333} />
      </div>
    </div>
  )
}

export default Dashboard
