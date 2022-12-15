import MembershipCard, {
  MembershipCardProps
} from 'components/common/membership-card'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'

export interface MembershipsProps {
  memberships: MembershipCardProps[]
}

export default function Memberships({ memberships }: MembershipsProps) {
  return (
    <>
      <div className="sm:flex gap-6 hidden sm:flex-wrap">
        {memberships.map((_item) => {
          return <MembershipCard {..._item} key={_item.id} />
        })}
      </div>
      <Swiper
        spaceBetween={24}
        slidesPerView={1.2}
        loop={false}
        modules={[Pagination, Navigation]}
        className="mySwiper swaper-container sm:hidden w-full"
      >
        {memberships?.map((_item) => (
          <SwiperSlide key={_item.id}>
            <MembershipCard {..._item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
