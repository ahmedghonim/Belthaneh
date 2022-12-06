import React from 'react'
import OrderStatus from './order-status'
import ClientDetails from './client-details'
import PaymentMethod from './payment-method'
import BillSummary from './bill-summary'

// Client dunmmy data
const clientDetailsData = {
  name: 'Sara Fahad',
  phone: '06785325778',
  mail: 'Dinawael@gmail.com',
  shippingAddress: '256, Bharathi, london, Tirunelveli- 627435'
}

// Payment Method Dummy Data
const PaymentMethodData = {
  completed: true,
  transaction: 'Credit card method',
  date: 'Friday 30, Oct 2022, 05:00 Pm',
  cashOnDelivery: false
}

// Billing dunmmy data
const BillData = {
  subTotal: 100,
  shipping: 20,
  tax: 5,
  discount: 10,
  total: 115
}

function RightSideDetails() {
  return (
    <section className="w-full sm:w-1/3  flex flex-col gap-5">
      <OrderStatus />
      <ClientDetails {...clientDetailsData} />
      <PaymentMethod {...PaymentMethodData} />
      <BillSummary {...BillData} />
    </section>
  )
}

export default RightSideDetails
