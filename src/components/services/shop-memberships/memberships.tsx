import Actions, { Props as ActionProps } from 'components/common/actions'
import MembershipCard, {
  MembershipCardProps
} from 'components/common/membership-card'
import useTranslation from 'next-translate/useTranslation'
import { Button } from 'ui'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'

export interface MembershipsData extends MembershipCardProps, ActionProps {
  onDelete: () => void
  onEdit: () => void
  onClickView: () => void
}
export interface MembershipsProps {
  list: MembershipsData[]
}
export default function Memberships({ list }: MembershipsProps) {
  const { t } = useTranslation('common')

  return (
    <>
      <div className="sm:flex flex-col sm:flex-row gap-4 flex-wrap hidden ">
        {list?.map((_item) => (
          <div key={_item.id} className="w-[24%]">
            <MembershipCard
              {..._item}
              action={
                <>
                  <Button
                    primary
                    onClick={_item.onClickView}
                    className="justify-center  mt-10"
                  >
                    {t('view')}
                  </Button>
                  <div className="ltr:right-0 rtl:left-0 absolute flex gap-0 top-0 dark:bg-white  px-[6px] py-[2px]  bg-secondary-100   ltr:rounded-tr-[10px] rtl:rounded-tl-[10px]  ltr:rounded-bl-[15px] rtl:rounded-br-[15px]  justify-around  ">
                    <Actions onDelete={_item.onDelete} onEdit={_item.onEdit} />
                  </div>
                </>
              }
            />
          </div>
        ))}
      </div>
      <Swiper
        slidesPerView={1.5}
        spaceBetween={30}
        loop={false}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper sm:hidden flex "
      >
        {list?.map((_item) => (
          <SwiperSlide className="w-[50%]" key={_item.id}>
            <MembershipCard
              {..._item}
              action={
                <>
                  <Button
                    primary
                    onClick={_item.onClickView}
                    className="justify-center  mt-10"
                  >
                    {t('view')}
                  </Button>
                  <div className="ltr:right-0 rtl:left-0 absolute flex gap-0 top-0 dark:bg-white p-[5px] bg-secondary-100   ltr:rounded-tr-[10px] rtl:rounded-tl-[10px]  ltr:rounded-bl-[15px] rtl:rounded-br-[15px]  justify-around  ">
                    <Actions onDelete={_item.onDelete} onEdit={_item.onEdit} />
                  </div>
                </>
              }
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
