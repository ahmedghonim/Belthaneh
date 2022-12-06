import React from 'react'
import OrderDetailsTable from './details/web-details'
import OrderDetailsBox from './details/mobile-details'
import OrderUpdatesTable from './updates'
import {
  SingleOrderBoxType,
  SingleOrderTableType,
  OrderUpdatesDataType
} from '../../single-order-details'

interface Props {
  orderMobileData: SingleOrderBoxType
  orderWebData: SingleOrderTableType | any
  OrderUpdatesData: OrderUpdatesDataType[]
}

function LeftSideDetails({
  orderMobileData,
  orderWebData,
  OrderUpdatesData
}: Props) {
  return (
    <section className="w-full sm:w-2/3">
      <OrderDetailsBox {...orderMobileData} />
      <OrderDetailsTable
        items={orderWebData.items}
        coreData={orderWebData.orderDetails}
      />
      <OrderUpdatesTable data={OrderUpdatesData} />
    </section>
  )
}

export default LeftSideDetails
