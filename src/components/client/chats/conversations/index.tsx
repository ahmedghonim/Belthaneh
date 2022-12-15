import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import { Input, Card, Text } from 'ui'
import { ConversationsType } from 'components/client/chats/types'
import SingleConversation from './single-conversation'

function Conversations({ data, replayHandler }: ConversationsType) {
  const { t } = useTranslation('common')

  return (
    <section className="sm:w-1/3 w-full h-full  rounded-md">
      <div>
        <Input
          name="chat-search"
          placeholder={t('start_type_to_search_for_chat')}
        />
      </div>
      <Card className="h-full mt-5">
        <Text as="h1" className="!capitalize !mb-3">
          {t('conversations')}
        </Text>
        <div className="flex flex-col gap-2 h-5/6 overflow-auto pb-3">
          {data.map((conversation) => {
            return (
              <SingleConversation
                key={conversation.name}
                {...conversation}
                replay={replayHandler}
              />
            )
          })}
        </div>
      </Card>
    </section>
  )
}

export default Conversations
