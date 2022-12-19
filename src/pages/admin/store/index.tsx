import StoreOverView from 'components/store'
import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'
import React from 'react'

function Store() {
  const { t } = useTranslation('pages-title')
  return (
    <>
      <Head>
        <title>{t('admin_store')}</title>
      </Head>
      <StoreOverView />
    </>
  )
}

export default Store
