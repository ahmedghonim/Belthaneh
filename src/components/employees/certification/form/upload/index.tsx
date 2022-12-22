import React, { ChangeEvent } from 'react'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
import { Upload } from 'ui'
import ImgUpload from 'svg/img-upload.svg'
import Delete from 'svg/trash.svg'
interface UploadCertificateProps {
  src: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  deleteImage: () => void
}

function UploadCertificate({
  src = '',
  onChange,
  deleteImage
}: UploadCertificateProps) {
  const { t } = useTranslation('common')

  return (
    <div>
      <Upload
        className={`py-4 px-2 border-primary-100 ${
          src !== '' ? 'hidden' : 'block'
        }`}
        icon={<ImgUpload />}
        buttonText={
          <div className="dark:text-white text-dark-100">
            <p>
              {t('drag_your_images_or')}{' '}
              <span className="text-primary-100">{t('browse')}</span>
            </p>
          </div>
        }
        onChange={onChange}
      />
      <Image
        width={50}
        height={50}
        src={src}
        alt={t('certificate')}
        className={`w-full h-full max-h-[40vh] ${
          src === '' ? 'hidden' : 'block'
        }`}
      />
      <button
        className={src === '' ? 'hidden' : 'block absolute top-3 right-3'}
        onClick={deleteImage}
      >
        <Delete />
      </button>
    </div>
  )
}

export default UploadCertificate
