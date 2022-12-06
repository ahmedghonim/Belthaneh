import React from 'react'
import CollapseCard from 'ui/collapse-card'
import { BodyProps, HeaderProps } from './Types'
import BookingHeader from './booking-card-header'
import BookingCardBody from './booking-card-body'
function BookingCard({ name, total, order, date }: BodyProps & HeaderProps) {
  return (
    <div>
      <CollapseCard title={<BookingHeader name={name} />}>
        <BookingCardBody total={total} order={order} date={date} />
      </CollapseCard>
    </div>
  )
}

export default BookingCard
