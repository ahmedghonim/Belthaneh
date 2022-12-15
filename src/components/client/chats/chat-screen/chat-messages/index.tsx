import React from 'react'
import ChatText from '../../chat-text'
import { AllMessages } from 'components/client/chats/types'

function ChatMessags({ data }: AllMessages) {
  return (
    <>
      {data.map((message, index) => {
        return <ChatText key={index} {...message} />
      })}
    </>
  )
}

export default ChatMessags
