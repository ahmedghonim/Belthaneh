import LoginForm from 'components/sign/login-form'
import SinHeader from 'components/sign/welcome-header'
import WelcomeLogo from 'components/sign/welcome-logo'
import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'
import React from 'react'

function Login() {
  const { t } = useTranslation('sign')
  return (
    <div className="grid grid-cols-2 h-screen w-screen">
      <Head>
        <title>{t('login')}</title>
      </Head>

      {/* logo */}
      <WelcomeLogo />

      {/* Right side */}
      <div className="bg-white flex flex-col justify-center px-32 gap-5">
        {/* LoginFormHeader */}
        <SinHeader />

        {/* Form */}
        <LoginForm />
      </div>
    </div>
  )
}

export default Login
