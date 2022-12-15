import React from 'react'
import WebClientsData from './web-view'
import MobileClientsData from './mobile-view'
import { DataType } from 'components/client/clients/types'

const data: DataType[] = [
  {
    phoneNum: '0123456789',
    name: 'Saad fahad',
    totalVisits: '15',
    totalSales: '$150',
    notes: 'like red nails',
    id: '1'
  },
  {
    phoneNum: '0123456789',
    name: 'Saad fahad',
    totalVisits: '15',
    totalSales: '$150',
    notes: 'like red nails',
    id: '2'
  },
  {
    phoneNum: '0123456789',
    name: 'Saad fahad',
    totalVisits: '15',
    totalSales: '$150',
    notes: 'like red nails',
    id: '3'
  },
  {
    phoneNum: '0123456789',
    name: 'Saad fahad',
    totalVisits: '15',
    totalSales: '$150',
    notes: 'like red nails',
    id: '4'
  },
  {
    phoneNum: '0123456789',
    name: 'Saad fahad',
    totalVisits: '15',
    totalSales: '$150',
    notes: 'like red nails',
    id: '5'
  },
  {
    phoneNum: '0123456789',
    name: 'Saad fahad',
    totalVisits: '15',
    totalSales: '$150',
    notes: 'like red nails',
    id: '6'
  },
  {
    phoneNum: '0123456789',
    name: 'Saad fahad',
    totalVisits: '15',
    totalSales: '$150',
    notes: 'like red nails',
    id: '7'
  }
]

function Data() {
  return (
    <section className="mt-8">
      <WebClientsData data={data} />
      <MobileClientsData data={data} />
    </section>
  )
}

export default Data
