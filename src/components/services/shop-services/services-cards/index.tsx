import React from 'react'
import ServicesCard from './services-card'

function ServicesCards() {
  return (
    <div className="grid xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 gap-3 pt-5 xs:grid-cols-1">
      <ServicesCard />
      <ServicesCard />
      <ServicesCard />
      <ServicesCard />
      <ServicesCard />
      <ServicesCard />
      <ServicesCard />
    </div>
  )
}

export default ServicesCards
