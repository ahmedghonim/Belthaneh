import React from 'react'
import SalesTable from './sales-table'
import SearchForm from './serach-form'

function Sales() {
  const data = [
    {
      invoice_no: '#456',
      clause: 'Al-olaia',
      date: '1/11/2022',
      cost: '$50'
    },
    {
      invoice_no: '#456',
      clause: 'Al-olaia',
      date: '1/11/2022',
      cost: '$50'
    },
    {
      invoice_no: '#456',
      clause: 'Al-olaia',
      date: '1/11/2022',
      cost: '$50'
    },
    {
      invoice_no: '#456',
      clause: 'Al-olaia',
      date: '1/11/2022',
      cost: '$50'
    }
  ]
  function onSubmit() {
    //
  }
  return (
    <div className="flex flex-col gap-5">
      <SearchForm onSubmit={onSubmit} />
      <SalesTable data={data} />
    </div>
  )
}

export default Sales
