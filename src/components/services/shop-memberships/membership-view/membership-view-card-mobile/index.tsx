import useTranslation from 'next-translate/useTranslation'
import { Text } from 'ui'
import moment from 'moment'
import { MembershipViewItem } from 'components/services/shop-memberships/membership-view'

export default function MembershipMobileCard({
  clientName,
  invoiceNo,
  joinDate,
  phone,
  expireDate,
  status
}: MembershipViewItem) {
  const { t } = useTranslation('common')
  const RecordInfo = ({
    label,
    value
  }: {
    label: string
    value: string | React.ReactNode
  }) => (
    <div className="flex justify-between">
      <Text className="capitalize">{label}</Text>
      <Text>{value}</Text>
    </div>
  )

  return (
    <div className="sm:hidden block  bg-white dark:bg-dark-100 rounded-[18px]">
      <div className="flex justify-between rounded-[18px] dark:bg-dark-200 bg-dark-600 p-4">
        <Text>{clientName}</Text>
        <Text>{invoiceNo}</Text>
      </div>
      <div className="flex flex-col px-4 py-[10px] gap-1 ">
        <RecordInfo label={t('phone_number')} value={phone} />
        <RecordInfo
          label={t('joinDate')}
          value={moment(joinDate).format('DD/MM/YYYY')}
        />
        <RecordInfo
          label={t('expireDate')}
          value={moment(expireDate).format('DD/MM/YYYY')}
        />
        <RecordInfo
          label={t('state')}
          value={
            status === 'active' ? (
              <Text className="!text-success-200">{t('Active')}</Text>
            ) : (
              <Text danger>{t('expired')}</Text>
            )
          }
        />
      </div>
    </div>
  )
}
