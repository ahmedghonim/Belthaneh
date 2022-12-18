import PackageForm, {
  CategoryFormProps
} from 'components/services/forms/category-form'
import useTranslation from 'next-translate/useTranslation'
import { Modal } from 'ui'

export interface CategoryFormModalProps {
  onClose: () => void
  open: boolean
  categoryData: CategoryFormProps
}

export default function CategoryFormModal({
  onClose,
  open,
  categoryData
}: CategoryFormModalProps) {
  const { t } = useTranslation('common')
  const header = t('add_category')

  return (
    <Modal open={open} onClose={onClose} header={header}>
      <PackageForm {...categoryData} />
    </Modal>
  )
}
