import React from 'react'
import { HeadDataType } from 'components/client/clients/types'
import User from 'svg/user.svg'

function BoxHead({ name, totalSales }: HeadDataType) {
  return (
    <div className="rounded-lg overflow-hidden">
      <div className="flex justify-between items-center gap-1 p-3">
        <div className="flex items-center gap-2">
          <User />
          <span>{name}</span>
        </div>
        <div>
          <span>{totalSales}</span>
        </div>
      </div>
    </div>
  )
}
export default BoxHead
