import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'
import CommentsFC from 'components/client/comments'

const Comments = () => {
  const { t } = useTranslation('pages-title')

  return (
    <>
      <Head>
        <title>{t('client_comments')}</title>
      </Head>
      <CommentsFC />
    </>
  )
}

export default Comments
