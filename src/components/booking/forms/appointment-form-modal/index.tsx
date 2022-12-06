import Modal from 'ui/modal'
import AppointmentForm, {
  AppointmentFormProps
} from 'components/booking/forms/appointment-form'
import useTranslation from 'next-translate/useTranslation'

export interface AppointmentFormModalProps extends AppointmentFormProps {
  open: boolean
  handleCancel: () => void
}
export default function AppointmentFormModal({
  handleCancel,
  initialValues,
  onSubmit,
  open,
  customers,
  employees,
  services
}: AppointmentFormModalProps) {
  const { t } = useTranslation('common')
  const header =
    initialValues != null && Object.keys(initialValues)?.length > 0
      ? t('edit_appointment')
      : t('add_appointment')

  return (
    <Modal onClose={handleCancel} open={open} header={header}>
      <AppointmentForm
        initialValues={initialValues}
        onSubmit={onSubmit}
        customers={customers}
        employees={employees}
        services={services}
      />
    </Modal>
  )
}
