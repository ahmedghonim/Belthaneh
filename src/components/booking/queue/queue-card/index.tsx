import { cva } from 'class-variance-authority'
import React from 'react'
import Avatar from 'ui/avatar'

export interface Employee {
  img: string
  employeeName: string
  resourceId: string
}
type Status = 'paid' | 'notPaid' | 'fromApp'

export interface BookingItem {
  id: string
  services: string[]
  phone: string
  userName: string
  status: Status
  resourceId: string
}

interface QueueCardProps {
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
  status: Status
  children?: React.ReactNode
}) => <div className={bgClasses({ status })}>{children}</div>

export default function QueueCard({ bookings, employee }: QueueCardProps) {
  const Body = ({ services, userName, phone }: BookingItem) => (
    <div className="flex flex-col gap-1 p-2">
      <span className="text-xs text-white font-semibold">
        {services?.join(',')}
      </span>
      <span className="text-xs text-white font-semibold">{userName}</span>
      <span className="text-xs text-white font-semibold">{phone}</span>
    </div>
  )

  const Staff = () => (
    <div className="flex flex-col items-center justify-center">
      <Avatar alt={employee.employeeName ?? 'employee'} src={employee.img} />
      <span>{employee.employeeName}</span>
    </div>
  )

  return (
    <div className="flex flex-col gap-4">
      <Staff />
      {bookings?.map(
        (_item) =>
          _item.resourceId === employee.resourceId && (
            <EventCard status={_item.status} key={_item.id}>
              <Body {..._item} />
            </EventCard>
          )
      )}
    </div>
  )
}
