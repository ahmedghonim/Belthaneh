import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import { Button, Input } from 'ui'
import { Form, Formik } from 'formik'

function ForgetForm() {
  const { t } = useTranslation('common')

  return (
    <Formik onSubmit={() => {}} initialValues={{}}>
      <Form>
        <div className="flex flex-col gap-8">
          <Input label={t('email')} type="email" name="email" />

          <Button form type="submit" fullWidth primary center>
            {t('send')}
          </Button>
        </div>
      </Form>
    </Formik>
  )
}

export default ForgetForm
