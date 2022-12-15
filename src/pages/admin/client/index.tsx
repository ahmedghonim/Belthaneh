import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'
import Clients from 'components/client'

const Client: React.FC = () => {
  const { t } = useTranslation('pages-title')
  return (
    <>
      <Head>
        <title>{t('admin_client')}</title>
      </Head>
      <Clients />
    </>
  )
}

export default Client
