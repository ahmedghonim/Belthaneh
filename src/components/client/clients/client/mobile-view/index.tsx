import React from 'react'
import { DataPropType } from 'components/client/clients/types'
import BoxHead from './box-head'
import BoxBody from './box-body'
import { CollapseCard } from 'ui'

function MobileData({ data }: DataPropType) {
  return (
    <div className="sm:hidden flex flex-col gap-5">
      {data.map(({ name, totalSales, ...body }) => {
        return (
          <CollapseCard
            key={name}
            title={<BoxHead name={name} totalSales={totalSales} />}
          >
            <BoxBody {...body} />
          </CollapseCard>
        )
      })}
    </div>
  )
}

export default MobileData
