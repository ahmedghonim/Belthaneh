import React, { useState } from 'react'
import useTranslation from 'next-translate/useTranslation'
import Download from 'svg/download.svg'
import Add from 'svg/add.svg'
import UploadBox from 'ui/upload-img'
import Button from 'ui/button'

function MobileAddImage() {
  const { t } = useTranslation('common')

  const [images, setImages] = useState<string[] | any>([null])

  const changeHandler = (e: { target: { files: any } }) => {
    const newImage: string = URL.createObjectURL(e.target.files[0])
    setImages([...images, newImage])
    console.log(newImage)
  }
  return (
    <>
      <UploadBox
        icon={<Download className="dark:stroke-white stroke-dark-100" />}
        buttonText={t('drop_image_here_or_click_to_upload')}
        className="dark:bg-[#1A1C24] bg-white w-48 rounded-lg px-3 py-5 mx-auto my-8 dark:border-dark-100 border-[#0000008C]"
        onChange={(e) => changeHandler(e)}
      />
      <Button className="bg-transparent text-dark-300" onClick={() => {}}>
        <Add className="xs:dark:stroke-white stroke-dark-100" />
        <span className="xs:dark:text-white text-dark-100">
          {t('Add_More_Images')}
        </span>
      </Button>
      <div className="flex gap-8 justify-center my-10">
        <Button
          primary={true}
          className="w-24 justify-center"
          onClick={() => {}}
        >
          <span>{t('Cancel')}</span>
        </Button>
        <Button
          primary={true}
          className="w-32 justify-center"
          onClick={() => {}}
        >
          <span>{t('add_product')}</span>
        </Button>
      </div>
    </>
  )
}

export default MobileAddImage
