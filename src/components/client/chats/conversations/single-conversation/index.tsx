import React from 'react'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
import { CoversationType } from 'components/client/chats/types'
import { Button, Text } from 'ui'

function Coversation({ src, name, message, replay }: CoversationType) {
  const { t } = useTranslation('common')
  return (
    <div className="flex items-center mb-2">
      <div>
        <Image
          width={60}
          height={60}
          src={src}
          alt={t('person')}
          className="rounded-md"
        />
      </div>
      <div className="flex-1 whitespace-nowrap overflow-hidden text-ellipsis ltr:ml-2 rtl:mr-2">
        <Text as="h1">{name}</Text>
        <p className="text-sm dark:text-[#D9D9D9] text-dark-100">{message}</p>
      </div>
      <Button
        className="bg-transparent !text-primary-100 !text-sm uppercase font-semibold"
        onClick={replay}
      >
        {t('replay')}
      </Button>
    </div>
  )
}

export default Coversation
