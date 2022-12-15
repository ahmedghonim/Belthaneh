import SalesReport from 'components/reports/sales'
import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'
import React from 'react'

function Sales() {
  const { t } = useTranslation('pages-title')

  return (
    <>
      <Head>
        <title>{t('reports_sales')}</title>
      </Head>
      <SalesReport />
    </>
  )
}

export default Sales
