import useTranslation from 'next-translate/useTranslation'
import React from 'react'
import { Tabs, Button } from 'ui'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'

export type CardTypes = 'booking' | 'employees' | 'orders'

export interface NavigationTabsProps {
  selectedCard: CardTypes
  onSelect: (service: CardTypes) => void
}

export default function NavigationTabs({
  selectedCard,
  onSelect
}: NavigationTabsProps) {
  const { t } = useTranslation('common')

  const isActive = (serviceType: CardTypes): boolean => {
    return selectedCard === serviceType
  }
  const tabs = [
    {
      primaryBorder: !isActive('booking'),
      isActive: isActive('booking'),
      label: t('booking').charAt(0).toUpperCase() + t('booking').slice(1),
      onClick: () => onSelect('booking')
    },
    {
      primaryBorder: !isActive('employees'),
      isActive: isActive('employees'),
      label: t('employees'),
      onClick: () => onSelect('employees')
    },
    {
      primaryBorder: !isActive('orders'),
      isActive: isActive('orders'),
      label: t('orders'),
      onClick: () => onSelect('orders')
    }
  ]
  return (
    <>
      <Tabs
        tabs={tabs}
        className="!bg-transparent !px-0 sm:flex hidden w-full"
        size={'medium'}
      />
      <Swiper
        loop={false}
        spaceBetween={16}
        modules={[Pagination, Navigation]}
        className="mySwiper swaper-container w-full sm:hidden block"
      >
        {tabs?.map(({ label, isActive = false, onClick }, index) => (
          <SwiperSlide key={index} className="!w-auto">
            <Button
              rounded="full"
              primaryBorder={!isActive}
              primary={isActive}
              key={label}
              onClick={onClick}
              size={'xSmall'}
              className="!px-5"
            >
              {label}
            </Button>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
