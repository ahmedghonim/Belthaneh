import React from 'react'
import TodayBookingWeb from './web-view'
import MobileViewBox from './mobile-view'
import { TodayBookingViewsProps } from 'components/employees/total-booking/types'

function TodaysBooking({ data }: TodayBookingViewsProps) {
  return (
    <div>
      <TodayBookingWeb data={data} />
      <MobileViewBox data={data} />
    </div>
  )
}
export default TodaysBooking
