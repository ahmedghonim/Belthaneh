import OrdersDetails from 'components/orders/orders-details'
import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'
import React from 'react'

function AllOrders() {
  const { t } = useTranslation('pages-title')
  return (
    <>
      <Head>
        <title>{t('admin_orders')}</title>
      </Head>
      <OrdersDetails />
    </>
  )
}

export default AllOrders
