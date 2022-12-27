import React from 'react'
import Avatar from 'ui/avatar'

interface Props {
  userName?: string
  open: boolean
}

function UserInfo({ userName = 'Andrew Smith', open }: Props) {
  return (
    <div
      className={`${
        !open ? '!p-0 justify-center flex-col mb-4' : ''
      } flex items-center gap-3 
      sm:border-b border-dark-300 pb-5`}
    >
      <Avatar src="https://placeimg.com/192/192/people" />
      <div
        className={`flex flex-col ${
          !open ? 'w-0 h-0 scale-0' : ''
        } overflow-hidden duration-300 `}
      >
        <span className="text-sm">{userName}</span>
      </div>
    </div>
  )
}

export default UserInfo
