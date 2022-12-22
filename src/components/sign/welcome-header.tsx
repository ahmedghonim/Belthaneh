import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import React from 'react'
import { Text } from 'ui'

export default function SinHeader({
  subTitle = 'no_account',
  redirect = 'sign_up',
  redirectURL = '/signup'
}) {
  const { t } = useTranslation('common')
  return (
    <div className="flex flex-col gap-5">
      <div>
        <Text as="h2" size="xl">
          {t('get_started')}
        </Text>
      </div>
      <Text as="h3">
        {t(subTitle)}{' '}
        <Link href={redirectURL} className="text-primary-100 text-[18px]">
          {t(redirect)}
        </Link>
      </Text>
    </div>
  )
}
