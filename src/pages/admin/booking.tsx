import React, { useState } from 'react'
import BookingComponent, { BookingProps } from 'components/booking'
import {
  data as calendarDataMock,
  bookingCardMobileData as bookingCardMobileDataMock
} from 'components/booking/calendar/booking-calendar/index.mock'
import waitingListDataMock from 'components/booking/waiting-list/waiting-list-table/index.mock'
import waitingListMobileMock from 'components/booking/waiting-list/waiting-list-mobile/index.mock'
import {
  BookingCalendarHeaderData,
  BookingCalendarHeaderProps,
  Employee
} from 'components/booking/booking-header'
import { DateObject } from 'react-multi-date-picker'
import { FormValues as AppointmentFormValues } from 'components/booking/forms/appointment-form'
import { FormValuesWaitingForm } from 'components/booking/forms/waiting-form'
import { FormikHelpers } from 'formik'
import { useFullScreenHandle } from 'react-full-screen'
import { BookingItem } from 'components/booking/calendar/booking-calendar/index'
import { AppointmentFormModalProps } from 'components/booking/forms/appointment-form-modal'
import {
  employees,
  services,
  customers
} from 'components/booking/forms/appointment-form/index.mock'
import { WaitingListItem } from 'components/booking/waiting-list/waiting-list-table'
import { WaitingListCardProps } from 'components/booking/waiting-list/waiting-list-card'
import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'
import moment from 'moment'
import { useRouter } from 'next/router'

export default function BookingController() {
  const { push } = useRouter()
  const { t } = useTranslation('common')
  const [bookingsCalendar, setBookingsCalendar] = useState(
    calendarDataMock.bookingList
  )
  const [openAppointment, setOpenAppointment] = useState<boolean>(false)
  const [openWaitingList, setOpenWaitingList] = useState<boolean>(false)
  const [openReportModal, setOpenReportModal] = useState<boolean>(false)
  const [currentHeaderData, setCurrentHeaderDate] = useState<Date>(new Date())
  const [currentBookingType, setCurrentBookingType] =
    useState<string>('calendar')
  const [currentEmployees, setCurrentEmployees] = useState<Employee[]>([])
  const [appointmentData, setAppointmentData] = useState<
    AppointmentFormValues | undefined
  >(undefined)

  const handle = useFullScreenHandle()

  const moveEvent = (props: any) => {
    const { event, start, end } = props
    const updatedEvent = {
      ...event,
      start,
      end,
      resourceId: props.resourceId,
      title: `${moment(start).format('hh:mm A')} - ${moment(end).format(
        'hh:mm A'
      )}`
    }
    setBookingsCalendar((prevEvents) => {
      const filtered = prevEvents.filter((item) => item.id !== event.id)
      return [...filtered, updatedEvent]
    })
  }
  const handleCancelAppointment = () => {
    setOpenAppointment(false)
  }
  const onSubmitAppointment = (
    value: AppointmentFormValues,
    helpers?: FormikHelpers<any>
  ) => {
    console.log(value)
    setOpenAppointment(false)
  }
  const handleCancelWaitingList = () => {
    setOpenWaitingList(false)
  }
  const onSubmitWaitingList = (
    value: FormValuesWaitingForm,
    helpers: FormikHelpers<FormValuesWaitingForm>
  ) => {
    console.log(value)
  }
  const handleClickAddAppointment = () => {
    setOpenAppointment(true)
  }
  const handleClickAddWaitingList = () => {
    setOpenWaitingList(true)
  }
  const handleToggleBookingType = () => {
    setCurrentBookingType(
      currentBookingType === 'calendar' ? 'waitingList' : 'calendar'
    )
  }
  const handleChangeDateHeader = ({ date }: DateObject) => {
    setCurrentHeaderDate(date as Date)
  }
  const handleSelectEmployees = (employees: unknown) => {
    setCurrentEmployees(employees as Employee[])
  }
  const handleResizeScreen = () => {
    void handle.enter()
  }
  const handleDeleteBooking = (item: string) => {
    console.log(item, '==> item to delete')
  }
  const handleEditBooking = (item: BookingItem) => {
    setAppointmentData({
      ...item,
      date: new Date(item.start).toLocaleDateString('en-Us', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
      }),
      newUser: null
    })
    setOpenAppointment(true)
  }
  const handleDeleteWaitingList = (item: string) => {
    console.log(item, '==> item to delete')
  }
  const handleEditWaitingList = (
    item: WaitingListItem | WaitingListCardProps
  ) => {
    setOpenWaitingList(true)
  }
  const confirmEndReport = () => {
    setOpenReportModal(false)

    void push('/admin/booking/end-of-day')
  }
  const cancelEndReport = () => {
    setOpenReportModal(false)
  }
  const headerData: BookingCalendarHeaderProps = {
    date: currentHeaderData,
    employees,
    currentType: currentBookingType as BookingCalendarHeaderData['currentType'],
    currentEmployees,
    addNewBooking: handleClickAddAppointment,
    addToWaitingList: handleClickAddWaitingList,
    handleToggleBookingType,
    handleSelectEmployees,
    handleChangeDate: handleChangeDateHeader,
    handleResizeScreen,
    handleReport: () => {
      setOpenReportModal(true)
    }
  }

  const appointmentModalData: AppointmentFormModalProps = {
    handleCancel: handleCancelAppointment,
    onSubmit: onSubmitAppointment,
    open: openAppointment,
    initialValues: appointmentData,
    employees,
    customers,
    services
  }
  const waitingFormModalData = {
    handleCancel: handleCancelWaitingList,
    onSubmit: onSubmitWaitingList,
    open: openWaitingList
  }

  const bookingCalendarData = {
    ...calendarDataMock,
    bookingList: bookingsCalendar.map((_item) => ({
      ..._item,
      handleDelete: () => handleDeleteBooking(_item.id),
      handleEdit: () => handleEditBooking(_item)
    }))
  }
  const bookingCalendarDataMobile = {
    ...bookingCardMobileDataMock,
    bookings: bookingCardMobileDataMock.bookings.map((_item) => ({
      ..._item,
      handleDelete: () => handleDeleteBooking(_item.id),
      handleEdit: () => handleEditBooking(_item)
    }))
  }
  const waitingList = waitingListDataMock.map((_item) => {
    return {
      ..._item,
      actions: {
        handleDelete: () => handleDeleteWaitingList(_item.id ?? ''),
        handleEdit: () => handleEditWaitingList(_item)
      }
    }
  })
  const waitingListMobile = waitingListMobileMock.map((_item) => ({
    ..._item,
    actions: {
      handleDelete: () => handleDeleteWaitingList(_item.id ?? ''),
      handleEdit: () => handleEditWaitingList(_item)
    }
  }))

  const data: BookingProps = {
    waitingListData: {
      waitingListCardData: waitingListMobile,
      waitingListTableProps: waitingList
    },
    calendarData: {
      bookingsMobileData: bookingCalendarDataMobile,
      bookingCalendarData: { data: bookingCalendarData, moveEvent }
    },
    bookingCalendarHeaderData: headerData,
    appointmentFormModalData: appointmentModalData,
    waitingFormModalData,
    handle,
    endReportProps: {
      openReportModal,
      confirmEndReport,
      cancelEndReport
    }
  }

  return (
    <>
      <Head>
        <title>{t('booking')}</title>
      </Head>
      <BookingComponent {...data} />
    </>
  )
}
