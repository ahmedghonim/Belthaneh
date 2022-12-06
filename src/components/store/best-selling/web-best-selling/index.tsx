import React from 'react'
import Trans from 'next-translate/trans'
import useTranslation from 'next-translate/useTranslation'
import { Table } from 'ui'
import { BestSellingType } from 'components/store'

interface Props {
  data: BestSellingType[]
}

// dummy data
const columns = [
  {
    Header: <Trans i18nKey="common:Product_Num" />,
    accessor: 'productNum'
  },
  {
    Header: <Trans i18nKey="common:Product_Name" />,
    accessor: 'productName'
  },
  {
    Header: <Trans i18nKey="common:sold" />,
    accessor: 'sold'
  },
  {
    Header: <Trans i18nKey="common:pricing" />,
    accessor: 'pricing'
  },
  {
    Header: <Trans i18nKey="common:status" />,
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

function BestSellingTable({ data }: Props) {
  const { t } = useTranslation('common')

  return (
    <section className="xs:hidden block">
      <Table columns={columns} data={data} noDataMessage={t('no_data')} />
    </section>
  )
}

export default BestSellingTable
