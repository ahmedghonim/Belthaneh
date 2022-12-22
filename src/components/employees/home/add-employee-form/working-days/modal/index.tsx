import React from 'react'
import { Modal } from 'ui'
import WorkDayPeriodForm, {
  WorkDayPeriodFormProps
} from '../work-day-period-form'

interface workDayPeriodModalProps {
  open: boolean
  onClose: () => void
  formPros: WorkDayPeriodFormProps
}

export default function WorkDayPeriodModal({
  open = false,
  onClose,
  formPros
}: workDayPeriodModalProps) {
  return (
    <Modal open={open} onClose={onClose}>
      <WorkDayPeriodForm {...formPros} />
    </Modal>
  )
}
