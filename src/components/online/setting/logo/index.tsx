import useTranslation from 'next-translate/useTranslation'
import { Text } from 'ui'
import Add from 'svg/add2.svg'
import Img from 'svg/img.svg'
import UploadImg from 'ui/upload-img'
import Image from 'next/image'
import { useFormikContext } from 'formik'

export default function SettingLogo() {
  const { t } = useTranslation('common')
  const { values, setFieldValue } = useFormikContext<{
    logo: string
  }>()

  return (
    <div className="p-3 dark:bg-dark-200 bg-white rounded-md flex flex-col">
      <Text>{t('logo')}</Text>
      <div className="flex gap-3 pt-4">
        <div
          className={` ${
            values.logo !== '' && values.logo !== null
              ? ''
              : 'border-primary-100 p-[14px] border-1 border-dashed border-2'
          }`}
        >
          {values.logo !== '' && values.logo !== null ? (
            <Image
              src={values.logo}
              width={54}
              height={54}
              alt={'logo'}
              onLoad={() => values.logo}
            />
          ) : (
            <Img />
          )}
        </div>

        <div className="flex flex-col gap-1">
          <Text size={'xs'} className="font-normal">
            {t('Add_your_Logo')}
          </Text>
          <Text size={'xs'} className="font-normal">
            {t('PNG_or_JPG_are_Recommended')}
          </Text>
        </div>
      </div>
      {values.logo !== '' && values.logo !== null ? (
        <button
          onClick={() => {
            void setFieldValue('logo', '')
          }}
          className="self-end"
        >
          <Text danger>{t('remove')}</Text>{' '}
        </button>
      ) : (
        <UploadImg
          icon={<Add />}
          className="border-0 self-end"
          buttonText={''}
          onChange={(e) => {
            const newValue: any = e.target.files
            const newImage: string = URL.createObjectURL(newValue[0])
            void setFieldValue('logo', newImage)
          }}
        />
      )}
    </div>
  )
}
