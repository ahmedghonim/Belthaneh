import useTranslation from 'next-translate/useTranslation'
import React from 'react'

export default function Footer() {
  const { t } = useTranslation('common')

  return (
    <div className="hidden sm:flex sm:flex-row flex-col gap-4 dark:bg-dark-200 p-3 my-[6px] justify-end bg-white rounded-md w-fit self-end ">
      <div className="flex gap-3 items-center xs:justify-between">
        <span>{t('from_app')}</span>
        <div className="bg-dark-500 w-8 h-3" />
      </div>
      <div className="flex gap-3 items-center xs:justify-between">
        <span>{t('not_paid')}</span>
        <div className="bg-secondary-100 w-8 h-3" />
      </div>
      <div className="flex gap-3 items-center xs:justify-between">
        <span>{t('paid')}</span>
        <div className="bg-primary-100 w-8 h-3" />
      </div>
    </div>
  )
}
