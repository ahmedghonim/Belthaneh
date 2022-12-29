import useTranslation from 'next-translate/useTranslation'
import { Upload, Text } from 'ui'
import ImgUpload from 'svg/img-upload.svg'
import Image from 'next/image'
import Delete from 'svg/trash.svg'
import { useFormikContext } from 'formik'

export default function InventoryUploadPhoto() {
  const { setFieldValue, values } = useFormikContext<{
    photo: string
  }>()
  const { t } = useTranslation('common')

  return values.photo !== '' ? (
    <div className="flex items-center flex-col relative">
      <button
        className={'block absolute top-3 right-3'}
        onClick={() => {
          setFieldValue('photo', '')
        }}
      >
        <Delete />
      </button>
      <Image src={values.photo} alt={'upload'} height={230} width={230} />
    </div>
  ) : (
    <Upload
      className={`m-auto w-full rounded-xl ${
        values?.photo !== '' ? 'border-0' : 'border-primary-100'
      }  p-8 relative h-[230px]`}
      name="photo"
      onChange={(e) => {
        const target = e.target as HTMLInputElement
        const file: File = (target.files as FileList)[0]
        setFieldValue('photo', URL.createObjectURL(file))
      }}
      icon={<ImgUpload className="sm:fill-primary-100" />}
      buttonText={
        values?.photo === '' && (
          <div className="w-full flex flex-col">
            <Text>
              {t('Drag_Your_Images')}{' '}
              <span className="text-primary-100">{t('browse')}</span>
            </Text>
            <Text>{t('Upload_max_img')}</Text>
          </div>
        )
      }
    />
  )
}
