import { Form, Formik, FormikHelpers } from 'formik'
import React from 'react'
import { Button, Input } from 'ui'
import useTranslation from 'next-translate/useTranslation'
import * as Yup from 'yup'

export interface CategoryFormData {
  name: string
}

export interface CategoryFormProps {
  onSubmit: (
    values: CategoryFormData,
    helper: FormikHelpers<CategoryFormData>
  ) => void
  handleCancel: () => void
  initialValues?: CategoryFormData | null
}
const defaultValues = {
  name: ''
}

export default function ServiceForm({
  initialValues,
  onSubmit,
  handleCancel
}: CategoryFormProps) {
  const { t } = useTranslation('common')
  const validationSchema = Yup.object({
    name: Yup.string()
      .max(15, t('name_msg_validation'))
      .trim()
      .required(t('Required'))
  })

  return (
    <Formik
      initialValues={{ ...defaultValues, ...initialValues }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      enableReinitialize={true}
    >
      <Form>
        <div className="sm:w-[842px] flex flex-col gap-5">
          <Input
            isForm
            name={'name'}
            label={t('category_name')}
            placeholder={t('category_name')}
          />
        </div>
        <div className="flex w-full gap-5 justify-end pt-6">
          <Button className={'bg-transparent'} onClick={handleCancel}>
            {t('cancel')}
          </Button>
          <Button primary type="submit">
            {t('save')}
          </Button>
        </div>
      </Form>
    </Formik>
  )
}
