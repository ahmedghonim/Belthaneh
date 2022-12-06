import React from 'react'
import {
  BookingCalendarHeader,
  BookingCalendarHeaderProps
} from 'components/booking/booking-header'
import Calendar, { CalendarProps } from 'components/booking/calendar'
import WaitingList, { WaitingListProps } from 'components/booking/waiting-list'
import AppointmentFormModal, {
  AppointmentFormModalProps
} from 'components/booking/forms/appointment-form-modal'
import WaitingFormModal, {
  WaitingFormModalProps
} from 'components/booking/forms/waiting-form-modal'
import { FullScreen, FullScreenHandle } from 'react-full-screen'

export interface BookingProps {
  waitingListData: WaitingListProps
  calendarData: CalendarProps
  appointmentFormModalData: AppointmentFormModalProps
  waitingFormModalData: WaitingFormModalProps
  bookingCalendarHeaderData: BookingCalendarHeaderProps
  handle: FullScreenHandle
}

export default function Booking({
  handle,
  waitingListData,
  calendarData,
  appointmentFormModalData,
  waitingFormModalData,
  bookingCalendarHeaderData
}: BookingProps) {
  return (
    <div>
      <BookingCalendarHeader {...bookingCalendarHeaderData}>
        <FullScreen handle={handle}>
          <div className="py-4">
            {bookingCalendarHeaderData.currentType === 'waitingList' && (
              <WaitingList {...waitingListData} />
            )}
            {bookingCalendarHeaderData.currentType === 'calendar' && (
              <Calendar {...calendarData} />
            )}
            <AppointmentFormModal {...appointmentFormModalData} />
            <WaitingFormModal {...waitingFormModalData} />
          </div>
        </FullScreen>
      </BookingCalendarHeader>
    </div>
  )
}
