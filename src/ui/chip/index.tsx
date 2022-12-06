import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import Plus from 'svg/plus.svg'
import Button from 'ui/button'
import { TabProps } from 'ui/tabs/types'

interface CategoryProps extends TabProps {
  icon: any
}

interface Props {
  list: CategoryProps[]
  handleAddCategory: () => void
}

function Chip({ list = [], handleAddCategory }: Props) {
  return (
    <div className="flex gap-2 items-center">
      <Swiper
        spaceBetween={5}
        loop={false}
        modules={[Pagination, Navigation]}
        className="mySwiper swaper-container w-full"
        breakpoints={{
          0: {
            slidesPerView: 2.5,
            spaceBetween: 5
          },
          600: {
            slidesPerView: 4,
            spaceBetween: 5
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 5
          },
          1440: {
            slidesPerView: 9,
            spaceBetween: 5
          }
        }}
      >
        {list?.map(({ label, icon, isActive, onClick }) => (
          <SwiperSlide key={Math.random().toString()}>
            <Button
              rounded="full"
              secondaryBorder={!isActive}
              secondary={isActive}
              key={label}
              onClick={onClick}
            >
              {icon}
              {label}
            </Button>
          </SwiperSlide>
        ))}
      </Swiper>
      <Plus
        onClick={handleAddCategory}
        className="cursor-pointer fill-secondary-100 scale-[2]"
      />
    </div>
  )
}
export default Chip
