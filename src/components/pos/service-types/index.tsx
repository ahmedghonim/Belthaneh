import useTranslation from 'next-translate/useTranslation'
import React from 'react'
import { Tabs, Button } from 'ui'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'

export interface ServiceTypesProps {
  currentService: 'package' | 'service' | 'membership'
  onSelectService: (service: string) => void
}

export default function ServiceTypes({
  currentService,
  onSelectService
}: ServiceTypesProps) {
  const { t } = useTranslation('common')

  const isActive = (serviceType: string): boolean => {
    return currentService === serviceType
  }
  const tabs = [
    {
      primaryBorder: !isActive('service'),
      isActive: isActive('service'),
      label: t('service'),
      onClick: () => onSelectService('service')
    },
    {
      primaryBorder: !isActive('package'),
      isActive: isActive('package'),
      label: t('package'),
      onClick: () => onSelectService('package')
    },
    {
      primaryBorder: !isActive('membership'),
      isActive: isActive('membership'),
      label: t('membership'),
      onClick: () => onSelectService('membership')
    }
  ]
  return (
    <>
      {' '}
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
