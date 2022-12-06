import useTranslation from 'next-translate/useTranslation'
import React from 'react'
import Text from 'ui/text'
import { BodyProps } from '../Types'

function BookingCardBody({ total, order, date }: BodyProps) {
  const { t } = useTranslation('common')
  return (
    <div className="flex flex-col gap-3 pt-2">
      <div className="flex justify-between">
        <Text size="md">{t('total')}</Text>
        <Text size="md">
          {total}
          {t('rsa')}
        </Text>
      </div>

      <div className="flex justify-between">
        <Text size="md">{t('order')}</Text>
        <Text size="md">#{order}</Text>
      </div>

      <div className="flex justify-between">
        <Text size="md">{t('date')}</Text>
        <Text size="md">{date.toDateString()}</Text>
      </div>
    </div>
  )
}

export default BookingCardBody
