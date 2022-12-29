import React from 'react'
import Modal from 'ui/modal'
import useTranslation from 'next-translate/useTranslation'
import WaitingForm, {
  WaitingFormProps
} from 'components/booking/forms/waiting-form'

export interface WaitingFormModalProps extends WaitingFormProps {
  open: boolean
}
export default function WaitingFormModal({
  handleCancel,
  initialValues,
  onSubmit,
  open
}: WaitingFormModalProps) {
  const { t } = useTranslation('common')

  return (
    <Modal onClose={handleCancel} open={open} header={t('waiting_List')}>
      <div className="sm:w-[745px] w-full">
        <WaitingForm
          initialValues={initialValues}
          onSubmit={onSubmit}
          handleCancel={handleCancel}
        />
      </div>
    </Modal>
  )
}
