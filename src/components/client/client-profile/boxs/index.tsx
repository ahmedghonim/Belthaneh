import React from 'react'
import MobileBoxs from './at-mobile'
import WebBoxs from './at-web'
import { BoxsDataType } from 'components/client/client-profile/types'

function Boxs() {
  // boxs dummy data
  const boxsDummyData: BoxsDataType = {
    lastService: 'Hair cut',
    payment: '1989$',
    visitsNum: '4',
    mostServices: 'Massag'
  }
  return (
    <div className="mt-8">
      <WebBoxs {...boxsDummyData} />
      <MobileBoxs {...boxsDummyData} />
    </div>
  )
}

export default Boxs
