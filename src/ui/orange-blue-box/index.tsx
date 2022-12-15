import React from 'react'
import { Card, Text } from 'ui'

interface Props {
  type: string
  value: string | number
  icon: SVGAElement | any
  iconBg: string
}

function OrangeBlueBox({ type, value, icon, iconBg }: Props) {
  return (
    <Card className="p-4">
      <div className="flex gap-3">
        <div className={`relative -top-7  p-4 rounded-md ${iconBg}`}>
          {icon}
        </div>
        <Text as="h2" className="!text-center !text-md ">
          {type}
        </Text>
      </div>
      <Text as="p" className="!text-[#4CAF50]">
        {value}
      </Text>
    </Card>
  )
}

export default OrangeBlueBox
