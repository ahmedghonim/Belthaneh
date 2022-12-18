import PackageForm, {
  PackageFormProps
} from 'components/services/forms/package-form'
import useTranslation from 'next-translate/useTranslation'
import { Modal } from 'ui'

export interface PackageFormModalProps {
  onClose: () => void
  open: boolean
  packageData: PackageFormProps
}

export default function PackageFormModal({
  onClose,
  open,
  packageData
}: PackageFormModalProps) {
  const { t } = useTranslation('common')
  const header =
    packageData.initialValues != null &&
    Object.keys(packageData.initialValues)?.length > 0
      ? t('edit_package')
      : t('add_package')

  return (
    <Modal open={open} onClose={onClose} header={header}>
      <PackageForm {...packageData} />
    </Modal>
  )
}
