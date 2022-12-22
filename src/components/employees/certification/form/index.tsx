import useTranslation from 'next-translate/useTranslation'
import { useFormikContext } from 'formik'
import UploadCertificate from './upload'
import { Input, Button } from 'ui'
import { ChangeEvent } from 'react'

function CertificationForm({ handleCancel }: { handleCancel: () => void }) {
  const { t } = useTranslation('common')
  const { setFieldValue, values } = useFormikContext<{
    src: string
  }>()
  return (
    <div className="grid grid-cols-1 gap-5 sm:w-[484px] ">
      <div className="relative justify-self-center">
        <UploadCertificate
          src={values.src}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            const target = e.target as HTMLInputElement
            const file: File = (target.files as FileList)[0]
            setFieldValue('image', URL.createObjectURL(file))
          }}
          deleteImage={() => {
            void setFieldValue('image', '')
          }}
        />
      </div>
      <Input
        name="name"
        label={t('certificate_name')}
        placeholder={t('enter_certificate_name')}
        isForm
      />
      <Input
        name="type"
        label={t('certificate_type')}
        placeholder={t('enter_certificate_type')}
        isForm
      />
      <Input
        name="number"
        label={t('certificate_number')}
        placeholder={t('enter_certificate_num')}
        type="number"
        isForm
      />
      <div className="flex justify-end gap-2 !pt-5 !px-4">
        <Button className="bg-transparent" type="reset" onClick={handleCancel}>
          {t('cancel')}
        </Button>
        <Button primary className="!py-2 !px-4" type="submit">
          {t('add')}
        </Button>
      </div>
    </div>
  )
}
export default CertificationForm
