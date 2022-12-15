import React, { useState } from 'react'
import NavigatorTabs from 'components/client/navigator-tabs'
import Conversations from './conversations'
import ChatScreen from './chat-screen'
import { CoversationType, ChatScreenData } from 'components/client/chats/types'

// conversation dummy data
const conversationsData: CoversationType[] = [
  {
    src: 'https://placeimg.com/192/192/people',
    name: 'Sophie B.',
    message: 'Hi! I need more information..'
  },
  {
    src: 'https://placeimg.com/192/192/people',
    name: 'Sophie B.',
    message: 'Hi! I need more information..'
  },
  {
    src: 'https://placeimg.com/192/192/people',
    name: 'Sophie B.',
    message: 'Hi! I need more information..'
  },
  {
    src: 'https://placeimg.com/192/192/people',
    name: 'Sophie B.',
    message: 'Hi! I need more information..'
  },
  {
    src: 'https://placeimg.com/192/192/people',
    name: 'Sophie B.',
    message: 'Hi! I need more information..'
  },
  {
    src: 'https://placeimg.com/192/192/people',
    name: 'Sophie B.',
    message: 'Hi! I need more information..'
  },
  {
    src: 'https://placeimg.com/192/192/people',
    name: 'Sophie B.',
    message: 'Hi! I need more information..'
  },
  {
    src: 'https://placeimg.com/192/192/people',
    name: 'Sophie B.',
    message: 'Hi! I need more information..'
  },
  {
    src: 'https://placeimg.com/192/192/people',
    name: 'Sophie B.',
    message: 'Hi! I need more information..'
  },
  {
    src: 'https://placeimg.com/192/192/people',
    name: 'Sophie B.',
    message: 'Hi! I need more information..'
  }
]

// messages dummy data
const messagesData: ChatScreenData = {
  src: 'https://placeimg.com/192/192/people',
  person: 'Sophie B.',
  messages: [
    {
      text: 'Hi',
      type: 'to'
    },
    {
      text: 'how can i help you ?',
      type: 'to'
    },
    {
      text: 'i want to book a service',
      type: 'from'
    },
    {
      text: 'how can i help you ?',
      type: 'to'
    },
    {
      text: 'Hi',
      type: 'to'
    },
    {
      text: 'how can i help you ?',
      type: 'to'
    },
    {
      text: 'i want to book a service',
      type: 'from'
    },
    {
      text: 'how can i help you ?',
      type: 'to'
    },
    {
      text: 'Hi',
      type: 'to'
    },
    {
      text: 'how can i help you ?',
      type: 'to'
    },
    {
      text: 'i want to book a service',
      type: 'from'
    },
    {
      text: 'how can i help you ?',
      type: 'to'
    }
  ]
}

function Chats() {
  const [showScreen, setShowScreen] = useState<boolean>(false)

  // replay message handler
  const replayHandler = () => {
    setShowScreen(true)
  }

  // hide replay screen
  const hideHandler = () => {
    setShowScreen(false)
  }

  return (
    <section className="flex flex-col sm:gap-5 h-[70vh]">
      <section>
        <NavigatorTabs splitNum={3} />
      </section>
      <section className="relative flex items-start sm:gap-8 h-full xs:mt-8">
        <Conversations data={conversationsData} replayHandler={replayHandler} />
        <ChatScreen show={showScreen} hide={hideHandler} {...messagesData} />
      </section>
    </section>
  )
}

export default Chats
