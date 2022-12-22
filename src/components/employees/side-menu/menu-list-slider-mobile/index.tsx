import React from 'react'
import { useRouter } from 'next/router'
import { Swiper, SwiperSlide } from 'swiper/react'
import {
  MenuProps,
  MenuListItemProps
} from 'components/employees/side-menu/types'
import MenuListItem from '../menu-item'

function EmployeeSideMenuListSlider({ listItems }: MenuProps) {
  const { locale } = useRouter()

  return (
    <div className="dark:bg-dark-200 bg-white">
      <Swiper
        spaceBetween={10}
        slidesPerView={1.8}
        onBeforeInit={(swiper) => {
          swiper.changeLanguageDirection(locale === 'ar' ? 'rtl' : 'ltr')
        }}
      >
        {listItems.map((item: MenuListItemProps) => {
          return (
            <SwiperSlide key={item.href}>
              <MenuListItem {...item} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default EmployeeSideMenuListSlider
