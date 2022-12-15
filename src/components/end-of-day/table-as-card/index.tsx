import React from 'react'
import CollapseCard from 'ui/collapse-card'
import { HeaderProps } from './Types'
import Header from './card-header'
// import CardBody from './card-body'

function TableAsCard({ name }: HeaderProps) {
  return (
    <div>
      <CollapseCard title={<Header name={name} />}>
        {/* <CardBody total={total} order={order} date={date} /> */}
      </CollapseCard>
    </div>
  )
}

export default TableAsCard
