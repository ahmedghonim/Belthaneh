import ProductsReport from 'components/reports/products'
import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'
import React from 'react'

function Products() {
  const { t } = useTranslation('pages-title')

  return (
    <>
      <Head>
        <title>{t('reports_products')}</title>
      </Head>
      <ProductsReport />
    </>
  )
}

export default Products
