import React from 'react'
import MobileOrdersActions from './mobile-details/actions'
import WebOrdersActions from './large-details/actions'
import OrdersDetailsBoxs from './mobile-details/boxs'
import OrdersDetailsTable from './large-details/table'

export interface OrdersDetailsType {
  orderNum?: string | number
  customer: string
  date: string
  order: string
  price: string | number
  status: string
}

//  buttons data
export const ButtonsObj = [
  {
    id: '0',
    label: 'All_Orders',
    value: '120'
  },
  {
    id: '1',
    label: 'Completed',
    value: '110'
  },
  {
    id: '2',
    label: 'Canceled',
    value: '110'
  },
  {
    id: '3',
    label: 'Returns',
    value: '110'
  }
]

// Order Details Table Dummy Data
const tableData: OrdersDetailsType[] = [
  {
    orderNum: '#4556',
    customer: 'Saad Fahad',
    date: '1/11/2022',
    price: '$50',
    order: 'Resistance Bain EX',
    status: 'completed'
  },
  {
    orderNum: '#4556',
    customer: 'Saad Fahad',
    date: '1/11/2022',
    price: '$50',
    order: 'Resistance Bain EX',
    status: 'completed'
  },
  {
    orderNum: '#4556',
    customer: 'Saad Fahad',
    date: '1/11/2022',
    price: '$50',
    order: 'Resistance Bain EX',
    status: 'canceled'
  },
  {
    orderNum: '#4556',
    customer: 'Saad Fahad',
    date: '1/11/2022',
    price: '$50',
    order: 'Resistance Bain EX',
    status: 'completed'
  }
]

// Order Details Boxs Dummy Data
const boxData: OrdersDetailsType[] = [
  {
    order: 'Resistance Bain EX',
    date: '3 Nov,2022, 05:30 PM',
    status: 'Completed',
    customer: 'Saad Fahad',
    orderNum: 4556,
    price: 120
  },
  {
    order: 'Resistance Bain EX',
    date: '3 Nov,2022, 05:30 PM',
    status: 'canceled',
    customer: 'Saad Fahad',
    orderNum: 4556,
    price: 120
  },
  {
    order: 'Resistance Bain EX',
    date: '3 Nov,2022, 05:30 PM',
    status: 'Completed',
    customer: 'Saad Fahad',
    orderNum: 4556,
    price: 120
  }
]

function OrdersDetails() {
  return (
    <section>
      <div>
        <WebOrdersActions />
        <OrdersDetailsTable data={tableData} />
      </div>
      <div>
        <MobileOrdersActions />
        <OrdersDetailsBoxs data={boxData} />
      </div>
    </section>
  )
}

export default OrdersDetails
