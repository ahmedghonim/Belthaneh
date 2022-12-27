import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import BenefitsList from './list'
import { Button } from 'ui'

function BenefitsContent() {
  const { t } = useTranslation('common')

  return (
    <div className="w-[40%]">
      <h2 className="text-white text-2xl font-medium">
        {t('after_sale_you_will_get')}
      </h2>
      <BenefitsList />
      <Button className="relative w-[63%] justify-center !text-primary-100 !text-xs !font-bold [&:hover>.layer]:w-full [&:hover>.text]:text-white overflow-hidden">
        <span className="text text-xs z-20 duration-700">{t('start_now')}</span>
        <span className="layer absolute top-0 left-0 w-0 h-full bg-secondary-100 z-10 duration-700" />
        <span className="layer absolute top-0 right-0 w-0 h-full bg-secondary-100 z-10 duration-700" />
      </Button>
    </div>
  )
}
export default BenefitsContent
