import React from 'react'
import { cva } from 'class-variance-authority'
import Edit from 'svg/edit.svg'
import Delete from 'svg/delete.svg'
import Avatar from 'ui/avatar'
import {
  BookingItem,
  Employee
} from 'components/booking/calendar/booking-calendar'

interface BookingCardMobileProps {
  employee: Employee
  bookings: BookingItem[]
}

const bgClasses = cva('relative rounded-md', {
  variants: {
    status: {
      paid: 'bg-primary-100',
      notPaid: 'bg-secondary-100',
      fromApp: 'bg-dark-500 text-dark-100'
    }
  },
  defaultVariants: {
    status: 'notPaid'
  }
})

const EventCard = ({
  status,
  children
}: {
  status: BookingItem['status']
  children?: React.ReactNode
}) => <div className={bgClasses({ status })}>{children}</div>

export default function BookingCardMobile({
  bookings,
  employee
}: BookingCardMobileProps) {
  const Body = ({ services, client, phone, title }: BookingItem) => (
    <div className="flex flex-col gap-1 p-2">
      <span className="text-xs text-white font-semibold">{title}</span>
      <span className="text-xs text-white font-semibold">
        {services?.map((_item) => _item.label)?.join(',')}
      </span>
      <span className="text-xs text-white font-semibold">{client.label}</span>
      <span className="text-xs text-white font-semibold">{phone}</span>
    </div>
  )

  const Staff = () => (
    <div className="flex flex-col items-center justify-center">
      <Avatar alt={employee.employeeName ?? 'employee'} src={employee.img} />
      <span>{employee.employeeName}</span>
      <div className="h-[1px] w-full bg-dark-300 my-[10px] hidden sm:block"></div>
    </div>
  )

  return (
    <div className="flex flex-col gap-4 ">
      <Staff />
      {bookings?.map(
        (_item) =>
          _item.resourceId === employee.resourceId && (
            <EventCard status={_item.status} key={_item.id}>
              <div className="absolute flex gap-2 top-0 rtl:left-0 ltr:right-0 bg-white rounded-tl rounded-tr ltr:rounded-bl-[30px] rtl:rounded-br-[30px] p-2">
                <button onClick={_item.handleEdit}>
                  <Edit className="stroke-secondary-100 scale-75" />
                </button>
                <button onClick={_item.handleDelete}>
                  <Delete className="fill-secondary-100 scale-125" />
                </button>
              </div>
              <Body {..._item} />
            </EventCard>
          )
      )}
    </div>
  )
}
