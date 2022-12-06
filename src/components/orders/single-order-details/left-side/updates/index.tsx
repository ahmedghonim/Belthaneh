import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import RoundedBox from 'ui/rounded-box'
import Table from 'ui/table'
import { OrderUpdatesDataType } from '../../../single-order-details'

interface Props {
  data: OrderUpdatesDataType[]
}

function OrderDetailsTable({ data }: Props) {
  const { t } = useTranslation('common')
  const updatesColumns = [
    {
      Header: t('common:Order_Status'),
      accessor: 'orderStatus'
    },
    {
      Header: t('common:update'),
      accessor: 'update',
      Cell: ({ row }: { row: any }) => (
        <span className="whitespace-pre-wrap">{row.original.update}</span>
      )
    },
    {
      Header: t('common:date'),
      accessor: 'date'
    },
    {
      Header: t('common:by'),
      accessor: 'by'
    }
  ]
  return (
    <>
      <RoundedBox className="p-4 mt-10 hidden sm:block">
        <div className="flex justify-between mb-6">
          <h2 className="text-dark-100 dark:text-white text-lg font-medium">
            {t('Order_Updates_Record')}
          </h2>
        </div>
        <Table columns={updatesColumns} data={data} />
      </RoundedBox>
    </>
  )
}

export default OrderDetailsTable
