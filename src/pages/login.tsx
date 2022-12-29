import LoginForm, { FormValue } from 'components/sign/login-form'
import SinHeader from 'components/sign/welcome-header'
import WelcomeLogo from 'components/sign/welcome-logo'
import { useAppDispatch } from 'hooks/useRedux'
import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useLoginMutation } from 'redux/api/auth/authApiSlice'
import { setCredentials } from 'redux/features/authSlice'

function Login() {
  const { t } = useTranslation('sign')
  const { push } = useRouter()
  const [loading, setLoading] = useState(false)

  const [login] = useLoginMutation()

  const dispatch = useAppDispatch()

  const onSubmit = async (values: FormValue) => {
    // setLoading(true)

    try {
      const userData = await login({ ...values }).unwrap()

      dispatch(setCredentials({ ...userData, user: values }))
      // redirect to home page

      // save user info in local storage
      setLoading(false)
      void push('/menu')
    } catch (error: any) {
      if (error.response !== '') {
        console.log('Server Error')
      } else if (error.response.status === 400) {
        console.log(error.response.data.message)
      } else if (error.response.status === 401) {
        console.log(error.response.data.message)
      } else {
        console.log('Login Failed')
      }
    }
  }
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
        <LoginForm onSubmit={onSubmit} loading={loading} />
      </div>
    </div>
  )
}

export default Login
