import React from 'react'
import Edit from 'svg/edit.svg'
import Trash from 'svg/trash.svg'
interface Props {
  onClickEdit: () => void
  onClickDelete: () => void
}
function TableActions({ onClickEdit, onClickDelete }: Props) {
  return (
    <div className="flex justify-evenly items-center">
      <span className="cursor-pointer">
        <Edit
          className="dark:stroke-white stroke-dark-100 scale-75"
          onClick={onClickEdit}
        />
      </span>
      <span className="cursor-pointer">
        <Trash className="scale-75" onClick={onClickDelete} />
      </span>
    </div>
  )
}

export default TableActions
