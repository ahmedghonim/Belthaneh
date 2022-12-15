import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import WebClientOrders from './at-web'
import MobileClientOrders from './at-mobile'
import { OrdersTableType } from 'components/client/client-profile/types'

interface Props {
  data: OrdersTableType[]
}

function OrdersTable({ data }: Props) {
  const { t } = useTranslation('common')

  // see more functionality
  const seeMoreFun = () => {}

  return (
    <div>
      <WebClientOrders data={data} />
      <MobileClientOrders data={data} />
      <button
        className="sm:hidden block ml-auto my-4 text-base dark:text-white text-dark-100 font-medium capitalize"
        onClick={seeMoreFun}
      >
        {t('see_more')}
      </button>
    </div>
  )
}

export default OrdersTable
