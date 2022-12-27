import React from 'react'
import { FeaturesHolderProps } from 'components/home/types'
import FeatureCard from './card'

function FeaturesHolder({ featuresData, fill }: FeaturesHolderProps) {
  return (
    <div className="grid grid-cols-3 gap-[30px]">
      {featuresData.map((feature) => {
        return <FeatureCard key={feature.title} {...feature} fill={fill} />
      })}
    </div>
  )
}
export default FeaturesHolder
