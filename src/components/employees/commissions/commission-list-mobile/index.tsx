import CardInfo from 'components/common/card-info'
import moment from 'moment'
import useTranslation from 'next-translate/useTranslation'
import { CommissionItem, CommissionTableProps } from '../commission-table'

export default function CommissionListMobile({ list }: CommissionTableProps) {
  const { t } = useTranslation('common')

  const Card = ({ date, type, totalAmount, commission }: CommissionItem) => (
    <CardInfo
      header={{ first: t('date'), second: moment(date).format('DD/MM/YYYY') }}
      body={[
        { label: t('total_amount'), value: totalAmount },
        {
          label: t('commission'),
          value: `${commission} ${t('sar')}`
        },
        { label: t('type'), value: type }
      ]}
    />
  )

  return (
    <div className="flex flex-col gap-4">
      {list.map((_item) => (
        <Card key={_item.id} {..._item} />
      ))}
    </div>
  )
}
