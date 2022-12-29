import React from 'react'
import { cva } from 'class-variance-authority'
import Avatar from 'ui/avatar'
import {
  BookingItem,
  Employee
} from 'components/booking/calendar/booking-calendar'
import Actions from 'components/common/actions'

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
              <div className="absolute flex gap-1 top-0 bg-white bg-opacity-80 p-1 ltr:right-[0px] rtl:left=[0px]  ltr:rounded-tr-md rtl:rounded-tl-md ltr:rounded-bl-[15px] rtl:rounded-br-[15px]  ">
                <Actions
                  className="stroke-secondary-100"
                  onDelete={_item.handleDelete}
                  onEdit={_item.handleEdit}
                />
              </div>
              <Body {..._item} />
            </EventCard>
          )
      )}
    </div>
  )
}
