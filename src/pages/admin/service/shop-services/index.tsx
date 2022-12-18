import { useState } from 'react'
import useTranslation from 'next-translate/useTranslation'
import HairIcon from 'svg/hair.svg'
import ShopServices from 'components/services/shop-services'
import { services } from 'components/services/shop-services/index.mock'
import Head from 'next/head'

function ShopServicesController() {
  const { t } = useTranslation('common')
  const [currentCategory, setCurrentCategory] = useState<number>(0)
  const [openServiceModalForm, setOpenServiceModalForm] = useState(false)
  const [openCategoryModal, setOpenCategoryModal] = useState(false)
  const [selectedService, setSelectedService] = useState(null)
  const categories = [
    {
      label: t('waxing'),
      isActive: currentCategory === 0,
      onClick: () => {
        setCurrentCategory(0)
      },
      icon: (
        <HairIcon
          className={`dark:fill-white  ${
            currentCategory === 0 ? 'fill-white' : 'fill-secondary-100'
          }`}
        />
      )
    },
    {
      label: t('waxing'),
      isActive: currentCategory === 1,
      onClick: () => {
        setCurrentCategory(1)
      },
      icon: (
        <HairIcon
          className={`dark:fill-white  ${
            currentCategory === 1 ? 'fill-white' : 'fill-secondary-100'
          }`}
        />
      )
    },
    {
      label: t('waxing'),
      isActive: currentCategory === 2,
      onClick: () => {
        setCurrentCategory(2)
      },
      icon: (
        <HairIcon
          className={`dark:fill-white  ${
            currentCategory === 2 ? 'fill-white' : 'fill-secondary-100'
          }`}
        />
      )
    },
    {
      label: t('waxing'),
      isActive: currentCategory === 3,
      onClick: () => {
        setCurrentCategory(3)
      },
      icon: (
        <HairIcon
          className={`dark:fill-white  ${
            currentCategory === 3 ? 'fill-white' : 'fill-secondary-100'
          }`}
        />
      )
    }
  ]
  const handleAddCategory = () => {
    setOpenCategoryModal(true)
  }
  const handleAddService = () => {
    setOpenServiceModalForm(true)
  }
  const handleEditService = (item: any) => {
    setOpenServiceModalForm(true)
    setSelectedService(item)
  }
  const serviceFormModalData = {
    serviceData: {
      initialValues: selectedService,
      onSubmit: (values: any) => {
        console.log(values, 'values')
      },
      employees: [],
      inventories: [
        { value: '1', label: 'inventory1' },
        { value: '2', label: 'inventory2' },
        { value: '3', label: 'inventory3' }
      ],
      categories: [],
      measures: [
        { value: '1', label: 'measure1' },
        { value: '2', label: 'measure2' },
        { value: '3', label: 'measure3' }
      ],
      handleCancel: () => {
        setOpenServiceModalForm(false)
        setSelectedService(null)
      }
    },
    onClose: () => {
      setOpenServiceModalForm(false)
      setSelectedService(null)
    },
    open: openServiceModalForm
  }
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
  const adaptedService = services.map((_item) => ({
    ..._item,
    onEdit: () => handleEditService(_item)
  }))
  return (
    <>
      <Head>
        <title>{t('booking')}</title>
      </Head>
      <ShopServices
        categories={categories}
        services={adaptedService}
        handleAddCategory={handleAddCategory}
        handleAddService={handleAddService}
        serviceFormModalData={serviceFormModalData}
        categoryFormModalData={categoryFormModalData}
      />
    </>
  )
}

export default ShopServicesController
