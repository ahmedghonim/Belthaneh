import Offense, { OffenseInitialValues } from 'components/employees/offense'
import { OffenseItem } from 'components/employees/offense/offense-list'
import { useState } from 'react'

export default function EmployeeOffense() {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<null | OffenseInitialValues>(null)
  const handleOpenModal = () => {
    void setOpen(true)
  }
  const handleCloseModal = () => {
    void setOpen(false)
  }
  const offensesData: OffenseItem[] = [
    {
      id: '0',
      title: 'Bad Behavior',
      date: new Date('19/12/2022'),
      category: 'Category Of Offense',
      type: 'Type Of Offense'
    },
    {
      id: '1',
      title: 'Bad Behavior',
      date: new Date('19/12/2022'),
      category: 'Category Of Offense',
      type: 'Type Of Offense'
    },
    {
      id: '2',
      title: 'Bad Behavior',
      date: new Date('19/12/2022'),
      category: 'Category Of Offense',
      type: 'Type Of Offense'
    },
    {
      id: '3',
      title: 'Bad Behavior',
      date: new Date('19/12/2022'),
      category: 'Category Of Offense',
      type: 'Type Of Offense'
    }
  ]
  const formattedData = offensesData.map((_item) => {
    const { title, category, date, type, id } = _item
    return {
      ..._item,
      onEdit: () => {
        handleOpenModal()
        setSelected({
          title,
          category,
          date,
          type,
          id
        })
      }
    }
  })
  const onCancel = () => {
    void setOpen(false)
  }
  const data = {
    offensesData: formattedData,
    onSubmit: () => undefined,
    initialValues: selected,
    handleCancel: handleCloseModal,
    openModal: open,
    handleOpen: handleOpenModal,
    onCancel
  }
  return <Offense {...data} />
}
