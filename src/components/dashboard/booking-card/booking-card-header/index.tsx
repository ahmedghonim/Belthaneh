import useTranslation from 'next-translate/useTranslation'
import React from 'react'
import User from 'svg/user.svg'
import Text from 'ui/text'
import { HeaderProps } from '../Types'

function BookingCardHeader({ name }: HeaderProps) {
  const { t } = useTranslation('common')
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-3">
        <User size="sm" className="dark:fill-dark-300" />
        <Text>{name}</Text>
      </div>
      <Text size="sm" danger={true}>
        {t('cancelled')}
      </Text>
    </div>
  )
}

export default BookingCardHeader
