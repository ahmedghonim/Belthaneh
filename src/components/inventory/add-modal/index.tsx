import Modal from 'ui/modal'
import useTranslation from 'next-translate/useTranslation'
import InventoryForm, {
  InventoryFormProps
} from 'components/inventory/inventory-form'

export interface InventoryModalFormProps extends InventoryFormProps {
  open: boolean
  handleCancel: () => void
}
export default function InventoryModalForm({
  handleCancel,
  initialValues,
  onSubmit,
  open,
  categories,
  measures
}: InventoryModalFormProps) {
  const { t } = useTranslation('common')
  const header =
    initialValues != null && Object.keys(initialValues)?.length > 0
      ? t('edit_inventory')
      : t('create_inventory')

  return (
    <Modal onClose={handleCancel} open={open} header={header}>
      <InventoryForm
        initialValues={initialValues}
        onSubmit={onSubmit}
        handleCancel={handleCancel}
        categories={categories}
        measures={measures}
      />
    </Modal>
  )
}
