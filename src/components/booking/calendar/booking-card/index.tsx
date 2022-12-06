import React from 'react'
import Edit from 'svg/edit.svg'
import Delete from 'svg/delete.svg'
import { cva } from 'class-variance-authority'

type Status = 'paid' | 'notPaid' | 'fromApp'

export interface KeyLabelItem {
  value: string
  label: string
}

interface BookingCardProps {
  title?: string
  services?: KeyLabelItem[]
  user?: KeyLabelItem
  phone?: string
  status?: Status
  handleEdit: () => void
  handleDelete: () => void
}

const bgClasses = cva('relative h-full rounded-[15px]', {
  variants: {
    status: {
      paid: 'bg-primary-100',
      notPaid: 'bg-secondary-100',
      fromApp: 'bg-dark-600'
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

export default function BookingCard({
  status = 'notPaid',
  title,
  services,
  user,
  phone,
  handleEdit,
  handleDelete
}: BookingCardProps) {
  const Body = () => (
    <div className="flex flex-col gap-1 p-2 items-start">
      <span
        className={`text-xs text-white font-semibold ${
          status === 'fromApp' ? 'text-dark-100' : ''
        }`}
      >
        {title}
      </span>
      <span
        className={`text-xs text-white font-semibold  ${
          status === 'fromApp' ? 'text-dark-100' : ''
        }`}
      >
        {services?.map((_item) => _item.label)?.join(',')}
      </span>
      <span
        className={`text-xs text-white font-semibold  ${
          status === 'fromApp' ? 'text-dark-100' : ''
        }`}
      >
        {user?.label}
      </span>
      <span
        className={`text-xs text-white font-semibold  ${
          status === 'fromApp' ? 'text-dark-100' : ''
        }`}
      >
        {phone}
      </span>
    </div>
  )

  return (
    <EventCard status={status}>
      <div className="absolute flex gap-2 top-0 rtl:left-[-1px] ltr:right-[-1px] bg-white p-2  ltr:rounded-tr-[15px] rtl:rounded-tl-[15px] ltr:rounded-bl-[30px] rtl:rounded-br-[30px]  ">
        <button onClick={handleEdit}>
          <Edit className="stroke-secondary-100 scale-75" />
        </button>
        <button onClick={handleDelete}>
          <Delete className="fill-secondary-100 scale-125" />
        </button>
      </div>
      <Body />
    </EventCard>
  )
}
