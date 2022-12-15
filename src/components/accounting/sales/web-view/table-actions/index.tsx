import React from 'react'
import Eye from 'svg/eye.svg'
import Retrun from 'svg/return.svg'

import { TableActionsType } from 'components/accounting/sales/type'

function TableActions({ onReturn, onView }: TableActionsType) {
  return (
    <div className="flex justify-evenly">
      <span className="cursor-pointer" onClick={onView}>
        <Eye className="stroke-black dark:stroke-white" />
      </span>
      <span className="cursor-pointer" onClick={onReturn}>
        <Retrun className="dark:fill-light-200 fill-dark-100" />
      </span>
    </div>
  )
}

export default TableActions
