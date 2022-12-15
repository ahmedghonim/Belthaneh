import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import { BodyDataType } from 'components/client/clients/types'
import { DetailsBox } from 'ui'

function BoxBody({ phoneNum, totalVisits, notes }: BodyDataType) {
  const { t } = useTranslation('common')

  return (
    <div className="flex flex-col gap-2 p-3">
      <ul className="flex flex-col gap-2">
        <DetailsBox
          withLabel={true}
          labelType={t('phone_number')}
          text={phoneNum}
          labelStyling="dark:!text-white text-dark-100"
        />
        <DetailsBox
          withLabel={true}
          labelType={t('total_visits')}
          text={totalVisits}
          labelStyling="dark:!text-white text-dark-100"
        />
      </ul>
      <p>
        {t('notes')}:
        <br />
        {notes}
      </p>
    </div>
  )
}
export default BoxBody
