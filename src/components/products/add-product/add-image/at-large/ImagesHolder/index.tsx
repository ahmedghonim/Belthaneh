import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import Trash from 'svg/trash.svg'

interface ImageType {
  source: string
}

interface Props {
  data: ImageType[] | any
  deleteImg: (url: string) => void
}

function ImagesHolder({ data, deleteImg }: Props) {
  const { t } = useTranslation('common')

  return (
    <>
      {data.length > 0 ? (
        <div className="flex justify-between flex-wrap gap-y-4 mb-8">
          {data.map((source: string, index: React.Key | null | undefined) => {
            return (
              <div
                key={index}
                className={`relative ${index === 0 ? 'w-full' : 'w-[48%]'}`}
              >
                <Image
                  width="100"
                  height="100"
                  src={source}
                  alt={t('product_image')}
                  className="h-40 w-full"
                />
                <button
                  className="absolute top-0 right-0"
                  onClick={() => deleteImg(source)}
                >
                  <Trash />
                </button>
              </div>
            )
          })}
        </div>
      ) : (
        ''
      )}
    </>
  )
}

export default ImagesHolder
