import React from 'react'
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import Plus from 'svg/plus.svg'
import Button, { ButtonProps } from 'ui/button'
import { TabProps } from 'ui/tabs/types'

export interface ChipProps extends TabProps {
  icon: any
}

interface Props extends SwiperProps, ButtonProps {
  list: ChipProps[]
  handleAddCategory?: () => void
}

function Chip({ list = [], handleAddCategory, size, ...props }: Props) {
  return (
    <div className="flex gap-2 items-center">
      <Swiper
        spaceBetween={18}
        loop={false}
        modules={[Pagination, Navigation]}
        className="mySwiper swaper-container w-full"
      >
        {list?.map(({ label, icon, isActive = false, onClick }, index) => (
          <SwiperSlide key={index} className="!w-auto">
            <Button
              rounded="full"
              secondaryBorder={!isActive}
              secondary={isActive}
              key={label}
              onClick={onClick}
              size={'xSmall'}
            >
              {icon}
              {label}
            </Button>
          </SwiperSlide>
        ))}
      </Swiper>
      {Boolean(handleAddCategory) && (
        <Button secondary onClick={handleAddCategory}>
          <Plus className="sm:hidden" /> <Plus className="xs:hidden" />{' '}
        </Button>
      )}
    </div>
  )
}
export default Chip
