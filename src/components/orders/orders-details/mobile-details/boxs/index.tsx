import React from 'react'
import OrdersDetailsBox from './box'
import { OrdersDetailsType } from '../../../orders-details'

interface props {
  data: OrdersDetailsType[]
}

function OrdersDetailsBoxs({ data }: props) {
  return (
    <section className="sm:hidden">
      {data.map((box, index) => {
        return <OrdersDetailsBox key={index} {...box} />
      })}
    </section>
  )
}

export default OrdersDetailsBoxs
