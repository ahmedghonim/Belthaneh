import { Form, Formik, FormikHelpers } from 'formik'
import useTranslation from 'next-translate/useTranslation'
import React from 'react'
import { Button, Input } from 'ui'
import * as Yup from 'yup'
import ServiceForm from './service-crud'
import UploadForm from './upload'
import { Options } from 'ui/select'
import DurationForm from './duration'

interface PackageFormData {
  photo: string
  title: string
  services: Array<{
    value: string
    label: string
    amount: number
    price: number
  }> | null
  duration: string
  durationType: string
  amount: number
  price: number
  service: Options | null
}

export interface PackageFormProps {
  onSubmit: (
    values: PackageFormData,
    helper: FormikHelpers<PackageFormData>
  ) => void
  initialValues?: PackageFormData | null
  services: Options[]
  handleCancel: () => void
}
const defaultValues = {
  photo: '',
  title: '',
  services: null,
  service: null,
  duration: '',
  durationType: 'day',
  amount: 0,
  price: 0
}

export default function PackageForm({
  initialValues,
  onSubmit,
  handleCancel,
  services
}: PackageFormProps) {
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
        <div className="sm:w-[842px] flex gap-5 sm:flex-row flex-col w-full">
          <div>
            <UploadForm />
          </div>
          <div className="flex sm:gap-4 gap-5 flex-col  w-full">
            <Input
              isForm
              name={'name'}
              label={t('package_title')}
              placeholder={t('package_title')}
            />
            <ServiceForm services={services} />
            <DurationForm />
            <div className="flex w-full gap-4 sm:flex-row flex-col">
              <Input type="number" name={'price'} label={t('price')} isForm />
              <Input
                type="number"
                name={'discount'}
                label={t('discount')}
                isForm
              />
            </div>
          </div>
        </div>
        <div className="flex w-full gap-5 justify-end pt-6">
          <Button className={'bg-transparent'} onClick={handleCancel}>
            {t('cancel')}
          </Button>
          <Button primary type="submit" className="sm:px-14 px-11">
            {initialValues !== null ? t('edit') : t('add')}
          </Button>
        </div>
      </Form>
    </Formik>
  )
}
