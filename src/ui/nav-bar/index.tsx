import React from 'react'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'
import { Button } from 'ui'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

export interface NavBarType {
  id: string
  text: string
}

interface Props {
  data: NavBarType[]
  state: string
  slidesPerView?: number
  spaceBetween?: number
}

function Navbar({ data, state, slidesPerView, spaceBetween }: Props) {
  const { t } = useTranslation('common')
  const router = useRouter()
  const currentLang = router.locale

  return (
    <>
      {/* web nav */}
      <div className="dark:bg-[#1C1F2D] bg-white px-2 rounded-full">
        <div className="xs:hidden">
          <div className=" flex gap-2 w-fit">
            {data.map(({ id, text }) => {
              return (
                <Button
                  key={id}
                  id={id}
                  primary={state === id}
                  className={`w-24 justify-center dark:text-white text-dark-100 capitalize bg-transparent ${
                    state === id ? '!rounded-full' : ''
                  }`}
                >
                  <span>{t(text)}</span>
                </Button>
              )
            })}
          </div>
        </div>
        {/* mobile nav */}
        <div className="sm:hidden">
          <Swiper
            slidesPerView={slidesPerView}
            spaceBetween={spaceBetween}
            onBeforeInit={(swiper) => {
              swiper.changeLanguageDirection(
                `${currentLang === 'ar' ? 'rtl' : 'ltr'}`
              )
            }}
          >
            {data.map(({ id, text }) => {
              return (
                <SwiperSlide key={id} className="w-full">
                  <Button
                    key={id}
                    id={id}
                    primary={state === id}
                    className={`w-20 justify-center dark:text-white text-dark-100 capitalize bg-transparent ${
                      state === id ? '!rounded-full' : ''
                    }`}
                  >
                    <span>{t(text)}</span>
                  </Button>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default Navbar
