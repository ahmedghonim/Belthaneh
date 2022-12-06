import React, { useState } from 'react'
import useTranslation from 'next-translate/useTranslation'
import Add from 'svg/plus.svg'
import ImagesHolder from './ImagesHolder'
import UploadImg from 'ui/upload-img'

function LargeAddImage() {
  const { t } = useTranslation('common')
  const [images, setImages] = useState<string[] | any>([])

  // file onChange Handler
  const changeHandler = (e: { target: { files: any } }) => {
    const newImage: string = URL.createObjectURL(e.target.files[0])
    if (images.length <= 2) {
      setImages([...images, newImage])
    }
  }
  return (
    <>
      <ImagesHolder data={images} />
      <UploadImg
        icon={<Add className="sm:fill-primary-100" />}
        buttonText={t('Upload_Image')}
        className="m-auto w-36 h-48 rounded-xl border-primary-100"
        onChange={(e) => changeHandler(e)}
      />
    </>
  )
}

export default LargeAddImage
