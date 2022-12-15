import React from 'react'
import BasicInfoForm from '../basic-info-form'
import { Formik, Form, FormikHelpers } from 'formik'
import PasswordForm from '../password-form'
import * as Yup from 'yup'
import useTranslation from 'next-translate/useTranslation'

interface InitialValues {
  name: string
  email: string
  password: string
  phone: string
  language: string
  newPassword: string
  confirmPassword: string
}
export interface SettingFormProps {
  initialValues: InitialValues
  onSubmit: (
    values: InitialValues,
    helpers: FormikHelpers<InitialValues>
  ) => void
}
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const defaultValues = {
  name: '',
  email: '',
  password: '',
  phone: '',
  language: '',
  newPassword: '',
  confirmPassword: ''
}

export default function SettingForm({
  onSubmit,
  initialValues
}: SettingFormProps) {
  const { t } = useTranslation('common')
  const validationSchema = Yup.object({
    name: Yup.string()
      .max(15, t('name_msg_validation'))
      .required(t('Required')),
    phone: Yup.string()
      .matches(phoneRegExp, t('Phone_not_valid'))
      .required(t('Required')),
    language: Yup.string().required(t('Required')),
    email: Yup.string().email(t('invalid_email')).required(t('Required')),
    password: Yup.string().max(8, t('password_msg_validation')),
    newPassword: Yup.string()
      .trim()
      .matches(/^(?=.*[a-z])/, t('SMALL_LETTER'))
      .matches(/^(?=.*[A-Z])/, t('CAPITAL_LETTER'))
      .matches(
        /^.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?].*$/,
        t('SPECIAL_CHARACTER')
      )
      .matches(/^(?=.*[0-9])/, t('NUMBER'))
      .min(6, t('INVALID_MIN_CHARACTER')),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref('password'), null],
      t('Passwords_must_match')
    )
  })

  return (
    <>
      <Formik
        initialValues={{ ...defaultValues, ...initialValues }}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="flex gap-4 sm:flex-row flex-col  w-full">
          <BasicInfoForm />
          <PasswordForm />
        </Form>
      </Formik>
    </>
  )
}
