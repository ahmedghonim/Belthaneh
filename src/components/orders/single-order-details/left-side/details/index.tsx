import React from 'react'
import MobileDetails from './mobile-details'
import WebDetails from './web-details'

interface Props {
  data: any
}

function Details({ data }: Props) {
  return (
    <section>
      <WebDetails {...data} />
      <MobileDetails {...data} />
    </section>
  )
}

export default Details
