import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import { SalarySingleObjectType } from 'components/employees/salary/type'
import CardInfo from 'components/common/card-info'

function SalaryMobileViewBox({
  basic,
  overTime,
  absence,
  deduction,
  total
}: SalarySingleObjectType) {
  const { t } = useTranslation('common')
  return (
    <CardInfo
      header={{ first: t('basic_salary'), second: basic }}
      body={[
        { label: t('over_time'), value: overTime },
        { label: t('days_of_absence'), value: absence },
        { label: t('deduction'), value: deduction },
        { label: t('total'), value: total }
      ]}
    />
  )
}

export default SalaryMobileViewBox
