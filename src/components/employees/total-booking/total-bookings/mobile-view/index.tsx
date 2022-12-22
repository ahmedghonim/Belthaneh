import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import BookingBox from '../box'
import { Swiper, SwiperSlide } from 'swiper/react'
import { TootalBookingView } from 'components/employees/total-booking/types'

function TotalBookingMobileView({ data }: TootalBookingView) {
  const { t } = useTranslation('common')

  const { locale } = useRouter()

  return (
    <div className="sm:hidden">
      <Swiper
        slidesPerView={1.5}
        spaceBetween={25}
        onBeforeInit={(swiper) => {
          swiper.changeLanguageDirection(locale === 'ar' ? 'rtl' : 'ltr')
        }}
      >
        <SwiperSlide>
          <BookingBox type={t('monthly_booking')} num={data.monthly} />
        </SwiperSlide>
        <SwiperSlide>
          <BookingBox type={t('weekly_booking')} num={data.weekly} />
        </SwiperSlide>
        <SwiperSlide>
          <BookingBox type={t('daily_booking')} num={data.daily} />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
export default TotalBookingMobileView
