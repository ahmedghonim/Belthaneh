import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import SalaryMobileView from './mobile-view'
import SalaryWebView from './web-view'
import { SalaryViewProps } from 'components/employees/salary/type'
import { Text } from 'ui'

function SalaryDetails({ data }: SalaryViewProps) {
  const { t } = useTranslation('common')
  return (
    <div>
      <Text as="h2" className="mt-10 mb-2 font-bold">
        {t('salary_details')}
      </Text>
      <SalaryMobileView data={data} />
      <SalaryWebView data={data} />
    </div>
  )
}

export default SalaryDetails
