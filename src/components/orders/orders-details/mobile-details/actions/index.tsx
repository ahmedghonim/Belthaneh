import React, { useState } from 'react'
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'

import Button from 'ui/button'
import Input from 'ui/input'
import { ButtonsObj } from '../../../orders-details'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

function OrdersDetailsActions() {
  const { t } = useTranslation('common')
  const router = useRouter()
  const currentLang = router.locale
  const [active, setActive] = useState<string>('0')

  console.log(currentLang)

  return (
    <section className="sm:hidden mt-4">
      <div>
        <Input
          name="search-order"
          placeholder="Start Typing To Search For Order"
        />
      </div>
      <div className="mt-6 mb-12">
        <Swiper
          slidesPerView={2.5}
          onBeforeInit={(swiper) => {
            swiper.changeLanguageDirection(
              `${currentLang === 'ar' ? 'rtl' : 'ltr'}`
            )
          }}
          spaceBetween={8}
        >
          {ButtonsObj.map(({ id, label, value }) => {
            return (
              <SwiperSlide key={id}>
                <Button
                  onClick={() => setActive(id)}
                  className={`w-fill ${
                    active !== id ? 'bg-transparent' : 'bg-primary-100'
                  }  justify-center !rounded-full border-2 border-dark-300  rtl:w-full`}
                >
                  <span
                    className={`!text-sm font-medium ${
                      active !== id
                        ? 'dark:text-dark-300 text-primary-100'
                        : 'dark:text-dark-300 !text-white'
                    } xs:text-primary-100`}
                  >
                    {t(label)}
                  </span>
                  <span
                    className={`!text-sm font-medium ${
                      active !== id
                        ? 'dark:text-primary-100 text-primary-100'
                        : 'dark:text-dark-300 !text-white'
                    } xs:text-primary-100`}
                  >
                    {t(value)}
                  </span>
                </Button>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </section>
  )
}

export default OrdersDetailsActions
