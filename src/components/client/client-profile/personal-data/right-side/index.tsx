import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import { RightSideType } from 'components/client/client-profile/types'
import Box from './box'

function RightSide({ name, birthDay, mobile, gender, notes }: RightSideType) {
  const { t } = useTranslation('common')
  return (
    <div className="xs:w-[190px] w-2/3 flex flex-wrap ">
      <div className="w-full flex gap-4 mb-2">
        <Box head={t('Full Name')} value={name} className="flex-1" />
        <Box head={t('dob')} value={birthDay} className="flex-1" />
      </div>
      <div className="w-full flex gap-4 mb-2">
        <Box head={t('mobile')} value={mobile} className="flex-1" />
        <Box head={t('gender')} value={gender} className="flex-1" />
      </div>
      <Box head={t('notes')} value={notes} className="w-full" />
    </div>
  )
}

export default RightSide
