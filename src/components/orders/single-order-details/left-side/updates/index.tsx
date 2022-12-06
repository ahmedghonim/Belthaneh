import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Trans from 'next-translate/trans'
import RoundedBox from 'ui/rounded-box'
import Table from 'ui/table'
import { OrderUpdatesDataType } from '../../../single-order-details'

interface Props {
  data: OrderUpdatesDataType[]
}

const updatesColumns = [
  {
    Header: <Trans i18nKey="common:Order_Status" />,
    accessor: 'orderStatus'
  },
  {
    Header: <Trans i18nKey="common:update" />,
    accessor: 'update',
    Cell: ({ row }: { row: any }) => (
      <span className="whitespace-pre-wrap">{row.original.update}</span>
    )
  },
  {
    Header: <Trans i18nKey="common:date" />,
    accessor: 'date'
  },
  {
    Header: <Trans i18nKey="common:by" />,
    accessor: 'by'
  }
]

function OrderDetailsTable({ data }: Props) {
  const { t } = useTranslation('common')
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
