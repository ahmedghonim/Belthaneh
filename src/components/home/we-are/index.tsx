import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'

function WeAreSection() {
  const { t } = useTranslation('common')
  return (
    <div className="bg-white relative overflow-hidden">
      <div className="flex items-center justify-end py-[119px]">
        <div className="w-[60%] flex flex-col gap-3 px-24">
          <h1 className="text-black text-[36px] font-bold">
            {t('we_are_head')}
          </h1>
          <p className="text-black text-[20px]">{t('we_are_paragraph')}</p>
        </div>
      </div>
      <div className="absolute left-0 top-0 h-full">
        <Image
          src="/images/we-are.png"
          width={500}
          height={500}
          alt={t('image')}
          className="!h-full"
        />
      </div>
    </div>
  )
}

export default WeAreSection
