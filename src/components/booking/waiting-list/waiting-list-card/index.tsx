import React from 'react'
import Avatar from 'ui/avatar'
import Edit from 'svg/edit.svg'
import Delete from 'svg/trash.svg'
import { WaitingListItem } from 'components/booking/waiting-list/waiting-list-table'

export interface WaitingListCardProps extends WaitingListItem {
  img: string
}

export default function WaitingListCard({
  id,
  name,
  phone,
  img,
  notes,
  actions
}: WaitingListCardProps) {
  const Actions = () => (
    <div className="flex gap-4">
      <button onClick={actions.handleEdit}>
        <Edit className="dark:stroke-white stroke-dark-100 scale-75" />
      </button>
      <button className="scale-75" onClick={actions.handleDelete}>
        <Delete />
      </button>
    </div>
  )
  return (
    <div className="p-4 w-full text-center dark:bg-dark-200 bg-white rounded-md">
      <div className="flex justify-between">
        <div className="flex items-center">
          <Avatar
            src={img ?? 'https://placeimg.com/192/192/people'}
            alt={name}
            className="!w-[46px]"
          />
        </div>
        <div className="flex flex-col items-center">
          <span className="text-md font-semibold">{name}</span>
          <span className="text-md font-normal">{id}</span>
          <span className="text-md font-normal">{phone}</span>
        </div>
        <Actions />
      </div>

      <div className="h-[1px] w-full bg-dark-300 my-[10px]"></div>
      <span className="text-md font-normal">{notes}</span>
    </div>
  )
}
