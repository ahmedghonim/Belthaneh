import { Form, Formik, FormikHelpers } from 'formik'
import React from 'react'
import { Button, Input, Select, Text } from 'ui'
import useTranslation from 'next-translate/useTranslation'
import dynamic from 'next/dynamic'
import * as Yup from 'yup'
import { Options } from 'ui/select'
import InventoryForm from './inventory-crud'
import UploadForm from './upload'
const QuillInput = dynamic(async () => await import('ui/quill-input'), {
  ssr: false
})

interface ServiceFormData {
  photo: string
  name: string | null
  category: string
  description: string
  employee: string
  inventories: Array<{
    id: string
    inventory?: Options
    amount: number
    measure?: Options
  }>
  duration: number
  price: number
  measure: Options | null
  inventory: Options | null
  amount: number
}

export interface ServiceFormProps {
  onSubmit: (
    values: ServiceFormData,
    helper: FormikHelpers<ServiceFormData>
  ) => void
  handleCancel: () => void
  initialValues?: ServiceFormData | null
  employees: Options[]
  inventories: Options[]
  categories: Options[]
  measures: Options[]
}
const defaultValues = {
  photo: '',
  name: '',
  category: '',
  description: '',
  employee: '',
  inventories: [],
  inventory: null,
  measure: null,
  duration: 0,
  price: 0,
  amount: 0
}

export default function ServiceForm({
  initialValues,
  onSubmit,
  categories,
  employees,
  measures,
  inventories,
  handleCancel
}: ServiceFormProps) {
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
          <div className="flex sm:gap-4 gap-5 sm:flex-row flex-col">
            <UploadForm />
            <div className="flex flex-col w-full justify-between gap-5">
              <Input
                isForm
                name={'name'}
                label={t('service_name')}
                placeholder={t('service_name')}
              />
              <Select
                isForm
                name={'category'}
                options={categories}
                label={t('select_category')}
                placeholder={t('select_category')}
              />
            </div>
          </div>
          <div>
            <QuillInput
              name={'description'}
              placeholder={t('Description')}
              label={t('Description')}
              isForm
              className="[&>*.ql-container.ql-snow]:h-[161px]"
            />
            <Text size={'xs'} className="!text-dark-300">
              {t('description_service')}
            </Text>
          </div>
          <Select
            isForm
            name={'employee'}
            options={employees}
            label={t('select_employee')}
            placeholder={t('select_employee')}
          />
          <InventoryForm inventories={inventories} measures={measures} />
          <div className="flex gap-4 items-center sm:flex-row flex-col">
            <Input
              isForm
              name={'duration'}
              label={t('duration_per_min')}
              type="number"
            />
            <Input isForm name={'price'} label={t('price')} type="number" />
          </div>
        </div>
        <div className="flex w-full gap-5 justify-end pt-6">
          <Button className={'bg-transparent'} onClick={handleCancel}>
            {t('cancel')}
          </Button>
          <Button primary type="submit">
            {initialValues !== null ? t('edit_service') : t('add_service')}
          </Button>
        </div>
      </Form>
    </Formik>
  )
}
