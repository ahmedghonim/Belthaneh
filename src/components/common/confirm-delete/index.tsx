import useTranslation from 'next-translate/useTranslation'
import React from 'react'
import { Button, Modal } from 'ui'

export interface ConfirmDeleteModalProps {
  onSubmit: () => void
  onCancel: () => void
  open: boolean
}

export default function ConfirmDeleteModal({
  open,
  onSubmit,
  onCancel
}: ConfirmDeleteModalProps) {
  const { t } = useTranslation('common')

  return (
    <Modal
      open={open}
      onClose={onCancel}
      className="w-1/4"
      wrapperClassName="!p-4"
    >
      <div className="flex flex-col justify-between">
        <h3>{t('delete_msg')}</h3>
        <div className="flex pt-7 justify-start gap-5 w-full">
          <Button onClick={onSubmit} primary>
            {t('yes')}
          </Button>
          <Button onClick={onCancel} className="bg-transparent">
            {t('no')}
          </Button>
        </div>
      </div>
    </Modal>
  )
}
