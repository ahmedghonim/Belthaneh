import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import JoinSteps from './join-steps'
import AnimatedButton from '../animated-button'
import BltaniaLogo from 'svg/logo.svg'

function GetStarted() {
  const { t } = useTranslation('common')
  return (
    <div className="bg-white pt-[51px] pb-[81px] flex flex-col items-center gap-16 relative">
      <h2 className="text-3xl font-bold text-center">{t('get_started_now')}</h2>
      <div className="w-[70%] relative">
        <JoinSteps />
      </div>
      <div className="w-[25.5%] justify-center">
        <AnimatedButton text={t('start_now')} className="w-full" />
      </div>
      <div className="absolute bottom-[80px] left-[60px] opacity-10">
        <BltaniaLogo className="fill-primary-100 scale-[15]" />
      </div>
    </div>
  )
}

export default GetStarted
