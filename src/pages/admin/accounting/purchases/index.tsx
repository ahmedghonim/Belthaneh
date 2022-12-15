import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'
import PurchasesFC from 'components/accounting/purchase'

function Purchases() {
  const { t } = useTranslation('pages-title')

  return (
    <>
      <Head>
        <title>{t('accounting_purchases')}</title>
      </Head>
      <PurchasesFC />
    </>
  )
}

export default Purchases
