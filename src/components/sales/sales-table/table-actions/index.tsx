import React from 'react'
import Eye from 'svg/eye.svg'
import Trash from 'svg/trash.svg'

function TableActions() {
  return (
    <div className="flex justify-evenly">
      <span className="cursor-pointer">
        <Eye className="stroke-black dark:stroke-white" />
      </span>
      <span className="cursor-pointer">
        <Trash />
      </span>
    </div>
  )
}

export default TableActions
