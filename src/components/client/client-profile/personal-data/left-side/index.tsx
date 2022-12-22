import React from 'react'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
import { LeftSideType } from 'components/client/client-profile/types'
import { Text } from 'ui'
import Rating from 'components/common/rating'

// empty array to return Star SVG

function LeftSide({ src, ratings, activity }: LeftSideType) {
  const { t } = useTranslation('common')
  return (
    <div className="xs:flex-1 w-1/3 flex flex-col items-center gap-3">
      <div className="flex items-center justify-center xs:w-16 w-28 xs:h-16 h-28 border-4 border-primary-100 rounded-full overflow-hidden bg-gradient-to-b from-secondary-100 to-secondary-200">
        <Image
          width={75}
          height={75}
          src={src}
          alt={t('client_image')}
          className="xs:w-full h-full"
        />
      </div>
      <div className="flex gap-4">
        <div className="flex flex-col items-center">
          <Text as="span" className="mb-1 xs:!text-xs !text-md capitalize">
            {t('ratings')}
          </Text>
          <div className="flex gap-1 xs:gap-0">
            <Rating ratings={ratings} />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <Text as="span" className="mb-1 xs:!text-xs !text-md !capitalize">
            {t('activity')}
          </Text>
          <span className="text-primary-100 capitalize">{activity}%</span>
        </div>
      </div>
    </div>
  )
}

export default LeftSide
