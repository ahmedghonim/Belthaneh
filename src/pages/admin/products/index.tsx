import React from 'react'
import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'
import ProductFC from 'components/products/product'

function Product() {
  const { t } = useTranslation('pages-title')
  return (
    <>
      <Head>
        <title>{t('admin_products')}</title>
      </Head>
      <ProductFC />
    </>
  )
}

export default Product
