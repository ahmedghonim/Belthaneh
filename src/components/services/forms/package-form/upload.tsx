import { useFormikContext } from 'formik'
import React from 'react'
import { Text, Upload } from 'ui'
import useTranslation from 'next-translate/useTranslation'
import ImgUpload from 'svg/img-upload.svg'
import Image from 'next/image'

export default function UploadForm() {
  const { t } = useTranslation('common')
  const { values, setFieldValue } = useFormikContext<{
    photo: string
  }>()
  return (
    <div className="flex flex-col">
      <Text size={'sm'} className={'text-start mb-2'}>
        {t('package_img')}
      </Text>
      <Upload
        className={`m-auto w-full sm:w-[144px] rounded-xl ${
          values?.photo !== '' ? 'border-0' : 'border-primary-100'
        }  sm:p-5 p-12 relative`}
        name="photo"
        onChange={(e) => {
          const target = e.target as HTMLInputElement
          const file: File = (target.files as FileList)[0]
          void setFieldValue('photo', URL.createObjectURL(file))
        }}
        icon={
          values?.photo !== '' ? (
            <Image src={values.photo} alt={'upload'} fill />
          ) : (
            <ImgUpload className="sm:fill-primary-100" />
          )
        }
        buttonText={
          values?.photo === '' && (
            <div className="w-full flex flex-col">
              <Text className="text-[10px]">
                {t('Drag_Your_Images')}{' '}
                <span className="text-primary-100 text-[10px]">
                  {t('browse')}
                </span>
              </Text>
              <Text className="text-[10px]">{t('Upload_max_img')}</Text>
            </div>
          )
        }
      />
    </div>
  )
}
