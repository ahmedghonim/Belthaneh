import MembershipCard, {
  MembershipCardProps
} from 'components/common/membership-card'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import { Button } from 'ui'
import useTranslation from 'next-translate/useTranslation'

export interface MembershipsData extends MembershipCardProps {
  onClickAdd: () => void
}

export interface MembershipsProps {
  memberships: MembershipsData[]
}

export default function Memberships({ memberships }: MembershipsProps) {
  const { t } = useTranslation('common')

  return (
    <>
      <div className="sm:flex gap-6 hidden sm:flex-wrap">
        {memberships.map((_item) => {
          return (
            <div key={_item.id} className="w-max-[329px]">
              {' '}
              <MembershipCard
                {..._item}
                action={
                  <Button
                    primary
                    onClick={_item.onClickAdd}
                    className="justify-center mt-10"
                  >
                    {t('add')}
                  </Button>
                }
              />
            </div>
          )
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
            <MembershipCard
              {..._item}
              action={
                <Button
                  primary
                  onClick={_item.onClickAdd}
                  className="justify-center mt-10"
                >
                  {t('add')}
                </Button>
              }
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
