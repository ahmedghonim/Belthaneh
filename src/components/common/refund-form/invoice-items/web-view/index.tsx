import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import { Table } from 'ui'
import TableActions from 'ui/table/actions'
import { RecieptItemsType } from 'components/accounting/sales/type'

interface Props {
  data: RecieptItemsType[]
}

function WebInvoiceItems({ data }: Props) {
  const { t } = useTranslation('common')

  const onDeleteFun = () => {}

  const columns = [
    {
      Header: t('service_name'),
      accessor: 'serviceName'
    },
    {
      Header: t('amount'),
      accessor: 'amount'
    },
    {
      Header: t('price'),
      accessor: 'price'
    },
    {
      Header: t('discount'),
      accessor: 'discount'
    },
    {
      Header: t('employer'),
      accessor: 'employer'
    },
    {
      Header: t('date'),
      accessor: 'date'
    },
    {
      id: 'delete',
      Header: '',
      Cell: () => <TableActions onDelete={onDeleteFun} />
    }
  ]
  return (
    <div className="xs:hidden">
      <Table data={data} columns={columns} />
    </div>
  )
}

export default WebInvoiceItems
