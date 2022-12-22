import ForgetForm from 'components/sign/forget-form'
import WelcomeLogo from 'components/sign/welcome-logo'
import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { Text } from 'ui'

function ForgetPassword() {
  const { t } = useTranslation('common')

  return (
    <div className="grid grid-cols-2 h-screen w-screen">
      <Head>
        <title>{t('forget-password')}</title>
      </Head>

      {/* logo */}
      <WelcomeLogo />

      {/* Right side */}
      <div className="bg-white flex flex-col justify-center px-36 gap-7">
        {/* Header */}
        <div className="flex flex-col items-center gap-6 w-full ">
          <Text as="h1" className="text-primary-100 !text-[36px]">
            {t('forget-password')}
          </Text>
          <Text as="h2">{t('forget_sub_title')}</Text>
        </div>

        {/* Form */}
        <ForgetForm />

        <Text className="text-dark-400">
          {t('remember_password')}
          <Link href="/login" className="text-primary-100 text-[18px]">
            {t('login')}
          </Link>
        </Text>
      </div>
    </div>
  )
}

export default ForgetPassword
