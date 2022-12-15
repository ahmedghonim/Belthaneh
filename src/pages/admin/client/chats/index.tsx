import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'
import ChatsFC from 'components/client/chats'

const Chats = () => {
  const { t } = useTranslation('pages-title')
  return (
    <>
      <Head>
        <title>{t('client_chats')}</title>
      </Head>
      <ChatsFC />
    </>
  )
}

export default Chats
