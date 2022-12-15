import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'
import SalesFC from 'components/accounting/sales'

function Sales() {
  const { t } = useTranslation('pages-title')
  return (
    <>
      <Head>
        <title>{t('admin_accounting')}</title>
      </Head>
      <SalesFC />
    </>
  )
}
export default Sales
