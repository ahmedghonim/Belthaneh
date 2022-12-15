import React, { useState } from 'react'
import SalesInvoices from './sales-invoices'
import SearchForm from 'components/accounting/serach-form'
import RefundForm from './refund-form'
import {
  RecieptItemsType,
  SalesInfoType
} from 'components/accounting/sales/type'
function Sales() {
  const [returnInvoice, setReturnInvoice] = useState<boolean>(false)

  const data: SalesInfoType[] = [
    {
      invoiceNo: '#456',
      client: 'Al-olaia',
      phoneNum: '0540055404',
      clause: 'Notes about the user',
      date: '1/11/2022',
      cost: '$50',
      id: '1'
    },
    {
      invoiceNo: '#456',
      client: 'Al-olaia',
      phoneNum: '0540055404',
      clause: 'Notes about the user',
      date: '1/11/2022',
      cost: '$50',
      id: '2'
    },
    {
      invoiceNo: '#456',
      client: 'Al-olaia',
      phoneNum: '0540055404',
      clause: 'Notes about the user',
      date: '1/11/2022',
      cost: '$50',
      id: '3'
    },
    {
      invoiceNo: '#456',
      client: 'Al-olaia',
      phoneNum: '0540055404',
      clause: 'Notes about the user',
      date: '1/11/2022',
      cost: '$50',
      id: '4'
    }
  ]
  // refund table data
  const refundData: RecieptItemsType[] = [
    {
      serviceName: 'hair cut',
      amount: '1',
      price: '40',
      discount: '40%',
      employer: 'esraa',
      date: '20/12/2022',
      id: '1'
    },
    {
      serviceName: 'hair cut',
      amount: '1',
      price: '40',
      discount: '40%',
      employer: 'esraa',
      date: '20/12/2022',
      id: '2'
    },
    {
      serviceName: 'hair cut',
      amount: '1',
      price: '40',
      discount: '40%',
      employer: 'esraa',
      date: '20/12/2022',
      id: '3'
    },
    {
      serviceName: 'hair cut',
      amount: '1',
      price: '40',
      discount: '40%',
      employer: 'esraa',
      date: '20/12/2022',
      id: '3'
    }
  ]

  function onSubmit() {
    //
  }

  return (
    <div className="flex flex-col gap-5 xs:pb-24">
      <SearchForm onSubmit={onSubmit} />
      <SalesInvoices data={data} returnFun={setReturnInvoice} />
      <RefundForm
        data={refundData}
        show={returnInvoice}
        formControler={setReturnInvoice}
      />
    </div>
  )
}

export default Sales
