import ServicesCard, { ServiceCardProps } from 'components/common/service-card'
import { Button, Chip } from 'ui'
import useTranslation from 'next-translate/useTranslation'
import QueueModal, { QueueModalProps } from '../modals/queue'
import BookingModal, { BookingModalProps } from '../modals/booking'
import { ChipProps } from 'ui/chip'
import { useFormikContext } from 'formik'

interface CategoryItem extends ChipProps {
  id: string
}

export interface ServicesProps {
  services: ServiceCardProps[]
  systemType: 'booking' | 'queue'
  queueModalData: QueueModalProps | null
  bookingModalData: BookingModalProps | null
  categories: CategoryItem[]
}

export default function Services({
  services,
  systemType,
  queueModalData,
  bookingModalData,
  categories
}: ServicesProps) {
  const { t } = useTranslation('common')
  const { setValues, values, setFieldValue } = useFormikContext<{
    open: boolean
    service: { id: string; name: string; img: string; price: number }
    serviceType: string
    category: string | null
  }>()
  const onClickAdd = (service: any) => {
    setValues({
      ...values,
      open: true,
      service,
      serviceType: 'services'
    })
  }
  const onClick = (id: string) => {
    void setFieldValue('category', id)
  }
  const formattedCategories = categories.map(({ icon: Icon, ..._item }) => ({
    ..._item,
    onClick: () => onClick(_item.id),
    isActive: values?.category === _item.id,
    icon: (
      <Icon
        className={`dark:fill-white  ${
          values?.category === _item.id ? 'fill-white' : 'fill-secondary-100'
        }`}
      />
    )
  }))

  return (
    <div className="flex flex-col gap-4">
      <Chip list={formattedCategories} size={'xSmall'} />
      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4">
        {services?.map((_item) => (
          <div key={_item.id} className="sm:w-[48%] w-full">
            {' '}
            <ServicesCard
              {..._item}
              actions={
                <Button
                  onClick={() => onClickAdd(_item)}
                  primary
                  className="!py-1 !px-[10px]"
                >
                  {t('add')}
                </Button>
              }
            />
          </div>
        ))}
        {systemType === 'booking' && bookingModalData !== null && (
          <BookingModal {...bookingModalData} />
        )}
        {systemType === 'queue' && queueModalData !== null && (
          <QueueModal {...queueModalData} />
        )}
      </div>
    </div>
  )
}
