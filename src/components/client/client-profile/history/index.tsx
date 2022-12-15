import React from 'react'
import ClientOrders from './orders-table'
import ClientBookings from './booking-table'
import {
  BookingTableType,
  OrdersTableType
} from 'components/client/client-profile/types'

// history dummy data
const bookingData: BookingTableType[] = [
  {
    BookingNo: '#4556',
    service: 'hair cut',
    date: '5/11/2022',
    employees: 'sara',
    pricing: '$120',
    status: 'completed'
  },
  {
    BookingNo: '#4556',
    service: 'hair cut',
    date: '5/11/2022',
    employees: 'sara',
    pricing: '$120',
    status: 'completed'
  },
  {
    BookingNo: '#4556',
    service: 'hair cut',
    date: '5/11/2022',
    employees: 'sara',
    pricing: '$120',
    status: 'cancelled'
  },
  {
    BookingNo: '#4556',
    service: 'hair cut',
    date: '5/11/2022',
    employees: 'sara',
    pricing: '$120',
    status: 'completed'
  }
]
const ordersData: OrdersTableType[] = [
  {
    OrderNo: '#4556',
    customer: 'Saa fahad',
    date: '5/11/2022',
    order: 'Resistance Bain EX',
    pricing: '$120',
    status: 'completed'
  },
  {
    OrderNo: '#4556',
    customer: 'Saa fahad',
    date: '5/11/2022',
    order: 'Resistance Bain EX',
    pricing: '$120',
    status: 'completed'
  },
  {
    OrderNo: '#4556',
    customer: 'Saa fahad',
    date: '5/11/2022',
    order: 'Resistance Bain EX',
    pricing: '$120',
    status: 'cancelled'
  },
  {
    OrderNo: '#4556',
    customer: 'Saa fahad',
    date: '5/11/2022',
    order: 'Resistance Bain EX',
    pricing: '$120',
    status: 'completed'
  }
]
function WebHistory() {
  return (
    <section className="flex flex-col gap-6">
      <ClientBookings data={bookingData} />
      <ClientOrders data={ordersData} />
    </section>
  )
}

export default WebHistory
