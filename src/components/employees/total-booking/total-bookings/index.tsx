import React from 'react'
import TotalBookingWebView from './web-view'
import TotalBookingMobileView from './mobile-view'
import { TootalBookingView } from 'components/employees/total-booking/types'

function TotalBookings({ data }: TootalBookingView) {
  return (
    <div>
      <TotalBookingWebView data={data} />
      <TotalBookingMobileView data={data} />
    </div>
  )
}
export default TotalBookings
