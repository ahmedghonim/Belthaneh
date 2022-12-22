import React, { useState } from 'react'
import InventoryList, {
  InventoryListProps
} from 'components/inventory/inventory-list'
import { Button, Chip, Select, Tabs } from 'ui'
import { Options } from 'ui/select'
import { ChipProps } from 'ui/chip'
import { InventoryFormProps } from 'components/inventory/inventory-form'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'
import InventoryModalForm from 'components/inventory/add-modal'
import Footer from 'components/inventory/footer'
import ConfirmDeleteModal, {
  ConfirmDeleteModalProps
} from 'components/common/confirm-delete'
import Plus from 'svg/plus.svg'
import CategoryFormModal, {
  CategoryFormModalProps
} from './category-form-modal'

export interface InventoryProps {
  categories: ChipProps[]
  handleAddCategory: () => void
  handleAddProduct: () => void
  formProps: InventoryFormProps
  inventoryListProps: InventoryListProps
  openForm?: boolean
  deletePropsData: ConfirmDeleteModalProps
  categoryFormModalData: CategoryFormModalProps
}

export default function Inventory({
  openForm = false,
  categories,
  handleAddCategory,
  handleAddProduct,
  formProps,
  inventoryListProps,
  deletePropsData,
  categoryFormModalData
}: InventoryProps) {
  const { push, asPath } = useRouter()
  const { t } = useTranslation('common')

  const isActive = (path: string): boolean => {
    return asPath === path
  }
  const tabs = [
    {
      isActive: isActive('/admin/workplace/inventory'),
      value: '/admin/workplace/inventory',
      label: t('products'),
      onClick: async () => {
        await push('/admin/workplace/inventory')
      }
    },
    {
      isActive: isActive('/admin/inventory/equipments'),
      value: '/admin/inventory/equipments',
      label: t('equipments'),
      onClick: async () => {
        await push('/admin/inventory/equipments')
      }
    },
    {
      isActive: isActive('/admin/inventory/forms'),
      value: '/admin/inventory/forms',
      label: t('forms'),
      onClick: async () => {
        await push('/admin/inventory/forms')
      }
    }
  ]
  const currentPathObj = tabs.find((_item) => _item.value === asPath)
  const [selected, setSelected] = useState<object>({
    label: currentPathObj?.label,
    value: currentPathObj?.value
  })

  const onSelectItem = ({ value, label }: any) => {
    void push(value)
    setSelected({ value, label })
  }
  const options: Options[] = tabs.map((_item) => ({
    value: _item.value,
    label: _item.label
  }))
  return (
    <div className="flex flex-col">
      <div className="flex justify-between gap-9 sm:gap-0">
        <div className="hidden sm:block">
          <Tabs tabs={tabs} />
        </div>
        <div className="sm:hidden xs:w-full">
          <Select
            options={options}
            onChange={onSelectItem}
            value={selected}
            id="long-value-select"
            instanceId="long-value-select"
          />
        </div>
        <Button
          primary
          className={'xs:py-[5px] xs:px-[23px]'}
          onClick={handleAddProduct}
        >
          <span className="xs:hidden sm:inline-block">{t('add_product')}</span>
          <Plus className="sm:hidden" />
        </Button>
      </div>
      <div className="sm:pt-5 pb-8 pt-[17px]">
        <Chip list={categories} handleAddCategory={handleAddCategory} />
      </div>
      <InventoryList {...inventoryListProps} />
      <Footer />
      <InventoryModalForm {...formProps} open={openForm} />
      <ConfirmDeleteModal {...deletePropsData} />
      <CategoryFormModal {...categoryFormModalData} />
    </div>
  )
}
