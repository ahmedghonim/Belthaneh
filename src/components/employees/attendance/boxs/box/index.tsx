import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import { AttendanceSingleObjectType } from 'components/employees/attendance/type'
import CardInfo from 'components/common/card-info'

function AttendanceBox({
  date,
  attend,
  leave,
  overTime
}: AttendanceSingleObjectType) {
  const { t } = useTranslation('common')
  return (
    <CardInfo
      header={{ first: t('date'), second: date }}
      body={[
        { label: t('attendance'), value: attend },
        { label: t('leave'), value: leave },
        { label: t('over_time'), value: overTime }
      ]}
    />
  )
}

export default AttendanceBox
