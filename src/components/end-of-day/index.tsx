import React from 'react'
import MaleFemaleIcon from 'svg/male-female.svg'
import CalenderIcon from 'svg/brown-calender.svg'
import StoreIcon from 'svg/brown-store.svg'
import LineChartIcon from 'svg/line-chart.svg'
import BrownMessageIcon from 'svg/brown-message.svg'
import MobileCards, { MobileCardsProps } from './mobile-cards'
import { DateInput } from 'ui'
import CardInfo from './card-info'
import ReportTable from './report-table'
import ReportCards from './report-cards'
import useTranslation from 'next-translate/useTranslation'
import {
  bookingColumns,
  bookingData,
  employeesColumns,
  employeesData,
  orderColumns,
  orderTableData
} from './report-table/tables.mock'

export interface EndOfDayProps {
  mobileCardData: MobileCardsProps
}

function EndOfDay({ mobileCardData }: EndOfDayProps) {
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
        <ReportTable
          data={bookingData}
          title={t('booking')}
          columns={bookingColumns.map((_item) => ({
            ..._item,
            Header: t(_item.Header)
          }))}
        />

        <ReportCards />
      </section>

      <section className="flex gap-8 w-full">
        <ReportTable
          data={employeesData}
          title={t('employees')}
          columns={employeesColumns.map((_item) => ({
            ..._item,
            Header: t(_item.Header)
          }))}
        />

        <ReportTable
          data={orderTableData}
          title={t('All_Orders')}
          columns={orderColumns.map((_item) => ({
            ..._item,
            Header: t(_item.Header)
          }))}
        />
      </section>
      <section className="sm:hidden flex flex-col gap-4">
        <MobileCards {...mobileCardData} />
      </section>
    </div>
  )
}

export default EndOfDay
