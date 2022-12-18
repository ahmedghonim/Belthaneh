import useTranslation from 'next-translate/useTranslation'
import { DateInput, Input } from 'ui'
import UploadForm from './upload'

export default function BasicInfoForm() {
  const { t } = useTranslation('common')
  return (
    <div className={'flex gap-4 w-full sm:flex-row flex-col'}>
      <UploadForm />
      <div className="flex flex-col justify-between w-full gap-5">
        <div className="flex gap-5 w-full sm:flex-row flex-col">
          <div className="sm:w-[75%]">
            <Input
              isForm
              name="name"
              label={t('membership_title')}
              placeholder={t('membership_title')}
            />
          </div>
          <div className="sm:w-[25%]">
            <Input
              isForm
              name="price"
              label={t('price')}
              placeholder={t('price')}
            />
          </div>
        </div>
        <div className="flex gap-5 sm:flex-row flex-col w-full">
          <Input
            isForm
            type="number"
            name="duration"
            label={t('duration_per_month')}
            placeholder={t('duration_per_month')}
          />
          <DateInput
            isForm
            name="start"
            label={t('start')}
            placeholder={t('start')}
            format={'dd/mm/yyyy'}
          />
          <DateInput
            isForm
            name="end"
            label={t('end')}
            placeholder={t('end')}
            format={'dd/mm/yyyy'}
          />
          <Input
            type="number"
            isForm
            name="quantity"
            label={t('Quantity')}
            placeholder={t('Quantity')}
          />
        </div>
      </div>
    </div>
  )
}
