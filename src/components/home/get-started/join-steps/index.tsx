import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Step from './step'

function JoinSteps() {
  const { t } = useTranslation('common')
  return (
    <div className="flex justify-between relative z-20">
      <Step num="1" text={t('sign_up')} />
      <Step num="2" text={t('add_your_service')} className="animate-300" />
      <Step num="3" text={t('start_your_work')} className="animate-600" />
    </div>
  )
}

export default JoinSteps
