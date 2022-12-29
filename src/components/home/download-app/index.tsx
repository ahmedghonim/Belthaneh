import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import DownloadContent from './main-content'

function DownloadApp() {
  const { t } = useTranslation('common')
  return (
    <div className="bg-[#F8F9FA] relative overflow-hidden rounded-bl-lg rounded-br-lg mt-[3px]">
      <DownloadContent />
      <div className="absolute top-[37px] right-[10%] h-[95%]">
        <Image
          src="/images/download-img.png"
          width={520}
          height={625}
          alt={t('image')}
          className="h-full"
        />
      </div>
    </div>
  )
}

export default DownloadApp
