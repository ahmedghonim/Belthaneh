import useTranslation from 'next-translate/useTranslation'
import React from 'react'
import Table from 'ui/table'
import TableActions from './table-actions'

interface Props {
  data: object[]
  returnFun: React.Dispatch<React.SetStateAction<boolean>>
}

function WebSales({ data, returnFun }: Props) {
  const { t } = useTranslation('common')
  // view function
  const onViewFun = () => {}

  // return function
  const onRetrunFun = () => {
    returnFun(true)
  }
  const columns = [
    {
      Header: t('invoice_no'),
      accessor: 'invoiceNo'
    },
    {
      Header: t('client'),
      accessor: 'client'
    },
    {
      Header: t('phone_number'),
      accessor: 'phoneNum'
    },
    {
      Header: t('clause'),
      accessor: 'clause'
    },
    {
      Header: t('cost'),
      accessor: 'cost'
    },
    {
      Header: t('date'),
      accessor: 'date'
    },
    {
      Header: t('state'),
      Cell: () => <TableActions onReturn={onRetrunFun} onView={onViewFun} />
    }
  ]

  return (
    <div className="xs:hidden">
      <Table columns={columns} data={data} />
    </div>
  )
}

export default WebSales
