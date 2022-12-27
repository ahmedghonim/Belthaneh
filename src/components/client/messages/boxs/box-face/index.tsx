import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import { BoxFaceType } from 'components/client/messages/types'
import { Card, Text } from 'ui'
import Lang from 'svg/lang.svg'

function BoxFace({
  icon,
  boxTitle,
  boxDesc,
  formType,
  className = '',
  faceDir,
  flipFun,
  onClickFun = () => {}
}: BoxFaceType) {
  const { t } = useTranslation('common')

  return (
    <Card
      className={`relative flex flex-col gap-5 p-5 pt-10 rounded-xl ${className}`}
    >
      <div
        className={`flex flex-col gap-3 ${
          faceDir === 'back' ? 'ltr:text-right rtl:text-left' : ''
        }`}
      >
        <div className={faceDir === 'back' ? 'ltr:ml-auto rtl:mr-auto' : ''}>
          {icon}
        </div>
        <div>
          <Text
            as="h1"
            className="!font-bold !text-sm dark:!text-[#D1D1D1] text-dark-100 !mb-2 !capitalize"
          >
            {boxTitle}
          </Text>
          <Text as="p" className="!text-xs  !font-medium">
            {boxDesc}
          </Text>
        </div>
      </div>
      <div className="flex justify-between gap-5">
        <button
          className=" flex-1 justify-center uppercase bg-primary-100 rounded-lg p-1 text-white"
          data-dir={faceDir === 'front' ? 'front' : 'back'}
          onClick={() => {
            onClickFun('sms', formType)
          }}
        >
          <span>{faceDir === 'front' ? t('sms') : t('رسالة')}</span>
        </button>
        <button
          className="mail flex-1 justify-center capitalize bg-primary-100 rounded-lg p-1 text-white"
          data-dir={faceDir === 'front' ? 'front' : 'back'}
          onClick={() => {
            onClickFun('mail', formType)
          }}
        >
          <span>{faceDir === 'front' ? t('mail') : t('بريد')}</span>
        </button>
        <button
          className="app flex-1 justify-center uppercase bg-primary-100 rounded-lg p-1 text-white"
          id="app"
          data-dir={faceDir === 'front' ? 'front' : 'back'}
          data-kind={formType}
          onClick={() => {
            onClickFun('app', formType)
          }}
        >
          <span>{faceDir === 'front' ? t('app') : t('برنامج')}</span>
        </button>
      </div>
      <button
        className={`grid place-items-center absolute top-1 ltr:right-1  dark:bg-white bg-secondary-100 w-8 h-8 cursor-pointer ${
          faceDir === 'back'
            ? 'ltr:left-0 rtl:right-0 ltr:rounded-tl-xl ltr:rounded-br-xl rtl:rounded-tr-xl rtl:rounded-bl-xl'
            : 'rtl:!left-0 ltr:rounded-tr-xl ltr:rounded-bl-xl rtl:rounded-tl-xl rtl:rounded-br-xl'
        }`}
        onClick={flipFun}
      >
        <Lang
          width={17}
          height={17}
          className="dark:fill-dark-100 fill-white"
        />
      </button>
    </Card>
  )
}

export default BoxFace
