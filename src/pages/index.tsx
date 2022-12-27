import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import HomeFC from 'components/home'
import Head from 'next/head'

function Home() {
  const { t } = useTranslation('pages-title')
  return (
    <div>
      <Head>
        <title>{t('blthania_home')}</title>
        <meta name="description" content="write desc here...." />
      </Head>
      <HomeFC />
    </div>
  )
}

export default Home
