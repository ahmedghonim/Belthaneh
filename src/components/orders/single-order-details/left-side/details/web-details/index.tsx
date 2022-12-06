import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Table from 'ui/table'
import RoundedBox from 'ui/rounded-box'
import { SingleOrderTableType } from 'components/orders/single-order-details'

interface Props {
  coreData: { orderNum: string; orderDate: string }
  items: SingleOrderTableType[]
}

function OrderDetailsTable({ coreData, items }: Props) {
  const { t } = useTranslation('common')

  const orderColumns = [
    {
      Header: t('common:product_code'),
      accessor: 'productCode'
    },
    {
      Header: t('common:product'),
      accessor: 'product'
    },
    {
      Header: t('common:Quantity'),
      accessor: 'quantity'
    },
    {
      Header: t('common:weight'),
      accessor: 'weight'
    }
  ]
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
