import React from 'react'
import Eye from 'svg/eye.svg'
import Edit from 'svg/edit.svg'
import Trash from 'svg/trash.svg'
import Return from 'svg/return.svg'

export interface Props {
  onView?: () => void
  onEdit?: () => void
  onDelete?: () => void
  onReturn?: () => void
}

function TableActions({ onView, onEdit, onDelete, onReturn }: Props) {
  return (
    <div className="flex justify-evenly">
      {onView !== undefined ? (
        <span className="cursor-pointer" onClick={onView}>
          <Eye className="stroke-black dark:stroke-white" />
        </span>
      ) : null}

      {onEdit !== undefined ? (
        <span className="cursor-pointer" onClick={onEdit}>
          <Edit className="stroke-black dark:stroke-white" />
        </span>
      ) : null}

      {onDelete !== undefined ? (
        <span className="cursor-pointer" onClick={onDelete}>
          <Trash />
        </span>
      ) : null}

      {onReturn !== undefined ? (
        <span className="cursor-pointer" onClick={onReturn}>
          <Return className="dark:fill-light-200 fill-dark-100 mt-1" />
        </span>
      ) : null}
    </div>
  )
}

export default TableActions
