import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import BookingBox from '../box'
import { TootalBookingView } from 'components/employees/total-booking/types'

function TotalBookingsWebView({ data }: TootalBookingView) {
  const { t } = useTranslation('common')
  return (
    <div className="flex justify-between xs:hidden">
      <BookingBox type={t('monthly_booking')} num={data.monthly} />
      <BookingBox type={t('weekly_booking')} num={data.weekly} />
      <BookingBox type={t('daily_booking')} num={data.daily} />
    </div>
  )
}
export default TotalBookingsWebView
