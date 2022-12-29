import { useFormikContext } from 'formik'
import useTranslation from 'next-translate/useTranslation'
import Avatar from 'ui/avatar'
import UploadCloud from 'svg/upload-cloud.svg'
import { Text, Upload } from 'ui'

export default function ProfileImg() {
  const { t } = useTranslation('common')

  const { values, setFieldValue } = useFormikContext<{
    img: string
    name: string
  }>()

  return (
    <div className="flex flex-col p-5 gap-5 dark:bg-dark-200 bg-white rounded-[10px] justify-center items-center">
      <Avatar
        src={values.img !== '' ? values.img : '/images/placeholder.png'}
        alt={values.name}
        className="sm:w-[116px] sm:h-[116px]"
      />
      <Upload
        className={'border-0'}
        name="img"
        onChange={(e) => {
          const target = e.target as HTMLInputElement
          const file: File = (target.files as FileList)[0]
          setFieldValue('img', URL.createObjectURL(file))
        }}
        icon={null}
        buttonText={
          <div className="flex gap-2 items-center">
            <UploadCloud className="stroke-primary-100" />
            <Text className="!text-primary-100" size={'xs'}>
              {t('upload_Profile_Picture')}
            </Text>
          </div>
        }
      />
    </div>
  )
}
