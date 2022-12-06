import React from 'react'
import RightSideDetails from './right-side'
import LeftSideDetails from './left-side'

// Single Orders Table
export interface SingleOrderTableType {
  orderDetails: { orderNum: string | number; orderDate: string }
  items: Array<{
    productCode: string
    product: string
    quantity: string
    weight: string
  }>
}

// Single Orders Boxs
export interface SingleOrderBoxType {
  customer: string
  brand: string
  id: string
  stock: number
  sold: number
  price: number
  source: string
}

// Order Updates dummy data
export interface OrderUpdatesDataType {
  orderStatus: string
  update: string
  date: string
  by: string
}

// Dummy Data
const orderMobileData: SingleOrderBoxType = {
  customer: 'Dina Wael',
  brand: ' RESISITANCE',
  id: '4955/SKU:JIP700',
  stock: 50,
  sold: 120,
  price: 60,
  source: ''
}

// order dummy data
const orderWebData: SingleOrderTableType = {
  orderDetails: {
    orderNum: '#17429349',
    orderDate: '2022-11-06 19:08'
  },
  items: [
    {
      productCode: '123',
      product: 'Resistance Bain EX',
      quantity: '1 X $120',
      weight: 'not found'
    },
    {
      productCode: '123',
      product: 'Resistance Bain EX',
      quantity: '8 X $120',
      weight: '7KG'
    },
    {
      productCode: '123',
      product: 'Resistance Bain EX',
      quantity: '4 X $120',
      weight: '1KG'
    },
    {
      productCode: '123',
      product: 'Resistance Bain EX',
      quantity: '5 X $120',
      weight: '0.528Kg'
    }
  ]
}

// opdates dummy data
const updatesData: [OrderUpdatesDataType] = [
  {
    orderStatus: 'Ready',
    update: 'The status of the request has been changed to "Ready"',
    date: '2021-11-01 13:43',
    by: 'Sara'
  }
]

function SingleOrderDetails() {
  return (
    <section className="flex flex-wrap sm:flex-nowrap items-start gap-6 mt-9">
      <LeftSideDetails
        orderMobileData={orderMobileData}
        orderWebData={orderWebData}
        OrderUpdatesData={updatesData}
      />
      <RightSideDetails />
    </section>
  )
}

export default SingleOrderDetails
