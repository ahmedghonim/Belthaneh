import { Form, Formik } from 'formik'
import useTranslation from 'next-translate/useTranslation'
import React from 'react'
import { Button, Input } from 'ui'

function ResetForm() {
  const { t } = useTranslation('common')
  return (
    <Formik onSubmit={() => {}} initialValues={{}}>
      <Form className="space-y-5">
        <Input type="password" label={t('new_password')} name="new_password" />
        <Input
          type="password"
          label={t('confirm_password')}
          name="confirm_password"
        />

        <Button
          size="medium"
          type="submit"
          className="mt-5"
          center
          fullWidth
          primary
        >
          {t('save')}
        </Button>
      </Form>
    </Formik>
  )
}

export default ResetForm
