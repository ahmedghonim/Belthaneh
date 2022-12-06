import { Formik, Form, FormikHelpers } from 'formik'
import useTranslation from 'next-translate/useTranslation'
import Button from 'ui/button'
import Input from 'ui/input'
import InputPhoneForm from 'ui/input-phone-form'
import TextAreaForm from 'ui/text-area'
import * as Yup from 'yup'

export interface FormValuesWaitingForm {
  phone: string
  name: string
  message: string
  phoneCountry: string
}

export interface WaitingFormProps {
  initialValues?: FormValuesWaitingForm | null
  onSubmit: (
    values: FormValuesWaitingForm,
    helpers: FormikHelpers<FormValuesWaitingForm>
  ) => void
  handleCancel: () => void
}

const defaultValues = {
  phone: '',
  name: '',
  message: '',
  phoneCountry: '+966'
}

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export default function WaitingForm({
  initialValues,
  handleCancel,
  onSubmit
}: WaitingFormProps) {
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
      initialValues={{ ...defaultValues, ...initialValues }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form className="flex flex-col gap-4">
        <InputPhoneForm
          name="phone"
          label={`${t('phone')}*`}
          placeholder={t('phone_number')}
          onSelect={() => undefined}
          selected={'+966'}
        />
        <Input
          isForm
          name="name"
          label={`${t('name')}*`}
          placeholder={t('name')}
        />
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
            {t('save')}
          </Button>
        </div>
      </Form>
    </Formik>
  )
}
