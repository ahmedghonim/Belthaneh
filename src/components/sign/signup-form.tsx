import { Form, Formik } from 'formik'
import useTranslation from 'next-translate/useTranslation'

import React from 'react'
import { Button, Input, InputPhoneForm } from 'ui'

function SingUpForm() {
  const { t } = useTranslation('common')
  return (
    <Formik onSubmit={() => {}} initialValues={{}}>
      <Form className="space-y-5">
        {/* inputs */}
        <Input label={t('first_name')} name="first_name" />

        <Input label={t('last_name')} name="last_name" />

        <InputPhoneForm label={t('phone_number')} name="phone" />

        <Input label={t('email')} name="email" type="email" />

        <Input label={t('password')} name="password" type="password" />

        {/* Button */}
        <Button fullWidth center className="mt-5" form size="medium" primary>
          {t('sign_up')}
        </Button>
      </Form>
    </Formik>
  )
}

export default SingUpForm
