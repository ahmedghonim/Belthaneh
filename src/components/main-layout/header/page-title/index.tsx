import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import React from 'react'

export default function PageTitle() {
  const { pathname } = useRouter()
  const { t } = useTranslation('common')

  return (
    <h1 className="flex-1 text-lg font-bold xs:hidden">
      {t(pathname.split('/')[2])}
    </h1>
  )
}
