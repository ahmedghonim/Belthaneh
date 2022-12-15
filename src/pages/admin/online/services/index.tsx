import React, { useState } from 'react'
import ServicesComponent from 'components/online/services'
import { services as mockServices } from 'components/online/services/index.mock'

function Services() {
  const [services, setServices] = useState<any[]>(mockServices)
  const handleCheck = (service: any) => {
    setServices((prevEvents) => {
      const filtered = prevEvents.find((_item) => _item.id === service.id)
      return [...prevEvents, { ...filtered, checked: true }]
    })
  }
  const onUpdate = () => {
    //
  }
  const servicesProps = {
    onUpdate,
    services: services.map((_item) => ({
      ..._item,
      onChange: () => handleCheck(_item)
    }))
  }
  return (
    <div>
      <ServicesComponent {...servicesProps} />
    </div>
  )
}

export default Services
