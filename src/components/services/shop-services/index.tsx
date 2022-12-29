import Navigation from '../navigation'
import { Chip } from 'ui'
import Services, { ServicesProps } from './services'
import { ChipProps } from 'ui/chip'
import ServiceFormModal, {
  ServiceFormModalProps
} from '../modals/service-form-modal'
import CategoryFormModal, {
  CategoryFormModalProps
} from '../modals/category-form-modal'

interface ShopServicesProps {
  services: ServicesProps['list']
  categories: ChipProps[]
  handleAddCategory: () => void
  handleAddService: () => void
  serviceFormModalData: ServiceFormModalProps
  categoryFormModalData: CategoryFormModalProps
}

function ShopServices({
  services,
  categories,
  handleAddCategory,
  handleAddService,
  serviceFormModalData,
  categoryFormModalData
}: ShopServicesProps) {
  return (
    <div className="space-y-5">
      {/* navigation buttons and Add Service */}
      <Navigation handleAddService={handleAddService} />
      {/* Category and Add Category */}
      <Chip
        list={categories}
        handleAddCategory={handleAddCategory}
        size={'xSmall'}
      />
      {/* Services */}
      <Services list={services} />
      <ServiceFormModal {...serviceFormModalData} />
      <CategoryFormModal {...categoryFormModalData} />
    </div>
  )
}

export default ShopServices
