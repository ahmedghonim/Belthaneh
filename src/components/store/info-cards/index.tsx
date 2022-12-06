import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import InfoCard from './card'
import { InfoCardsType } from 'components/store'

const cardsTitles: string[] = [
  'new_orders',
  'all_orders',
  'new_products',
  'all_products'
]

interface Props {
  data: InfoCardsType[]
}
function WebCards({ data }: Props) {
  const { t } = useTranslation('common')

  return (
    <section className="grid xs:grid-cols-1 grid-cols-4 gap-4 mt-10">
      {data.map((card, index) => {
        return (
          <InfoCard
            key={cardsTitles[index]}
            heading={t(cardsTitles[index])}
            data={`${card.num} ${t('order')}`}
            upLeft={`${`${card.upLeft}% ${t('than_yesterday')}`}`}
          />
        )
      })}
    </section>
  )
}

export default WebCards
