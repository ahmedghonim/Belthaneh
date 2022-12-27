import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Header from '../header'
import AnimatedButton from '../animated-button'

function IntroSection() {
  const { t } = useTranslation('common')
  return (
    <div className="py-9 w-[90%] h-[70vh] m-auto relative">
      <Header />
      <div className="absolute top-[70%] left-1/2 -translate-x-1/2 -translate-y-1/2">
        <AnimatedButton text={t('start_now')} className="w-[158px] h-[42px]" />
      </div>
    </div>
  )
}

export default IntroSection
