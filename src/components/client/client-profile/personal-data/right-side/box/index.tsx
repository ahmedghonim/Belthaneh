import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import { Text } from 'ui'
import { RightSideBoxType } from 'components/client/client-profile/types'

function Box({ head, value, className = '' }: RightSideBoxType) {
  const { t } = useTranslation('common')
  return (
    <div className={`w-full flex flex-col ${className}`}>
      <Text as="h1" className="xs:!text-xs !text-md !capitalize">
        {t(head)}
      </Text>
      <Text as="p" className="xs:!text-xs !text-sm !text-[#AEB0B9]">
        {value}
      </Text>
    </div>
  )
}
export default Box
