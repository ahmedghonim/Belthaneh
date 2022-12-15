import ServicesReport from 'components/reports/services'
import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'
import React from 'react'

function Services() {
  const { t } = useTranslation('pages-title')

  return (
    <>
      <Head>
        <title>{t('reports_services')}</title>
      </Head>
      <ServicesReport />
    </>
  )
}

export default Services
