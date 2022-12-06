import React from 'react'
import DashboardFC from 'components/dashboard'
import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'
function Dashboard() {
  const { t } = useTranslation('common')
  return (
    <>
      <Head>
        <title>{t('dashboard')}</title>
      </Head>
      <DashboardFC />
    </>
  )
}

export default Dashboard
