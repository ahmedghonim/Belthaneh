import React from 'react'
import InfoCards from './info-cards'
import BestSellingHead from './best-selling-head'
import BestSelling from './best-selling'

export interface InfoCardsType {
  num: number
  upLeft: number
}

export interface BestSellingType {
  productNum?: string | number
  productName: string
  sold: string | number
  pricing: string | number
  status: string | boolean
}

// Best Selling Table Dummy Data
const bestSeelingData: BestSellingType[] = [
  {
    productNum: '#4556',
    productName: 'Saad Fahad',
    sold: '120',
    pricing: '120',
    status: true
  },
  {
    productNum: '#4556',
    productName: 'Saad Fahad',
    sold: '50',
    pricing: '120',
    status: true
  },
  {
    productNum: '#4556',
    productName: 'Saad Fahad',
    sold: '10',
    pricing: '120',
    status: false
  },
  {
    productNum: '#4556',
    productName: 'Saad Fahad',
    sold: '56',
    pricing: '120',
    status: true
  }
]

// OverView Boxs Data
const infoCards: any = [
  {
    num: 25,
    upLeft: -2
  },
  {
    num: 25,
    upLeft: -2
  },
  {
    num: 25,
    upLeft: -2
  },
  {
    num: 25,
    upLeft: -2
  }
]

function StoreOverView() {
  return (
    <section>
      <InfoCards data={infoCards} />
      <BestSellingHead />
      <BestSelling data={bestSeelingData} />
    </section>
  )
}

export default StoreOverView
