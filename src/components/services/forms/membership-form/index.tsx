import { Form, Formik, FormikHelpers } from 'formik'
import useTranslation from 'next-translate/useTranslation'
import React from 'react'
import { Button, CollapseCard, Text } from 'ui'
import { Options } from 'ui/select'
import BasicInfoForm from './basic-info'
import DiscountServiceForm from './discount-service'
import FeatureForm from './feature'
import FreeServiceForm from './free-service'
import MembershipPolices from './membership-polices'

interface MembershipFormData {
  photo: string
  name: string
  category: string
  description: string
  employee: string
  inventory: string
  amount: number
  measure: string
  duration: number
  price: number
  freeService: { service: Options; quantity: number; id: string }
  discountService: {
    service: Options
    quantity: number
    id: string
    discount: number
  }
  freeServices: Array<{ service: Options; quantity: number; id: string }>
  discountServices: Array<{
    service: Options
    quantity: number
    id: string
    discount: number
  }>
  polices: Array<{ policy: string; id: string }>
  features: Array<{ policy: string; id: string }>
}

export interface MembershipFormProps {
  onSubmit: (
    values: MembershipFormData,
    helper: FormikHelpers<MembershipFormData>
  ) => void
  initialValues?: MembershipFormData | null
  services: Options[]
  handleCancel: () => void
}
const defaultValues = {
  photo: '',
  name: '',
  category: '',
  description: '',
  employee: '',
  inventory: '',
  amount: 0,
  measure: '',
  duration: 0,
  price: 0,
  freeService: { service: { value: '', label: '' }, quantity: 0, id: '' },
  discountService: {
    service: { value: '', label: '' },
    quantity: 0,
    id: '',
    discount: 0
  },
  freeServices: [],
  discountServices: [],
  polices: [],
  features: []
}

export default function MembershipForm({
  initialValues,
  onSubmit,
  services,
  handleCancel
}: MembershipFormProps) {
  const { t } = useTranslation('common')
  const Card = ({
    title,
    children
  }: {
    title: string
    children: React.ReactNode
  }) => (
    <CollapseCard
      title={<Text className="font-bold">{title}</Text>}
      classNameWrapper="px-0 bg-white"
      className="rounded-[5px] bg-white"
    >
      <div
        className={
          'dark:bg-dark-200 bg-white w-full px-4 sm:pb-14 pb-5 rounded-[5px]'
        }
      >
        {children}
      </div>
    </CollapseCard>
  )

  return (
    <Formik
      initialValues={{ ...defaultValues, ...initialValues }}
      onSubmit={onSubmit}
    >
      <Form className="flex flex-col gap-5">
        <Card title={t('basic_info')}>
          <BasicInfoForm />
        </Card>
        <Card title={t('free_service')}>
          <FreeServiceForm services={services} />
        </Card>
        <Card title={t('discount_service')}>
          <DiscountServiceForm services={services} />
        </Card>
        <Card title={t('feature')}>
          <FeatureForm />
        </Card>
        <Card title={t('membership_policies')}>
          <MembershipPolices />
        </Card>
        <div className="flex w-full gap-5 justify-end pt-6">
          <Button className={'bg-transparent'} onClick={handleCancel}>
            {t('cancel')}
          </Button>
          <Button primary type="submit" className={'py-2 px-16'}>
            {initialValues !== null ? t('edit') : t('add')}
          </Button>
        </div>
      </Form>
    </Formik>
  )
}
