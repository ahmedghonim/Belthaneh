import useTranslation from 'next-translate/useTranslation'
import React from 'react'
import { Button } from 'ui'
import ExportIcon from 'svg/export.svg'

function Header() {
  const { t } = useTranslation('common')

  return (
    <div>
      <h1 className="text-primary-100 text-base !font-bold capitalize ">
        {t('booking')}
      </h1>
      <div className="flex justify-end">
        <Button primary className="!w-fit !px-4 !py-1">
          <ExportIcon />
          <span className="capitalize">{t('export')}</span>
        </Button>
      </div>
    </div>
  )
}

export default Header
