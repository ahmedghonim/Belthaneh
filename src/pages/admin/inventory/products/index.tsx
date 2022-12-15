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
  const handleAddProduct = () => {
    setOpenForm(true)
    //
  }
  const handleAddCategory = () => {
    setOpenForm(true)
    //
  }
  const onSubmit = () => {
    //
  }
  const handleCancel = () => {
    //
    setOpenForm(false)
  }
  const formProps = {
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
  }
  const handleDelete = (id: string) => {
    setOpenDeleteModal(true)
  }
  const handleEdit = (data: any) => {
    setOpenForm(true)
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
      />
    </>
  )
}
