import useTranslation from 'next-translate/useTranslation'
import React from 'react'
import Logo from 'svg/logo.svg'
import { Text } from 'ui'

function WelcomeLogo() {
  const { t } = useTranslation('common')

  return (
    <div className="bg-primary-100 flex justify-center items-center gap-16 flex-col">
      <Logo className="transform scale-[4]" />
      <Text white as="h1" className="font-bold !text-3xl">
        {t('belthanih')}
      </Text>
    </div>
  )
}

export default WelcomeLogo
