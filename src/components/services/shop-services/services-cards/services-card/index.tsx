import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import React from 'react'
import { Card, Text } from 'ui'

function ServicesCard() {
  const { t } = useTranslation('common')
  return (
    <Card className="flex justify-between">
      <div className="flex gap-3">
        <Image
          className="w-[70px] h-[70px]"
          src="https://placeimg.com/192/192/people"
          alt="service"
          width={70}
          height={70}
        />
        <div className="flex flex-col justify-between">
          <Text as="h2">Hair Cut</Text>
          <Text size="xs" as="p" className="">
            Lorem ipsum dolor sit amet, consect do she
          </Text>
        </div>
      </div>
      <span>
        <Text secondary="light" as="h6">
          20 {t('sr')}
        </Text>
      </span>
    </Card>
  )
}

export default ServicesCard
