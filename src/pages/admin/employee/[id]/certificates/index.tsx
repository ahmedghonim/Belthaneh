import Certification, {
  CertificationInitialValuesProps
} from 'components/employees/certification'
import { CertificateItemProps } from 'components/employees/certification/certificate-list'
import { useState } from 'react'

export default function EmployeeCertification() {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] =
    useState<null | CertificationInitialValuesProps>(null)
  const handleOpenModal = () => {
    void setOpen(true)
  }

  const certificationsData: CertificateItemProps[] = [
    {
      id: '0',
      src: 'https://placeimg.com/192/192/people',
      name: 'Certification One',
      number: 123456,
      type: 'type'
    },
    {
      id: '1',
      src: 'https://placeimg.com/192/192/people',
      name: 'Certification Two',
      number: 123456,
      type: 'type'
    },
    {
      id: '2',
      src: 'https://placeimg.com/192/192/people',
      name: 'Certification Three',
      number: 123456,
      type: 'type'
    }
  ]
  const formattedData = certificationsData.map((_item) => {
    const { src, name, type, number, id } = _item
    return {
      ..._item,
      onEdit: () => {
        handleOpenModal()
        setSelected({
          src,
          name,
          type,
          number,
          id
        })
      }
    }
  })
  const onCancel = () => {
    void setOpen(false)
  }
  const data = {
    certificateData: formattedData,
    onSubmit: () => undefined,
    initialValues: selected,
    handleCancel: onCancel,
    handleOpen: handleOpenModal,
    openModal: open
  }
  return <Certification {...data} />
}
