import useTranslation from 'next-translate/useTranslation'
import TimePicker from 'react-multi-date-picker/plugins/time_picker'
import { Button, DateInput, Modal, Select } from 'ui'

interface FieldItem {
  value: string
  label: string
}
export interface BookingModalProps {
  employees: FieldItem[]
  onSelect: (val: unknown) => void
  onChangeDate: () => void
  open: boolean
  onClose: () => void
  onAdd: () => void
}

export default function BookingModal({
  employees,
  onSelect,
  onClose,
  open,
  onAdd,
  onChangeDate
}: BookingModalProps) {
  const { t } = useTranslation('common')

  return (
    <Modal open={open} onClose={onClose}>
      <div className="flex gap-5 flex-col h-72">
        <Select
          options={employees}
          onChange={onSelect}
          label={t('employee')}
          className="w-[285px]"
          maxMenuHeight={120}
          placeholder={t('select_employee')}
        />
        <DateInput
          format="DD/MM/YYYY HH:mm"
          plugins={[
            <TimePicker
              position="bottom"
              style={{ minWidth: '257px' }}
              key={'date_time'}
            />
          ]}
          name="date"
          placeholder={t('time')}
          onChange={onChangeDate}
        />
        <div className="flex gap-4 justify-end ">
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
