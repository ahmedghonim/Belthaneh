import ServicesCard, { ServiceCardProps } from 'components/common/service-card'
import { Button, Chip } from 'ui'
import useTranslation from 'next-translate/useTranslation'
import QueueModal, { QueueModalProps } from '../modals/queue'
import BookingModal, { BookingModalProps } from '../modals/booking'
import { ChipProps } from 'ui/chip'
interface ServicesData extends ServiceCardProps {
  onClickAdd: () => void
}
export interface ServicesProps {
  services: ServicesData[]
  systemType: 'booking' | 'queue'
  queueModalData: QueueModalProps | null
  bookingModalData: BookingModalProps | null
  categories: ChipProps[]
}

export default function Services({
  services,
  systemType,
  queueModalData,
  bookingModalData,
  categories
}: ServicesProps) {
  const { t } = useTranslation('common')

  return (
    <div className="flex flex-col gap-4">
      <Chip list={categories} />
      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4">
        {services?.map((_item) => (
          <div key={_item.id} className="sm:w-[48%] w-[100%]">
            {' '}
            <ServicesCard
              {..._item}
              actions={
                <Button onClick={_item.onClickAdd} primary>
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
