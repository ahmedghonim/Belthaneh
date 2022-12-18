import ServiceForm, {
  ServiceFormProps
} from 'components/services/forms/service-form'
import useTranslation from 'next-translate/useTranslation'
import { Modal } from 'ui'

export interface ServiceFormModalProps {
  onClose: () => void
  open: boolean
  serviceData: ServiceFormProps
}

export default function ServiceFormModal({
  onClose,
  open,
  serviceData
}: ServiceFormModalProps) {
  const { t } = useTranslation('common')
  const header =
    serviceData.initialValues != null &&
    Object.keys(serviceData.initialValues)?.length > 0
      ? t('edit_service')
      : t('add_service')

  return (
    <Modal open={open} onClose={onClose} header={header}>
      <ServiceForm {...serviceData} />
    </Modal>
  )
}
