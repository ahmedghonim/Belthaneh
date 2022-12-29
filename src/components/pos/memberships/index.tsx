import MembershipCard, {
  MembershipCardProps
} from 'components/common/membership-card'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import { Button } from 'ui'
import useTranslation from 'next-translate/useTranslation'
import { useFormikContext } from 'formik'

export interface MembershipsProps {
  memberships: MembershipCardProps[]
}
interface MembershipItem {
  service: { id: string; price: number; name: string }
  qty: number
}

export default function Memberships({ memberships }: MembershipsProps) {
  const { t } = useTranslation('common')
  const { setValues, values } = useFormikContext<{
    memberships: MembershipItem[]
  }>()
  const onClickAdd = (service: any) => {
    const newMemberships = values.memberships.map((_item) => {
      if (_item?.service?.id === service.id) {
        _item.qty++
      }
      return _item
    })
    if (values.memberships.find((o) => o?.service?.id === service.id) == null) {
      newMemberships.push({ service, qty: 1 })
    }
    setValues({ ...values, memberships: newMemberships })
  }
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
                    onClick={() => onClickAdd(_item)}
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
                  onClick={() => onClickAdd(_item)}
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
