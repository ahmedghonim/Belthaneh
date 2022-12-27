import React from 'react'
import { Views } from 'react-big-calendar'
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import BookingCard from 'components/booking/calendar/booking-card'
import { DynamicSchedule, DynamicScheduleData } from 'ui/dynamic-schedule'
import useTranslation from 'next-translate/useTranslation'
import moment from 'moment'
import Avatar from 'ui/avatar'

export interface KeyLabelItem {
  value: string
  label: string
}
export interface Employee {
  link: string
  img: string
  employeeName: string
  resourceId: string
}

export interface BookingItem {
  title: string
  id: string
  start: Date
  end: Date
  services: KeyLabelItem[]
  employee: KeyLabelItem
  resourceId: string
  client: KeyLabelItem
  phone: string
  status: 'paid' | 'notPaid' | 'fromApp'
  handleEdit: () => void
  handleDelete: () => void
}

export interface BookingCalendarData {
  startOfDay?: Date | null
  endOfDay?: Date | null
  step?: number | null
  employees?: Employee[] | null
  bookingList?: BookingItem[] | null
}
export interface BookingCalendarProps {
  data?: BookingCalendarData | null
  moveEvent: ({
    event,
    start,
    end
  }: {
    event: object
    start: Date | string
    end: Date | string
    isAllDay: boolean
  }) => void
}

export function BookingCalendar({ data, moveEvent }: BookingCalendarProps) {
  const { employees, bookingList, startOfDay, endOfDay, step } = data ?? {}
  const { t } = useTranslation('common')

  const eventStyleGetter = ({ status }: { status: string }) => {
    return {
      style: {
        background: 'transparent',
        padding: 0,
        border: 'none'
      }
    }
  }
  const ResourceHeader = ({ resource }: { resource: Employee }) => {
    return (
      <div className="flex flex-col items-center justify-center">
        <Avatar
          alt={resource?.employeeName ?? 'employee'}
          src={resource?.img}
        />
        <span>{resource?.employeeName}</span>
      </div>
    )
  }

  const TimeGutterHeader = () => {
    return <span>{t('time')}</span>
  }
  const EventComponent = ({ event }: { event: BookingItem }) => {
    return BookingCard({
      ...event,
      handleDelete: event.handleDelete,
      handleEdit: event.handleEdit
    })
  }

  const scheduleData: DynamicScheduleData<BookingItem, Employee> | null = {
    start: new Date(startOfDay ?? ''),
    views: [],
    end: new Date(endOfDay ?? ''),
    defaultDate: new Date(startOfDay ?? ''),
    defaultView: Views.DAY,
    events:
      bookingList?.map((_item) => ({
        ..._item,
        end: moment(_item.end).add('minute', 5)
      })) ?? [],
    resourceIdAccessor: 'resourceId',
    resourceTitleAccessor: 'employeeName',
    resources: employees ?? [],
    step: step ?? 15,
    ResourceHeader,
    eventStyleGetter,
    EventComponent,
    TimeGutterHeader,
    Toolbar: null
  }

  return (
    <div className="sm:block hidden ">
      <DynamicSchedule data={scheduleData} onEventDrop={moveEvent} />
    </div>
  )
}
