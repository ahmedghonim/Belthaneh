import React from 'react'
import Modal from 'ui/modal'
import useTranslation from 'next-translate/useTranslation'
import CustomerForm, {
  CustomerFormProps
} from 'components/common/customer-form'

export default function CustomerFormModal({
  handleCancel,
  initialValues,
  onSubmit,
  open
}: CustomerFormProps & { open: boolean }) {
  const { t } = useTranslation('common')
  const header =
    initialValues != null && Object.keys(initialValues)?.length > 0
      ? t('add_customer')
      : t('edit_customer')

  return (
    <Modal onClose={handleCancel} open={open}>
      {header}
      <div className="h-[1px] w-full bg-dark-300 my-[10px]"></div>
      <CustomerForm
        initialValues={initialValues}
        onSubmit={onSubmit}
        handleCancel={handleCancel}
      />
    </Modal>
  )
}
