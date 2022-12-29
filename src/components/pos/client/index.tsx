import { FormValuesCustomerForm } from 'components/common/client-form'
import CustomerFormModal from 'components/common/client-form-modal'
import { useFormikContext } from 'formik'
import useTranslation from 'next-translate/useTranslation'
import React from 'react'
import { Button, Select } from 'ui'
import { Options } from 'ui/select'

export interface ClientProps {
  clients: Options[]
}

export default function Client({ clients }: ClientProps) {
  const { t } = useTranslation('common')
  const { setFieldValue, values } = useFormikContext<{
    client: Options
    openCustomerForm: boolean
    newClient: FormValuesCustomerForm
  }>()
  const onSubmitAddCustomer = (values: FormValuesCustomerForm) => {
    setFieldValue('newClient', values)
  }
  const onCloseCustomerForm = () => {
    setFieldValue('openCustomerForm', false)
  }
  const handleAddNewCustomer = () => {
    setFieldValue('openCustomerForm', true)
  }
  return (
    <div className="flex gap-5 p-4 dark:bg-dark-200 bg-white rounded-[5px]">
      <Select
        options={clients}
        onChange={(option) => {
          setFieldValue('client', option)
        }}
        label={t('client')}
        isForm
        value={values.client}
      />
      <Button
        primary
        onClick={handleAddNewCustomer}
        className="whitespace-nowrap self-end sm:text-md xs:text-sm !py-2 !px-3 font-bold"
      >
        {t('add_customer')}
      </Button>
      <CustomerFormModal
        onSubmit={onSubmitAddCustomer}
        open={values.openCustomerForm ?? false}
        handleCancel={onCloseCustomerForm}
      />
    </div>
  )
}
