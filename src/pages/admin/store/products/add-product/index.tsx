import React from 'react'
import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'
import AddProducts from 'components/products/add-product'

function AddProduct() {
  const { t } = useTranslation('pages-title')
  return (
    <>
      <Head>
        <title>{t('products_add-product')}</title>
      </Head>
      <AddProducts />
    </>
  )
}

export default AddProduct
