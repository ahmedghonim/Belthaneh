import React from 'react'
import Eye from 'svg/eye.svg'
import Edit from 'svg/edit.svg'
import Trash from 'svg/trash.svg'

export interface Props {
  onShow?: () => void
  onEdit?: () => void
  onDelete?: () => void
}

function TableActions({ onShow, onEdit, onDelete }: Props) {
  return (
    <div className="flex justify-evenly">
      {onShow !== undefined ? (
        <span className="cursor-pointer" onClick={onShow}>
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
    </div>
  )
}

export default TableActions
