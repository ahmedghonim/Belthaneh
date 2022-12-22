import Absence, { AbsenceInitialValues } from 'components/employees/absence'
import { AbsenceItemDataProps } from 'components/employees/absence/absence-table'
import { useState } from 'react'

export default function EmployeeAbsence() {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<null | AbsenceInitialValues>(null)
  const handleOpenModal = () => {
    void setOpen(true)
  }
  const handleCloseModal = () => {
    void setOpen(false)
  }
  const absenceData: AbsenceItemDataProps[] = [
    {
      date: '25/10/2022',
      period: 5,
      type: 'Part Time',
      reason: 'Sick'
    },
    {
      date: '26/10/2022',
      period: 5,
      type: 'Full Time',
      reason: 'Sick'
    },
    {
      date: '27/10/2022',
      period: 5,
      type: 'Part Time',
      reason: 'Sick'
    },
    {
      date: '28/10/2022',
      period: 5,
      type: 'Full Time',
      reason: 'Sick'
    }
  ]
  const formattedData = absenceData.map((_item) => ({
    ..._item,
    onEdit: () => {
      handleOpenModal()
      setSelected({
        period: _item.period,
        type: _item.type,
        reason: _item.reason,
        date: new Date(_item.date)
      })
    }
  }))
  const data = {
    absenceData: formattedData,
    onSubmit: () => undefined,
    initialValues: selected,
    onCancel: handleCloseModal,
    openModal: open,
    handleOpen: handleOpenModal
  }
  return <Absence {...data} />
}
