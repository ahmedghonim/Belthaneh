import WelcomeLogo from 'components/sign/welcome-logo'
import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'
import React from 'react'
import EmailIcon from 'svg/email.svg'
import { Text } from 'ui'
function RecoveryPassword() {
  const { t } = useTranslation('common')

  return (
    <div className="grid grid-cols-2 h-screen w-screen">
      <Head>
        <title>{t('recovery-password')}</title>
      </Head>

      {/* logo */}
      <WelcomeLogo />

      {/* Right side */}
      <div className="flex flex-col justify-center items-center px-36 gap-12">
        {/* Header */}

        <Text as="h1" className="text-primary-100 !text-[36px]">
          {t('recovery-password')}
        </Text>

        <EmailIcon />
        <Text className="text-dark-400">{t('recovery-password_msg')}</Text>
      </div>
    </div>
  )
}

export default RecoveryPassword
