import { Formik, Form, FormikHelpers } from 'formik'
import useTranslation from 'next-translate/useTranslation'
import Button from 'ui/button'
import * as Yup from 'yup'
import CustomerFormItems from './form-items'

export interface FormValuesCustomerForm {
  phone: string
  name: string
  email: string
  gender: string
  message: string
  dob: Date | null
  phoneCountry: string
}

export interface CustomerFormProps {
  initialValues?: FormValuesCustomerForm | null
  onSubmit: (
    values: FormValuesCustomerForm,
    helpers: FormikHelpers<FormValuesCustomerForm>
  ) => void
  handleCancel: () => void
}

const defaultValues = {
  phone: '',
  name: '',
  email: '',
  gender: '',
  message: '',
  phoneCountry: '',
  dob: null
}

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export default function CustomerForm({
  initialValues,
  handleCancel,
  onSubmit
}: CustomerFormProps): JSX.Element {
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
  const buttonName =
    initialValues != null && Object?.keys(initialValues)?.length > 0
      ? t('edit_customer')
      : t('add_customer')
  return (
    <Formik
      initialValues={{ ...defaultValues, ...initialValues }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form className="flex flex-col gap-4">
        <CustomerFormItems />
        <div className="flex gap-4 justify-end">
          <Button
            onClick={handleCancel}
            className={'dark:text-white text-dark-300 bg-transparent'}
          >
            {t('cancel')}
          </Button>
          <Button type="submit" primary>
            {buttonName}
          </Button>
        </div>
      </Form>
    </Formik>
  )
}
