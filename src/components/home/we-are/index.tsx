import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import WeAreImage from 'svg/we-are-image.svg'

function WeAreSection() {
  const { t } = useTranslation('common')
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between">
        <div>
          <span className="relative !top-[2px]">
            <WeAreImage />
          </span>
        </div>
        <div className="w-[60%] flex flex-col gap-3 px-24">
          <h1 className="text-black text-[36px] font-bold">
            {t('we_are_head')}
          </h1>
          <p className="text-black text-[20px]">{t('we_are_paragraph')}</p>
        </div>
      </div>
    </div>
  )
}

export default WeAreSection
