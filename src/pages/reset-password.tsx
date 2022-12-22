import ResetForm from 'components/sign/reset-form'
import WelcomeLogo from 'components/sign/welcome-logo'
import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'
import React from 'react'
import { Text } from 'ui'

function ResetPassword() {
  const { t } = useTranslation('common')

  return (
    <div className="grid grid-cols-2 h-screen w-screen">
      <Head>
        <title>{t('reset-password')}</title>
      </Head>

      {/* logo */}
      <WelcomeLogo />

      {/* Right side */}
      <div className="flex flex-col justify-center px-36 gap-5">
        {/* Header */}
        <div className="flex flex-col items-center gap-6 w-full ">
          <Text className="text-primary-100 !text-[36px]">
            {t('reset-password')}
          </Text>
        </div>

        {/* Form */}
        <ResetForm />
      </div>
    </div>
  )
}

export default ResetPassword
