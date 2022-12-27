import useTranslation from 'next-translate/useTranslation'
import React from 'react'
import { Table } from 'ui'
import ActionsButton from '../components/action-button'
import CollapsedCard from '../components/collapsed-card'
import SearchHeader from '../components/search-header'

function ProductsReport() {
  const { t } = useTranslation('common')

  const columns = [
    {
      Header: t('id'),
      accessor: 'id'
    },
    {
      Header: t('product_name'),
      accessor: 'product_name'
    },
    {
      Header: t('quantity_sold'),
      accessor: 'quantity_sold'
    },
    {
      Header: t('wholesale_cost_per_item'),
      accessor: 'wholesale_cost_per_item'
    },
    {
      Header: t('total_wholesale_cost'),
      accessor: 'total_cost'
    },
    {
      Header: t('gross_profit'),
      accessor: 'gross_profit'
    },
    {
      Header: t('paid_amount'),
      accessor: 'paid_amount'
    },
    {
      Header: t('revenues'),
      accessor: 'revenues'
    }
  ]

  const data = [
    {
      id: 123,
      product_name: 'Lotion',
      quantity_sold: 50,
      wholesale_cost_per_item: 20,
      total_cost: 86,
      gross_profit: '30%',
      paid_amount: 30,
      revenues: 3
    },
    {
      id: 123,
      product_name: 'Lotion',
      quantity_sold: 50,
      wholesale_cost_per_item: 20,
      total_cost: 8,
      gross_profit: '30%',
      paid_amount: 30,
      revenues: 3
    }
  ]

  return (
    <div className="space-y-7 xs:pb-5">
      <SearchHeader />
      <div className="xs:hidden">
        <Table columns={columns} data={data} />
      </div>
      <CollapsedCard columns={columns} data={data} keyOfTitle="product_name" />
      <ActionsButton />
    </div>
  )
}

export default ProductsReport
