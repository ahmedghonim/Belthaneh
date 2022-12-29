import PackageCard, { PackageCardProps } from 'components/common/package-card'
import { useFormikContext } from 'formik'
import useTranslation from 'next-translate/useTranslation'
import { Button } from 'ui'
import BookingModal, { BookingModalProps } from '../modals/booking'
import QueueModal, { QueueModalProps } from '../modals/queue'

export interface PackagesData extends PackageCardProps {
  onClickAdd: () => void
}
export interface PackagesProps {
  packagesList: PackagesData[]
  systemType: 'booking' | 'queue'
  queueModalData: QueueModalProps | null
  bookingModalData: BookingModalProps | null
}

export default function Packages({
  packagesList,
  systemType,
  queueModalData,
  bookingModalData
}: PackagesProps) {
  const { t } = useTranslation('common')
  const { setValues, values } = useFormikContext<{
    open: boolean
    service: { id: string; name: string; img: string; price: number }
    serviceType: string
  }>()
  const onClickAdd = (service: any) => {
    setValues({ ...values, open: true, service, serviceType: 'packages' })
  }

  return (
    <div className="flex flex-col sm:flex-row gap-5 flex-wrap">
      {packagesList.map((_item) => (
        <div className="sm:flex-[48%]" key={_item.id}>
          <PackageCard
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
  )
}
