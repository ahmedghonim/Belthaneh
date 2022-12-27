import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import { OrdersTableType } from 'components/client/client-profile/types'
import { DetailsBox, CollapseCard, Text } from 'ui'

interface Props {
  data: OrdersTableType[]
}

const statusCondition: string[] = ['paid', 'completed']

function MobileClientBooking({ data }: Props) {
  const { t } = useTranslation('common')

  return (
    <div className="sm:hidden flex flex-col gap-3">
      {data.map((card) => {
        return (
          <CollapseCard
            key={card.OrderNo}
            title={
              <div className="flex justify-between">
                <Text as="span">{card.client}</Text>
                <span
                  className={
                    statusCondition.includes(card.status)
                      ? 'text-success-200'
                      : 'text-[#FD483C]'
                  }
                >
                  {card.status}
                </span>
              </div>
            }
          >
            <ul className="flex flex-col gap-2 py-2">
              <DetailsBox
                withLabel={true}
                labelType={t('order_no')}
                text={card.OrderNo}
              />
              <DetailsBox
                withLabel={true}
                labelType={t('date')}
                text={card.date}
              />
              <DetailsBox
                withLabel={true}
                labelType={t('order')}
                text={card.order}
              />
              <DetailsBox
                withLabel={true}
                labelType={t('pricing')}
                text={card.pricing}
              />
            </ul>
          </CollapseCard>
        )
      })}
    </div>
  )
}

export default MobileClientBooking
