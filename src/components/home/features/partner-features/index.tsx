import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import FeaturesCards from '../cards-holder'
import Calender from 'svg/home-calender.svg'
import ManageInventory from 'svg/home-statistics.svg'
import ManageProducts from 'svg/shopping-car.svg'
import IdCard from 'svg/idCard.svg'
import ManageService from 'svg/home-cash.svg'
import PersonIcon from 'svg/person.svg'
import Loyality from 'svg/loyality.svg'

function PartnerFeatures() {
  const { t } = useTranslation('common')

  // features details
  const featuresDetails = [
    {
      icon: Calender,
      title: t('manage_booking'),
      desc: t('manage_booking_desc')
    },
    {
      icon: ManageInventory,
      title: t('manage_inventory'),
      desc: t('manage_inventory_desc')
    },
    {
      icon: ManageProducts,
      title: t('manage_products'),
      desc: t('manage_products_desc')
    },
    {
      icon: IdCard,
      title: t('manage_staff'),
      desc: t('manage_staff_desc')
    },
    {
      icon: ManageService,
      title: t('manage_services'),
      desc: t('manage_services_desc')
    },
    {
      icon: PersonIcon,
      title: t('manage_offer'),
      desc: t('manage_offer_desc')
    },
    {
      icon: IdCard,
      title: t('reports'),
      desc: t('reports_desc')
    },
    {
      icon: Loyality,
      title: t('loyality'),
      desc: t('loyality_desc')
    },
    {
      icon: PersonIcon,
      title: t('supplier'),
      desc: t('supplier_desc')
    }
  ]

  return (
    <div className="bg-primary-100 px-[197px] pb-[190px]">
      <div>
        <h2 className="text-white py-14 text-center text-[36px] font-bold">
          {t('partner_features_head')}
        </h2>
      </div>
      <FeaturesCards featuresData={featuresDetails} fill="partners" />
    </div>
  )
}
export default PartnerFeatures
