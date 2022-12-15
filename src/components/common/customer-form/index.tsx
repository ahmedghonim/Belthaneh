import { Formik, Form, FormikHelpers } from 'formik'
import useTranslation from 'next-translate/useTranslation'
import Button from 'ui/button'
import DateInputForm from 'ui/dateInput'
import Input from 'ui/input'
import InputPhoneForm from 'ui/input-phone-form'
import Select, { Options } from 'ui/select'
import TextAreaForm from 'ui/text-area'
import * as Yup from 'yup'

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
  phoneCountry: '+966',
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
  const genderList: Options[] = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' }
  ]
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
      {({
        values,
        setFieldValue
      }: {
        values: FormValuesCustomerForm
      } & FormikHelpers<FormValuesCustomerForm>) => (
        <Form className="flex flex-col gap-4">
          <InputPhoneForm
            name="phone"
            label={`${t('phone')}*`}
            placeholder={t('phone_number')}
            onSelect={() => undefined}
            selected={'+966'}
          />
          <span className="flex flex-col sm:flex-row gap-4">
            <Input
              isForm
              name="name"
              label={`${t('name')}*`}
              placeholder={t('name')}
            />
            <Input
              isForm
              name="email"
              label={t('email')}
              placeholder={t('email')}
            />
          </span>
          <span className="flex flex-col sm:flex-row gap-4">
            <div className="relative w-full justify-between">
              <label
                htmlFor={'gender'}
                className={
                  ' text-start block mb-2 text-sm  w-full text-dark-200 dark:text-white font-normal'
                }
              >
                {t('gender')}
              </label>
              <Select
                onChange={(val) => setFieldValue('gender', val)}
                value={values.gender}
                name={'gender'}
                options={genderList}
                className="w-full text-start"
                placeholder={t('select_gender')}
              />
            </div>
            <DateInputForm
              name="dob"
              label={t('dob')}
              placeholder={t('dob')}
              isForm
            />
          </span>
          <TextAreaForm
            name="message"
            label={t('message')}
            placeholder={t('Type_anything')}
            rows={4}
            isForm
          />
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
      )}
    </Formik>
  )
}
