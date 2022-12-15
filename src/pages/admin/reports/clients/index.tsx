import ClientsReport from 'components/reports/clients'
import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'
import React from 'react'

function Clients() {
  const { t } = useTranslation('pages-title')

  return (
    <>
      <Head>
        <title>{t('reports_clients')}</title>
      </Head>
      <ClientsReport />
    </>
  )
}

export default Clients
