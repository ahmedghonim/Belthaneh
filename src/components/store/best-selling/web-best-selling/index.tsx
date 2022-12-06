import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import { Table } from 'ui'
import { BestSellingType } from 'components/store'

interface Props {
  data: BestSellingType[]
}

function BestSellingTable({ data }: Props) {
  const { t } = useTranslation('common')
  // dummy data
  const columns = [
    {
      Header: t('Product_Num'),
      accessor: 'productNum'
    },
    {
      Header: t('Product_Name'),
      accessor: 'productName'
    },
    {
      Header: t('sold'),
      accessor: 'sold'
    },
    {
      Header: t('pricing'),
      accessor: 'pricing'
    },
    {
      Header: t('status'),
      accessor: 'status',
      Cell: ({ row }: { row: any }) => (
        <span
          className={`${
            row.original.status === true ? 'text-green-600' : 'text-[#F92618]'
          }`}
        >
          {row.original.status === true ? 'in stock' : 'out of stock'}
        </span>
      )
    }
  ]

  return (
    <section className="xs:hidden block">
      <Table columns={columns} data={data} noDataMessage={t('no_data')} />
    </section>
  )
}

export default BestSellingTable
