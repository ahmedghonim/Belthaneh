import useTranslation from 'next-translate/useTranslation'
import ShopPackages from 'components/services/shop-packages'
import { packagesData } from 'components/services/shop-packages/index.mock'
import Head from 'next/head'
import { useState } from 'react'

function ShopPackagesController() {
  const { t } = useTranslation('common')
  const [openPackageModal, setOpenPackageModal] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState(null)
  const handleAddPackage = () => {
    setOpenPackageModal(true)
  }
  const packageFormModalData = {
    packageData: {
      services: [
        { value: '1', label: 'hair color' },
        { value: '2', label: 'hair cut' }
      ],
      initialValues: selectedPackage,
      onSubmit: (values: any) => {
        console.log(values, 'values')
      },
      handleCancel: () => {
        setOpenPackageModal(false)
        setSelectedPackage(null)
      }
    },
    onClose: () => {
      setOpenPackageModal(false)
      setSelectedPackage(null)
    },
    open: openPackageModal
  }
  return (
    <>
      <Head>
        <title>{t('booking')}</title>
      </Head>
      <ShopPackages
        list={packagesData}
        handleAddPackage={handleAddPackage}
        packageFormModalData={packageFormModalData}
      />
    </>
  )
}

export default ShopPackagesController
