import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import CardInfo from 'components/common/card-info'
import moment from 'moment'
import { OffenseItem } from '../offense-list'

function OffenseListMobile({ data }: { data: OffenseItem[] }) {
  const { t } = useTranslation('common')

  return (
    <>
      {data.map((offense) => {
        return (
          <CardInfo
            key={offense.id}
            header={{ first: t('title'), second: offense.title }}
            body={[
              {
                label: t('date'),
                value: moment(offense.date).format('DD/MM/YYYY')
              },
              { label: t('category'), value: offense.category },
              { label: t('type'), value: offense.type }
            ]}
          />
        )
      })}
    </>
  )
}
export default OffenseListMobile
