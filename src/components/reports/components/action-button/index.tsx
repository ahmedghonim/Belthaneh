import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import React from 'react'
import { Button } from 'ui'

function ActionsButton() {
  const { t } = useTranslation('common')
  const { push } = useRouter()
  return (
    <div className="flex gap-5 justify-end">
      <Button
        primaryBorder
        onClick={() => {
          void push('/admin/reports')
        }}
      >
        {t('back')}
      </Button>
      <Button primary>{t('print')}</Button>
    </div>
  )
}

export default ActionsButton
