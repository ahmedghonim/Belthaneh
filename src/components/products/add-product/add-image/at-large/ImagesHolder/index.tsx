import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'

interface ImageType {
  source: string
}

interface Props {
  data: ImageType[] | any
}

function ImagesHolder({ data }: Props) {
  const { t } = useTranslation('common')
  return (
    <div className="flex justify-between flex-wrap gap-y-4 mb-8">
      {data !== null
        ? data.map((source: string, index: React.Key | null | undefined) => {
            return (
              <div key={index} className={index === 0 ? 'w-full' : 'w-48'}>
                <Image
                  width="100"
                  height="100"
                  src={source}
                  alt={t('product_image')}
                  className="h-40 w-full"
                />
              </div>
            )
          })
        : ''}
    </div>
  )
}

export default ImagesHolder
