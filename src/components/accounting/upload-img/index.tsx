import React, { useState } from 'react'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
import { Upload } from 'ui'
import ImgUpload from 'svg/img-upload.svg'
import Delete from 'svg/trash.svg'

interface Props {
  className?: string
}

function SalesUploadImgBox({ className = '' }: Props) {
  const { t } = useTranslation('common')

  const [images, setImages] = useState<string[] | any>([])

  // file onChange Handler
  const changeHandler = (e: { target: { files: any } }) => {
    const newImage: string = URL.createObjectURL(e.target.files[0])
    if (images.length === 0) {
      setImages([...images, newImage])
    }
  }

  // remove image function
  const removeImageFun = () => {
    setImages([])
  }

  return (
    <div
      className={`relative rounded-lg overflow-hidden ${className} max-h-full`}
    >
      <Upload
        className={`py-4 px-2 border-primary-100 ${
          images.length === 1 ? 'hidden' : 'block'
        }`}
        icon={<ImgUpload />}
        buttonText={
          <div className="dark:text-white text-dark-100">
            <p>
              {t('drag_your_images_or')}{' '}
              <span className="text-primary-100">{t('browse')}</span>
            </p>
            <p>{t('upload_max_one')}</p>
          </div>
        }
        onChange={changeHandler}
      />
      <Image
        width={50}
        height={50}
        src={images[0]}
        alt={t('invoice')}
        className={`w-full h-full ${images.length === 0 ? 'hidden' : 'block'}`}
      />
      <button
        className={
          images.length === 0 ? 'hidden' : 'block absolute top-3 right-3'
        }
        onClick={removeImageFun}
      >
        <Delete />
      </button>
    </div>
  )
}
export default SalesUploadImgBox
