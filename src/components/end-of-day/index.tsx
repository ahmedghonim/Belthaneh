import React from 'react'
import MaleFemaleIcon from 'svg/male-female.svg'
import CalenderIcon from 'svg/brown-calender.svg'
import StoreIcon from 'svg/brown-store.svg'
import LineChartIcon from 'svg/line-chart.svg'
import BrownMessageIcon from 'svg/brown-message.svg'
import TableAsCard from './table-as-card'
import { DateInput } from 'ui'
import CardInfo from './card-info'
import ReportTable from './report-table'
import ReportCards from './report-cards'
import useTranslation from 'next-translate/useTranslation'

function EndOfDay() {
  const { t } = useTranslation('common')

  const cardStaticData = [
    {
      title: 'client_day',
      subTitle: 'new',
      icon: <MaleFemaleIcon />
    },
    {
      title: 'employees',
      subTitle: 'Absent',
      icon: <MaleFemaleIcon />
    },
    {
      title: 'booking',
      subTitle: '%',
      icon: <CalenderIcon />
    },
    {
      title: 'product_sales',
      subTitle: '%',
      icon: <StoreIcon />
    },
    {
      title: 'evaluation',
      subTitle: '%',
      icon: <LineChartIcon />
    },
    {
      title: 'comments',
      subTitle: '%',
      icon: <BrownMessageIcon />
    }
  ]

  const cardData = [
    {
      progress: 2,
      current: 13
    },
    {
      progress: 2,
      current: 13
    },
    {
      progress: 2,
      current: 13
    },
    {
      progress: 2,
      current: 13
    },
    {
      progress: 2,
      current: 13
    },
    {
      progress: 2,
      current: 13
    }
  ]
  const data = [
    {
      employees: 'Saa fahad',
      date: '5/11/2022',
      order: 'Resistance Bain EX',
      pricing: '$120',
      status: 'Completed',
      onEdit: () => undefined,
      onDelete: () => undefined
    },
    {
      employees: 'Saa fahad',
      date: '5/11/2022',
      order: 'Resistance Bain EX',
      pricing: '$120',
      status: 'Cancelled',
      onEdit: () => undefined,
      onDelete: () => undefined
    }
  ]
  return (
    <div className="space-y-7">
      <div className="w-44">
        <DateInput name="date" />
      </div>

      <section className="flex flex-wrap w-full gap-4 sm:h-28">
        {cardData.map((item, index) => (
          <CardInfo key={index} {...cardStaticData[index]} {...item} />
        ))}
      </section>

      <section className="flex gap-8 w-full">
        <ReportTable data={data} title={t('booking')} />

        <ReportCards />
      </section>

      <section className="flex gap-8 w-full">
        <ReportTable data={data} title={t('employees')} />

        <ReportTable data={[]} title={t('All_Orders')} />
      </section>
      <section className="sm:hidden flex flex-col gap-4">
        <TableAsCard name="booking" />
        <TableAsCard name="orders" />
        <TableAsCard name="products" />
        <TableAsCard name="employees" />
      </section>
    </div>
  )
}

export default EndOfDay
