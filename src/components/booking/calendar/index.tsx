import {
  BookingCalendar,
  BookingCalendarProps
} from 'components/booking/calendar/booking-calendar'
import BookingsMobile, {
  BookingsMobileProps
} from 'components/booking/calendar/bookings-mobile'
import Footer from 'components/booking/footer'
import { useEffect, useState } from 'react'
export interface CalendarProps {
  bookingCalendarData: BookingCalendarProps
  bookingsMobileData: BookingsMobileProps
}

export default function Calendar({
  bookingCalendarData,
  bookingsMobileData
}: CalendarProps) {
  const [ssr, setSSR] = useState(true)
  useEffect(() => {
    setSSR(false)
  }, [])

  return !ssr ? (
    <div className="flex flex-col gap-2">
      <BookingCalendar {...bookingCalendarData} />
      <BookingsMobile {...bookingsMobileData} />
      <Footer />
    </div>
  ) : (
    <></>
  )
}
