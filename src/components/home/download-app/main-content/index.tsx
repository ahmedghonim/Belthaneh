import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import DownloadBox from '../download-box'
import AppStore from 'svg/app-store.svg'
import GooglePlay from 'images/google-play.png'
import Image from 'next/image'

function DownloadContent() {
  const { t } = useTranslation('common')
  return (
    <div className="px-16 py-[140px] flex flex-col gap-5 w-1/2">
      <h3 className="text-primary-100 text-base uppercase">
        {t('download_app')}
      </h3>
      <h3 className="text-[#333333] text-[46px] font-bold w-[90%]">
        {t('get_started_head')}
      </h3>
      <p className="text-base font-medium text-[#333333] w-[85%]">
        {t('get_started_paragraph')}
      </p>
      <div className="flex flex-start gap-4">
        <DownloadBox
          platformIcon={
            <Image src={GooglePlay} width={40} height={40} alt={t('image')} />
          }
          platformName={t('google_play')}
          text={t('get_it_on')}
        />
        <DownloadBox
          platformIcon={<AppStore className="icon" />}
          platformName={t('app_store')}
          text={t('download_on')}
        />
      </div>
    </div>
  )
}

export default DownloadContent
