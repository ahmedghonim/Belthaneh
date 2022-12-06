import React, { useState } from 'react'
import Navigation from '../navigation'
import ServicesCards from './services-cards'
import useTranslation from 'next-translate/useTranslation'
import HairIcon from 'svg/hair.svg'
import { Chip } from 'ui'

function ShopServices() {
  const { t } = useTranslation('common')
  const [currentCategory, setCurrentCategory] = useState<number>(0)
  const category = [
    {
      label: t('waxing'),
      isActive: currentCategory === 0,
      onClick: () => {
        setCurrentCategory(0)
      },
      icon: <HairIcon />
    },
    {
      label: t('waxing'),
      isActive: currentCategory === 1,
      onClick: () => {
        setCurrentCategory(1)
      },
      icon: <HairIcon />
    },
    {
      label: t('waxing'),
      isActive: currentCategory === 2,
      onClick: () => {
        setCurrentCategory(2)
      },
      icon: <HairIcon />
    },
    {
      label: t('waxing'),
      isActive: currentCategory === 3,
      onClick: () => {
        setCurrentCategory(3)
      },
      icon: <HairIcon />
    }
  ]
  return (
    <div className="space-y-5">
      {/* navigation buttons and Add Service */}
      <Navigation />
      {/* Category and Add Category */}
      <Chip list={category} handleAddCategory={() => {}} />
      {/* Services */}
      <ServicesCards />
    </div>
  )
}

export default ShopServices
