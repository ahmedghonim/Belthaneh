import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import PersonalData from './personal-data'
import Boxs from './boxs'
import History from './history'
import { Card, Text } from 'ui'
import ClientChart from './chart'
import { PersonalDataType } from 'components/client/client-profile/types'

// personal dummy data
const personalData: PersonalDataType = {
  src: 'https://placeimg.com/192/192/people',
  ratings: 4,
  activity: '90',
  name: 'Sara alonazi',
  birthDay: '17/2/1990',
  mobile: '966552324433',
  gender: 'female',
  notes: 'she like coffee and red nails'
}

// chart data
const chartData = [
  {
    name: 'Jan',
    uv: 0
  },
  {
    name: 'Feb',
    uv: 40
  },
  {
    name: 'Mar',
    uv: 30
  },
  {
    name: 'Apr',
    uv: 50
  },
  {
    name: 'May',
    uv: 40
  },
  {
    name: 'Jun',
    uv: 60
  },
  {
    name: 'Jul',
    uv: 45
  }
]

function Profile() {
  const { t } = useTranslation('common')
  return (
    <section className="pb-6">
      <section className="flex xs:flex-col gap-5">
        <div className="flex-1">
          <PersonalData data={personalData} />
        </div>
        <Card className="flex-1 overflow-hidden px-2">
          <ClientChart data={chartData} xAxisTicksCount={7} />
        </Card>
      </section>
      <section>
        <Boxs />
      </section>
      <section className="mt-3">
        <Text as="h2" className="capitalize !mb-3">
          {t('history')}
        </Text>
        <History />
      </section>
    </section>
  )
}

export default Profile
