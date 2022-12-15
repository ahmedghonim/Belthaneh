import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import { OrangeBlueBox } from 'ui'
import { ExpensesInfoProps } from 'components/accounting/expenses/type'
import { Swiper, SwiperSlide } from 'swiper/react'

import Salaries from 'svg/bg-white-user.svg'
import Rent from 'svg/statistics.svg'
import ElectricityWaterIcon from 'svg/store-1.svg'
import Fees from 'svg/add-customer.svg'

function MobileExpensesInfo({
  salaries,
  rent,
  ElectricityWater,
  fees
}: ExpensesInfoProps) {
  const { t } = useTranslation('common')
  const { locale } = useRouter()

  return (
    <div className="sm:hidden">
      <Swiper
        className="!overflow-visible"
        slidesPerView={1.5}
        spaceBetween={15}
        onBeforeInit={(swiper) => {
          swiper.changeLanguageDirection(`${locale === 'ar' ? 'rtl' : 'ltr'}`)
        }}
      >
        <SwiperSlide>
          <OrangeBlueBox
            type={t('salaries')}
            value={salaries}
            icon={<Salaries />}
            iconBg="bg-primary-100"
          />
        </SwiperSlide>
        <SwiperSlide>
          <OrangeBlueBox
            type={t('rent')}
            value={rent}
            icon={<Rent />}
            iconBg="bg-secondary-100"
          />
        </SwiperSlide>
        <SwiperSlide>
          <OrangeBlueBox
            type={t('electricity_water')}
            value={ElectricityWater}
            icon={<ElectricityWaterIcon />}
            iconBg="bg-secondary-100"
          />
        </SwiperSlide>
        <SwiperSlide>
          <OrangeBlueBox
            type={t('fees')}
            value={fees}
            icon={<Fees />}
            iconBg="bg-primary-100"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
export default MobileExpensesInfo
