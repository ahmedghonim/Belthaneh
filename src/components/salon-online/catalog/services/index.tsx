import React from 'react'
import ServiceBox from './box'
import { CatalogPropsType } from 'components/salon-online/type'

function SalonServices({ services }: CatalogPropsType) {
  return (
    <div className="grid xs:grid-cols-1 grid-cols-3 gap-5">
      {services.map((box) => {
        return <ServiceBox key={box.service} {...box} />
      })}
    </div>
  )
}

export default SalonServices
