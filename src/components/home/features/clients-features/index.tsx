import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import FeaturesCards from '../cards-holder'
import Calender from 'svg/home-calender.svg'
import Search from 'svg/home-search.svg'
import ShoppingBag from 'svg/shopping-bag.svg'
import FastCommunication from 'svg/messages.svg'
import IdCard from 'svg/idCard.svg'
import Loyality from 'svg/loyality.svg'

function ClientsFeatures() {
  const { t } = useTranslation('common')

  // features details
  const featuresDetails = [
    {
      icon: Calender,
      title: t('customers_booking'),
      desc: t('customers_booking_desc')
    },
    {
      icon: Search,
      title: t('quick_search'),
      desc: t('quick_search_desc')
    },
    {
      icon: ShoppingBag,
      title: t('order_products'),
      desc: t('order_products_desc')
    },
    {
      icon: FastCommunication,
      title: t('fast_communication'),
      desc: t('fast_communication_desc')
    },
    {
      icon: IdCard,
      title: t('rate'),
      desc: t('customers_rate_desc')
    },
    {
      icon: Loyality,
      title: t('loyality'),
      desc: t('customers_loyality_desc')
    }
  ]

  return (
    <div className="bg-[#F8F9FA] px-[197px] pb-[190px]">
      <div>
        <h2 className="text-secondary-100 py-14 text-center text-[36px] font-bold">
          {t('clients_features_head')}
        </h2>
      </div>
      <FeaturesCards featuresData={featuresDetails} fill="clients" />
    </div>
  )
}

export default ClientsFeatures
