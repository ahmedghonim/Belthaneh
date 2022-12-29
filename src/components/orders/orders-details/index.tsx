import React from 'react'
import MobileOrdersActions from './mobile-details/actions'
import WebOrdersActions from './large-details/actions'
import OrdersDetailsBoxs from './mobile-details/boxs'
import OrdersDetailsTable from './large-details/table'

export interface OrdersDetailsType {
  orderNum?: string | number
  client: string
  date: string
  order: string
  price: string | number
  status: string
  id: string
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
    client: 'Saad Fahad',
    date: '1/11/2022',
    price: '$50',
    order: 'Resistance Bain EX',
    status: 'completed',
    id: '1'
  },
  {
    orderNum: '#4556',
    client: 'Saad Fahad',
    date: '1/11/2022',
    price: '$50',
    order: 'Resistance Bain EX',
    status: 'completed',
    id: '2'
  },
  {
    orderNum: '#4556',
    client: 'Saad Fahad',
    date: '1/11/2022',
    price: '$50',
    order: 'Resistance Bain EX',
    status: 'canceled',
    id: '3'
  },
  {
    orderNum: '#4556',
    client: 'Saad Fahad',
    date: '1/11/2022',
    price: '$50',
    order: 'Resistance Bain EX',
    status: 'completed',
    id: '4'
  }
]

// Order Details Boxs Dummy Data
const boxData: OrdersDetailsType[] = [
  {
    order: 'Resistance Bain EX',
    date: '3 Nov,2022, 05:30 PM',
    status: 'Completed',
    client: 'Saad Fahad',
    orderNum: 4556,
    price: 120,
    id: '1'
  },
  {
    order: 'Resistance Bain EX',
    date: '3 Nov,2022, 05:30 PM',
    status: 'canceled',
    client: 'Saad Fahad',
    orderNum: 4556,
    price: 120,
    id: '2'
  },
  {
    order: 'Resistance Bain EX',
    date: '3 Nov,2022, 05:30 PM',
    status: 'Completed',
    client: 'Saad Fahad',
    orderNum: 4556,
    price: 120,
    id: '3'
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
