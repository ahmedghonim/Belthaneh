import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'
import MessagesFC from 'components/client/messages'

const Messages = () => {
  const { t } = useTranslation('pages-title')

  return (
    <>
      <Head>
        <title>{t('client_messages')}</title>
      </Head>
      <MessagesFC />
    </>
  )
}

export default Messages
