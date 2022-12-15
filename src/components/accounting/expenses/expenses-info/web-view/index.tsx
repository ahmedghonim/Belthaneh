import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import { OrangeBlueBox } from 'ui'
import { ExpensesInfoProps } from 'components/accounting/expenses/type'

import Salaries from 'svg/bg-white-user.svg'
import Rent from 'svg/statistics.svg'
import ElectricityWaterIcon from 'svg/store-1.svg'
import Fees from 'svg/add-customer.svg'

function WebExpensesInfo({
  salaries,
  rent,
  ElectricityWater,
  fees
}: ExpensesInfoProps) {
  const { t } = useTranslation('common')

  return (
    <div className="xs:hidden">
      <div className="grid grid-cols-4 gap-3">
        <OrangeBlueBox
          type={t('salaries')}
          value={salaries}
          icon={<Salaries />}
          iconBg="bg-primary-100"
        />
        <OrangeBlueBox
          type={t('rent')}
          value={rent}
          icon={<Rent />}
          iconBg="bg-secondary-100"
        />
        <OrangeBlueBox
          type={t('electricity_water')}
          value={ElectricityWater}
          icon={<ElectricityWaterIcon />}
          iconBg="bg-secondary-100"
        />
        <OrangeBlueBox
          type={t('fees')}
          value={fees}
          icon={<Fees />}
          iconBg="bg-primary-100"
        />
      </div>
    </div>
  )
}

export default WebExpensesInfo
