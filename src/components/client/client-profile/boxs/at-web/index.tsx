import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import { OrangeBlueBox } from 'ui'
import { BoxsDataType } from 'components/client/client-profile/types'
import LastService from 'svg/bg-white-user.svg'
import Payment from 'svg/statistics.svg'
import Visits from 'svg/store-1.svg'
import MostService from 'svg/add-client.svg'

function WebBoxs({
  lastService,
  payment,
  visitsNum,
  mostServices
}: BoxsDataType) {
  const { t } = useTranslation('common')
  return (
    <div className="xs:hidden grid grid-cols-4 gap-3">
      <OrangeBlueBox
        type={t('last_service')}
        value={lastService}
        icon={<LastService />}
        iconBg="bg-primary-100"
      />
      <OrangeBlueBox
        type={t('last_payment')}
        value={payment}
        icon={<Payment />}
        iconBg="bg-secondary-100"
      />
      <OrangeBlueBox
        type={t('visits_number')}
        value={`${visitsNum} ${t('visit')}`}
        icon={<Visits />}
        iconBg="bg-secondary-100"
      />
      <OrangeBlueBox
        type={t('most_services_performed')}
        value={mostServices}
        icon={<MostService />}
        iconBg="bg-[#4C4CE5]"
      />
    </div>
  )
}
export default WebBoxs
