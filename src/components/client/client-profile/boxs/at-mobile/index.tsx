import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import { OrangeBlueBox } from 'ui'
import { BoxsDataType } from 'components/client/client-profile/types'
import LastService from 'svg/bg-white-user.svg'
import Payment from 'svg/statistics.svg'
import Visits from 'svg/store-1.svg'
import MostService from 'svg/add-customer.svg'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

function MobileBoxs({
  lastService,
  payment,
  visitsNum,
  mostServices
}: BoxsDataType) {
  const { t } = useTranslation('common')
  const router = useRouter()
  const currentLang = router.locale

  return (
    <div className="sm:hidden">
      <Swiper
        slidesPerView={1.5}
        spaceBetween={15}
        onBeforeInit={(swiper) => {
          swiper.changeLanguageDirection(
            `${currentLang === 'ar' ? 'rtl' : 'ltr'}`
          )
        }}
      >
        <SwiperSlide>
          <OrangeBlueBox
            type={t('last_service')}
            value={lastService}
            icon={<LastService />}
            iconBg="bg-primary-100"
          />
        </SwiperSlide>
        <SwiperSlide>
          <OrangeBlueBox
            type={t('last_payment')}
            value={payment}
            icon={<Payment />}
            iconBg="bg-secondary-100"
          />
        </SwiperSlide>
        <SwiperSlide>
          <OrangeBlueBox
            type={t('visits_number')}
            value={`${visitsNum as string} ${t('visit')}`}
            icon={<Visits />}
            iconBg="bg-secondary-100"
          />
        </SwiperSlide>
        <SwiperSlide>
          <OrangeBlueBox
            type={t('most_services_performed')}
            value={mostServices}
            icon={<MostService />}
            iconBg="bg-[#4C4CE5]"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
export default MobileBoxs
