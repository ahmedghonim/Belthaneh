import React from 'react'
import { BestSellingType } from '..'
import MobileBestSelling from './mobile-best-selling'
import WebBestSelling from './web-best-selling'

interface Props {
  data: BestSellingType[]
}

export default function index({ data }: Props) {
  return (
    <section>
      <MobileBestSelling data={data} />
      <WebBestSelling data={data} />
    </section>
  )
}
