import React from 'react'
import Trans from 'next-translate/trans'
import useTranslation from 'next-translate/useTranslation'
import Table from 'ui/table'
import RoundedBox from 'ui/rounded-box'
import { SingleOrderTableType } from 'components/orders/single-order-details'

interface Props {
  coreData: { orderNum: string; orderDate: string }
  items: SingleOrderTableType[]
}

const orderColumns = [
  {
    Header: <Trans i18nKey="common:product_code" />,
    accessor: 'productCode'
  },
  {
    Header: <Trans i18nKey="common:product" />,
    accessor: 'product'
  },
  {
    Header: <Trans i18nKey="common:Quantity" />,
    accessor: 'quantity'
  },
  {
    Header: <Trans i18nKey="common:weight" />,
    accessor: 'weight'
  }
]

function OrderDetailsTable({ coreData, items }: Props) {
  const { t } = useTranslation('common')
  return (
    <>
      <RoundedBox className="hidden sm:block p-4 py-8">
        <div className="flex justify-between mb-4 text-dark-100 dark:text-white">
          <h2>
            {t('Order_Number')}: {coreData.orderNum}
          </h2>
          <h2>
            {t('Order_Date')}: {coreData.orderDate}
          </h2>
        </div>
        <Table columns={orderColumns} data={items} />
      </RoundedBox>
    </>
  )
}

export default OrderDetailsTable
