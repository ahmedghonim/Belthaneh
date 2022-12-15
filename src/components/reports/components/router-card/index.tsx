import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import React from 'react'
import { Text } from 'ui'

export interface RouterCardProps {
  icon: any
  label: string
  href: string
}

function RouterCard({ icon, label, href }: RouterCardProps) {
  const { t } = useTranslation('common')
  return (
    <div className="flex justify-between items-center dark:bg-dark-200 bg-white  p-5 rounded-lg hover:drop-shadow-2xl">
      <div className="flex gap-3">
        {icon} <Text>{t(label)}</Text>
      </div>
      <Link
        href={href}
        className="rounded-lg bg-primary-100 py-2 px-5 text-white xs:text-sm"
      >
        {t('get_report')}
      </Link>
    </div>
  )
}

export default RouterCard
