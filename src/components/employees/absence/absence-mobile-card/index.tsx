import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import CardInfo from 'components/common/card-info'
import { AbsenceItemDataProps } from '../absence-table'
function AbsenceMobileCard({
  date,
  period,
  type,
  reason
}: AbsenceItemDataProps) {
  const { t } = useTranslation('common')
  return (
    <CardInfo
      header={{ first: t('date'), second: date }}
      body={[
        { label: t('period'), value: period },
        { label: t('type'), value: type },
        { label: t('reason'), value: reason }
      ]}
    />
  )
}

export default AbsenceMobileCard
