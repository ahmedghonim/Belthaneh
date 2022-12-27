import CustomerFormModal from 'components/common/client-form-modal'
import useTranslation from 'next-translate/useTranslation'
import React from 'react'
import { Button, Select } from 'ui'

interface FieldItem {
  value: string
  label: string
}
export interface ClientProps {
  systemType: 'booking' | 'queue'
  handleSelectCustomer: (value: any) => void
  clients: FieldItem[]
  selectedCustomer: FieldItem | null
  handleAddNewCustomer: () => void
  openCustomerForm: boolean
  onSubmitAddCustomer: (values: any) => void
  onCloseCustomerForm: () => void
}

export default function Client({
  openCustomerForm,
  clients,
  handleSelectCustomer,
  handleAddNewCustomer,
  onCloseCustomerForm,
  onSubmitAddCustomer
}: ClientProps) {
  const { t } = useTranslation('common')

  return (
    <div className="flex gap-5 p-4 dark:bg-dark-200 bg-white rounded-[5px]">
      <Select
        options={clients}
        onChange={handleSelectCustomer}
        label={t('client')}
        required
        placeholder={t('select_customer')}
      />
      <Button
        primary
        onClick={handleAddNewCustomer}
        className="whitespace-nowrap font-bold self-end sm:text-md xs:text-sm !py-2 !px-3"
      >
        {t('add_customer')}
      </Button>
      <CustomerFormModal
        onSubmit={onSubmitAddCustomer}
        open={openCustomerForm}
        handleCancel={onCloseCustomerForm}
      />
    </div>
  )
}
