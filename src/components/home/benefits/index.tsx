import React from 'react'
import BenefitsContent from './main-content'
import Devices from 'svg/devices.svg'
function Benefits() {
  return (
    <div className="bg-primary-100 py-[80px]">
      <div className="flex justify-between items-center">
        <div className="w-[40%]">
          <Devices />
        </div>
        <BenefitsContent />
      </div>
    </div>
  )
}

export default Benefits
