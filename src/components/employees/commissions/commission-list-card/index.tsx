import useTranslation from 'next-translate/useTranslation'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Text } from 'ui'

interface CommissionCardProps {
  title: string
  value: number
}
export interface CommissionListProps {
  overtime: number
  services: number
  sellProducts: number
}

export default function CommissionList({
  overtime,
  services,
  sellProducts
}: CommissionListProps) {
  const { t } = useTranslation('common')

  const Card = ({ title, value }: CommissionCardProps) => (
    <div className="dark:bg-dark-700 sm:bg-light-400  bg-white rounded-[5px] flex flex-col p-4 w-full  items-center">
      <Text className="!text-primary-100 font-bold">{title}</Text>
      <Text className="font-bold">{value}</Text>
    </div>
  )
  const MobileList = () => (
    <Swiper slidesPerView={1.5} className={'sm:hidden flex'} spaceBetween={16}>
      <SwiperSlide>
        <Card title={t('overtime')} value={overtime} />
      </SwiperSlide>
      <SwiperSlide>
        <Card title={t('sell_products')} value={sellProducts} />
      </SwiperSlide>
      <SwiperSlide>
        <Card title={t('services')} value={services} />
      </SwiperSlide>
    </Swiper>
  )
  const WebList = () => (
    <div className="sm:flex justify-between gap-4 hidden">
      <Card title={t('overtime')} value={overtime} />
      <Card title={t('sell_products')} value={sellProducts} />
      <Card title={t('services')} value={services} />
    </div>
  )
  return (
    <>
      <WebList />
      <MobileList />
    </>
  )
}
