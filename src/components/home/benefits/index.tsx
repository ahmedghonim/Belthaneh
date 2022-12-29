import React from 'react'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
import SingleBenefit from './benefit'
import FreeUpdates from 'images/free-updates.png'
import FreeSupport from 'images/free-support.png'
import BenefitsImage from 'images/benefits.png'

function Benefits() {
  const { t } = useTranslation('common')
  return (
    <section className="relative px-[80px] pt-[80px] pb-[125px] bg-[#F8F9FA]">
      <div className="w-[55%]">
        <h2 className="text-primary-100 text-3xl font-medium text-center mb-14">
          {t('after_sale_you_will_get')}
        </h2>
        <div className="flex justify-between">
          <SingleBenefit src={FreeUpdates} text={t('free_update')} />
          <SingleBenefit src={FreeSupport} text={t('free_support')} />
        </div>
      </div>
      <div className="absolute top-0 right-0 h-full w-[35%]">
        <Image
          src={BenefitsImage}
          width={1000}
          height={1000}
          alt={t('image')}
          className="w-full h-full"
        />
      </div>
    </section>
  )
}

export default Benefits
