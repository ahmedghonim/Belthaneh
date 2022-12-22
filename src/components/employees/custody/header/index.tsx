import useTranslation from 'next-translate/useTranslation'
import React from 'react'
import { Button } from 'ui'

function Header({ handleOpen }: { handleOpen: () => void }) {
  const { t } = useTranslation('common')

  return (
    <div>
      <h1 className="text-primary-100 text-base !font-bold capitalize ">
        {t('custody')}
      </h1>
      <div className="flex justify-end">
        <Button primary className="!w-fit !px-4 !py-1" onClick={handleOpen}>
          <span className="capitalize">{t('add_custody')}</span>
        </Button>
      </div>
    </div>
  )
}

export default Header
