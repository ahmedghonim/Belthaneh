import { Form, Formik, FormikHelpers } from 'formik'
import useTranslation from 'next-translate/useTranslation'
import React from 'react'
import { Button } from 'ui'
import * as Yup from 'yup'
import AdditionalInfo from './additional-info'
import BasicInfo, { BasicInfoProps } from './basic-info'
import ProfileImg from './profile-image'
import WorkingDays from './working-days'

export interface WorkingDay {
  [key: string]: {
    active: boolean
    periods: Array<{ from: string; to: string; id: string }>
  }
}
interface AddEmployeeFormValues {
  name: string
  jobTitle: string
  email: string
  residence_id: string
  userName: string
  password: string
  country: string
  salary: number
  phone: number
  residence_expire_date: Date
  img: string
  work_days: WorkingDay
  contract_duration: number
  start_date: Date
  recruitment_fees: number
  iqama_Fees: number
  financial_equivalent_fees: number
  start_date_fe: Date
  health_certification_fees: number
  start_date_hc: Date
  medical_insurance_fees: number
  expiry_date_insurance: Date
  insurance_company_name: string
}
interface AddEmployeeFormProps {
  onSubmit: (
    values: AddEmployeeFormValues,
    helpers: FormikHelpers<AddEmployeeFormValues>
  ) => void
  initialValues: null | AddEmployeeFormValues
  basicInfoData: BasicInfoProps
  onCancel: () => void
}
const defaultValues = {
  name: '',
  jobTitle: '',
  email: '',
  residence_id: '',
  userName: '',
  password: '',
  country: '',
  salary: 0,
  phone: 0,
  residence_expire_date: new Date(),
  img: '',
  work_days: {},
  contract_duration: 0,
  start_date: new Date(),
  recruitment_fees: 0,
  iqama_Fees: 0,
  financial_equivalent_fees: 0,
  start_date_fe: new Date(),
  health_certification_fees: 0,
  start_date_hc: new Date(),
  medical_insurance_fees: 0,
  expiry_date_insurance: new Date(),
  insurance_company_name: ''
}
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export default function EmployeeForm({
  onSubmit,
  onCancel,
  initialValues,
  basicInfoData
}: AddEmployeeFormProps) {
  const { t } = useTranslation('common')
  const validationSchema = Yup.object({
    name: Yup.string()
      .max(15, t('name_msg_validation'))
      .required(t('Required')),
    phone: Yup.string()
      .matches(phoneRegExp, t('Phone_not_valid'))
      .required(t('Required')),
    email: Yup.string().email(t('invalid_email'))
  })
  return (
    <Formik
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
      initialValues={{ ...defaultValues, ...initialValues }}
    >
      <Form className="flex flex-col">
        <div className="flex gap-4 w-full sm:flex-row flex-col">
          <div className="flex flex-col gap-4 sm:w-1/4">
            <ProfileImg />
            <WorkingDays />
          </div>
          <div className={'flex flex-col gap-4 sm:w-3/4'}>
            <BasicInfo {...basicInfoData} />
            <AdditionalInfo />
          </div>
        </div>

        <div className="flex gap-4 self-end pt-14">
          <Button className={'bg-transparent'} onClick={onCancel}>
            {t('cancel')}
          </Button>
          <Button primary type="submit">
            {t('add')}
          </Button>
        </div>
      </Form>
    </Formik>
  )
}
