import React from 'react'
import { Message } from 'components/client/chats/types'

function ChatText({ text, className = '', type }: Message) {
  return (
    <div
      className={`flex items-center justify-center w-fit rounded-tr-full rounded-tl-full rounded-br-full py-1 px-4 mb-4 capitalize ${className} ${
        type === 'from'
          ? 'dark:bg-white bg-light-200 text-dark-100 ml-auto'
          : 'bg-primary-100 text-white mr-auto'
      } `}
    >
      <span>{text}</span>
    </div>
  )
}

export default ChatText
