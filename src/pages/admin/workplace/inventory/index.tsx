import React, { useState } from 'react'
import InventoryComponent from 'components/inventory'
import categories, {
  categoriesValueLabel
} from 'components/inventory/categories.mock'
import inventoryList from 'components/inventory/inventory-list/index.mock'
import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'

export default function Inventory() {
  const { t } = useTranslation('common')
  const [openForm, setOpenForm] = useState<boolean>(false)
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false)
  const [selectedInventory, setSelectedInventory] = useState(null)
  const [openCategoryModal, setOpenCategoryModal] = useState(false)

  const handleAddProduct = () => {
    setOpenForm(true)
    //
  }
  const handleAddCategory = () => {
    setOpenCategoryModal(true)
    //
  }
  const onSubmit = () => {
    //
  }
  const handleCancel = () => {
    //
    setOpenForm(false)
    setSelectedInventory(null)
  }
  const formProps = {
    initialValues: selectedInventory,
    onSubmit,
    categories: categoriesValueLabel,
    handleCancel,
    measures: categoriesValueLabel
  }
  const onSubmitDelete = () => {
    //
  }
  const onCancelDelete = () => {
    setOpenDeleteModal(false)
    setSelectedInventory(null)
  }
  const handleDelete = (id: string) => {
    setOpenDeleteModal(true)
  }
  const handleEdit = (data: any) => {
    setOpenForm(true)
    setSelectedInventory(data)
  }
  const deletePropsData = {
    onSubmit: onSubmitDelete,
    onCancel: onCancelDelete,
    open: openDeleteModal
  }
  const adaptedInventoryList = inventoryList.map((_item) => ({
    ..._item,
    handleDelete: () => handleDelete(_item.id),
    handleEdit: () => handleEdit(_item)
  }))
  const categoryFormModalData = {
    onClose: () => {
      setOpenCategoryModal(false)
    },
    open: openCategoryModal,
    categoryData: {
      onSubmit: () => {
        //
      },
      handleCancel: () => {
        setOpenCategoryModal(false)
      }
    }
  }
  return (
    <>
      <Head>
        <title>{t('inventory_products')}</title>
      </Head>
      <InventoryComponent
        handleAddCategory={handleAddCategory}
        handleAddProduct={handleAddProduct}
        formProps={formProps}
        inventoryListProps={{ inventoryList: adaptedInventoryList }}
        categories={categories}
        openForm={openForm}
        deletePropsData={deletePropsData}
        categoryFormModalData={categoryFormModalData}
      />
    </>
  )
}
