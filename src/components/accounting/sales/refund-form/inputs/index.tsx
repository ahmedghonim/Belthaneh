import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import { Form, Formik } from 'formik'
import { Input } from 'ui'

function RefundInputs() {
  const { t } = useTranslation('common')
  // form initial values
  const initialValuesObj = {
    client: '',
    phone: '',
    invoiceTotal: '',
    refund: ''
  }

  // submit form action
  const onSubmit = () => {}

  return (
    <Formik initialValues={initialValuesObj} onSubmit={onSubmit}>
      <Form className="flex flex-col gap-4 flex-wrap">
        <div className="flex gap-5 w-full">
          <div className="flex-1">
            <Input
              isForm
              name="client"
              label={t('client_name')}
              placeholder={t('client_name')}
            />
          </div>
          <div className="flex-1">
            <Input
              isForm
              name="phone"
              label={t('client_number')}
              placeholder={t('client_number')}
            />
          </div>
        </div>
        <div className="flex gap-5 w-full">
          <div className="flex-1">
            <Input
              isForm
              name="invoice-total"
              label={t('invoice_total')}
              placeholder={t('invoice_total')}
            />
          </div>
          <div className="flex-1">
            <Input
              isForm
              name="refund"
              label={t('refund')}
              placeholder={t('refund')}
            />
          </div>
        </div>
      </Form>
    </Formik>
  )
}

export default RefundInputs
