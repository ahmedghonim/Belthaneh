import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import { Form, Formik } from 'formik'
import { Button, Input, CheckBox } from 'ui'

export interface FormValue {
  phone: string
  password: string
  remember_me: boolean
}
export interface LoginFormProps {
  onSubmit: (values: FormValue) => void
  loading: boolean
}

function LoginForm({ onSubmit, loading }: LoginFormProps) {
  const { t } = useTranslation('common')

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={{ phone: '', password: '', remember_me: false }}
    >
      <Form className="flex flex-col gap-5">
        <Input isForm name="phone" type="number" label={t('phone_number')} />

        <Input isForm name="password" type="password" label={t('password')} />

        <div className="flex justify-between">
          <CheckBox isForm name="remember_me" label={t('remember_me')} />

          <Link href="forget-password" className="text-primary-100 text-md">
            {t('forget')}
          </Link>
        </div>

        <Button center type="submit" primary loading={loading} fullWidth>
          {t('login')}
        </Button>
      </Form>
    </Formik>
  )
}

export default LoginForm
