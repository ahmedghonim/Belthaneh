import Custody, {
  CustodyInitialValuesProps
} from 'components/employees/custody'
import { CustodySingleObjectType } from 'components/employees/custody/table'
import { useState } from 'react'

export default function EmployeeCustody() {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<null | CustodyInitialValuesProps>(
    null
  )
  const handleOpenModal = () => {
    void setOpen(true)
  }
  const handleCloseModal = () => {
    void setOpen(false)
  }
  const custodyData: CustodySingleObjectType[] = [
    {
      id: 0,
      custody: 'Hair Cut Machine 1',
      category: 'Category1',
      price: 20,
      amount: 1,
      date: new Date(),
      onEdit: () => undefined,
      onDelete: () => undefined
    },
    {
      id: 1,
      custody: 'Hair Cut Machine 2',
      category: 'Category1',
      price: 20,
      amount: 1,
      date: new Date(),
      onEdit: () => undefined,
      onDelete: () => undefined
    },
    {
      id: 2,
      custody: 'Hair Cut Machine 3',
      category: 'Category1',
      price: 20,
      amount: 1,
      date: new Date(),
      onEdit: () => undefined,
      onDelete: () => undefined
    },
    {
      id: 3,
      custody: 'Hair Cut Machine 4',
      category: 'Category1',
      price: 20,
      amount: 1,
      date: new Date(),
      onEdit: () => undefined,
      onDelete: () => undefined
    }
  ]
  const formattedData = custodyData.map((_item) => ({
    ..._item,
    onEdit: () => {
      handleOpenModal()
      setSelected({
        custody: _item.custody,
        category: _item.category,
        price: _item.price,
        amount: _item.amount,
        date: new Date(_item.date)
      })
    }
  }))
  const data = {
    custodyData: formattedData,
    onSubmit: () => undefined,
    initialValues: selected,
    handleCancel: handleCloseModal,
    openModal: open,
    handleOpen: handleOpenModal
  }
  return <Custody {...data} />
}
