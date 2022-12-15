import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import React from 'react'

export default function PageTitle() {
  const { pathname } = useRouter()
  const { t } = useTranslation('pages-title')
  const title = `${pathname.split('/').reverse()[1]}_${
    pathname.split('/').reverse()[0]
  }`
  return <h1 className="flex-1 text-lg font-bold xs:hidden">{t(title)}</h1>
}
