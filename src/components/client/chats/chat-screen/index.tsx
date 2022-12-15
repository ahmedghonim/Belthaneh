import React from 'react'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
import { Card, Input, Text, Button } from 'ui'
import { ChatScreenProps } from 'components/client/chats/types'
import ChatMessages from 'components/client/chats/chat-screen/chat-messages'
import SendMessage from 'svg/send-message.svg'
import Close from 'svg/x.svg'

function ChatScreen({ show, src, person, messages, hide }: ChatScreenProps) {
  const { t } = useTranslation('common')

  // send message function
  const sendMessage = () => {}

  return (
    <Card
      className={`xs:absolute flex-1 flex flex-col h-full xs:w-full pb-10 p-3 ${
        show ? 'xs:block' : 'xs:hidden'
      }`}
    >
      <div className="xs:flex xs:justify-between h-fit">
        <div className="flex gap-2">
          <Image
            width={60}
            height={60}
            src={src}
            alt={t('person')}
            className="rounded-lg"
          />
          <Text as="h1" className="dark:!text-white !text-dark-100">
            {person}
          </Text>
        </div>
        <Button className="bg-transparent sm:hidden" onClick={hide}>
          <Close className="dark:fill-white fill-black" />
        </Button>
      </div>
      <div className="flex-1 sm:px-6 xs:h-3/4 px-3 my-8 overflow-auto">
        <ChatMessages data={messages} />
      </div>
      <div className="relative dark:bg-[#323232] bg-light-200 rounded-md h-fit">
        <Input
          name="chat-message"
          placeholder={t('Type_anything')}
          className="px-2"
        />
        <button
          className="absolute top-2/4 -translate-y-2/4 ltr:right-0.5 rtl:left-0.5 dark:bg-[#323232] bg-light-200 px-4 py-1"
          onClick={sendMessage}
        >
          <SendMessage />
        </button>
      </div>
    </Card>
  )
}

export default ChatScreen
