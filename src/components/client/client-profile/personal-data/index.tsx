import React from 'react'
import LeftSide from './left-side'
import RightSide from './right-side'
import { PersonalDataType } from 'components/client/client-profile/types'
import { Card } from 'ui'

interface Props {
  data: PersonalDataType
}

function PersonalData({ data }: Props) {
  return (
    <Card className="flex justify-between items-start py-5 gap-4">
      <LeftSide
        src={data.src}
        ratings={data.ratings}
        activity={data.activity}
      />
      <RightSide {...data} />
    </Card>
  )
}

export default PersonalData
