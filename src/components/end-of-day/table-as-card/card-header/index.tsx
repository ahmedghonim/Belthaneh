import useTranslation from 'next-translate/useTranslation'
import React from 'react'
import Wallet from 'svg/wallet.svg'
import Text from 'ui/text'
import { HeaderProps } from '../Types'

function CardHeader({ name }: HeaderProps) {
  const { t } = useTranslation('common')
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-3">
        <Wallet className="scale-75" />
        <Text white>{t(name)}</Text>
      </div>
    </div>
  )
}

export default CardHeader
