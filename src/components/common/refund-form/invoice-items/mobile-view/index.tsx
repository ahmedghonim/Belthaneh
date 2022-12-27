import React from 'react'
import SalesMobileRecieptItem from './box'
import { RecieptItemsType } from 'components/accounting/sales/type'

interface Props {
  data: RecieptItemsType[]
}

function SalesMobileRecieptItems({ data }: Props) {
  return (
    <div className="sm:hidden flex flex-col gap-4">
      {data.map((box) => {
        return <SalesMobileRecieptItem key={box.serviceName} {...box} />
      })}
    </div>
  )
}

export default SalesMobileRecieptItems
