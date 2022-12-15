import useTranslation from 'next-translate/useTranslation'
import { Button, Modal, Select } from 'ui'

interface FieldItem {
  value: string
  label: string
}
export interface QueueModalProps {
  employees: FieldItem[]
  onSelect: (val: unknown) => void
  open: boolean
  onClose: () => void
  onAdd: () => void
}

export default function QueueModal({
  employees,
  onSelect,
  onClose,
  open,
  onAdd
}: QueueModalProps) {
  const { t } = useTranslation('common')

  return (
    <Modal open={open} onClose={onClose}>
      <div className="flex gap-5 flex-col h-40 ">
        <Select
          options={employees}
          onChange={onSelect}
          label={t('select_employee')}
          maxMenuHeight={100}
          className="w-[285px]"
          placeholder={t('select_employee')}
        />
        <div className="flex gap-4 justify-end">
          <Button
            onClick={onClose}
            className={'dark:text-white text-dark-300 bg-transparent'}
          >
            {t('cancel')}
          </Button>
          <Button onClick={onAdd} primary>
            {t('add')}
          </Button>
        </div>
      </div>
    </Modal>
  )
}
