import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import { Text, Button } from 'ui'
import NavigatorTabs from 'components/client/navigator-tabs'
import { RemainingMessageProp } from 'components/client/messages/types'

function Actions({ messagesNum = 0 }: RemainingMessageProp) {
  const { t } = useTranslation('common')

  return (
    <section className="flex sm:justify-between sm:items-center xs:flex-col xs:gap-8">
      <div className="w-2/3">
        <NavigatorTabs splitNum={3} />
      </div>
      <div className="flex items-center gap-4 xs:ml-auto">
        <Text as="p" className="!capitalize !text-md">
          {t('Text_messages_remaining')}
        </Text>
        <Button className="bg-transparent rounded-lg border dark:border-dark-400 border-dark-100">
          <span className="text-secondary-100">
            {messagesNum} {t('message')}
          </span>
        </Button>
      </div>
    </section>
  )
}

export default Actions
