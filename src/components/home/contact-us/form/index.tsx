import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import AnimatedButton from 'components/home/animated-button'
import { Form, Formik } from 'formik'
import { Input, TextArea } from 'ui'
import { ContactInputProps } from 'components/home/types'

function ContactForm({ onSubmit }: { onSubmit: () => void }) {
  const { t } = useTranslation('common')
  const initialValues = {
    name: '',
    mail: '',
    query: '',
    message: ''
  }

  // single input component
  const ContactInput = ({ placeHolder, name }: ContactInputProps) => {
    return (
      <div className="w-full bg-light-300 !rounded-[4px]">
        <Input
          name={name}
          placeholder={placeHolder}
          className="border-none !p-2 h-12 !rounded-none placeholder:text-sm placeholder:text-black"
          isForm
        />
      </div>
    )
  }

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form className="flex flex-col gap-4">
        <ContactInput name="fullName" placeHolder={t('your_full_name')} />
        <ContactInput name="mail" placeHolder={t('your_mail')} />
        <ContactInput name="query" placeHolder={t('query_related')} />
        <div className="bg-light-300 !rounded-[4px]">
          <TextArea
            name="message"
            placeholder={t('message')}
            rows={4}
            className="border-none w-full bg-transparent p-6 placeholder:text-sm placeholder:text-black resize-none"
            isForm
          />
        </div>
        <AnimatedButton
          type="submit"
          text={t('send_message')}
          className="uppercase"
          font="!text-sm"
        />
      </Form>
    </Formik>
  )
}
export default ContactForm
