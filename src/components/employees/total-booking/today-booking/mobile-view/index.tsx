import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import { Text } from 'ui'
import { TodayBookingViewsProps } from 'components/employees/total-booking/types'
import CardInfo from 'components/common/card-info'

function TodayBookingMobile({ data }: TodayBookingViewsProps) {
  const { t } = useTranslation('common')
  return (
    <div className="sm:hidden flex flex-col gap-4">
      {data.map((box) => {
        return (
          <CardInfo
            key={box.client}
            header={{ first: t('client'), second: box.client }}
            body={[
              { label: t('date'), value: box.date },
              { label: t('service'), value: box.service },
              { label: t('price'), value: box.price },
              {
                label: t('status'),
                value: (
                  <Text
                    className={`${
                      box.status === 'completed'
                        ? 'text-[#03FF1C]'
                        : 'text-[#F92618]'
                    }`}
                  >
                    {box.status}
                  </Text>
                )
              }
            ]}
          />
        )
      })}
    </div>
  )
}

export default TodayBookingMobile
