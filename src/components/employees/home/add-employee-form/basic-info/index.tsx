import useTranslation from 'next-translate/useTranslation'
import { DateInput, Input, InputPhoneForm, Text } from 'ui'
import Select, { Options } from 'ui/select'

export interface BasicInfoProps {
  countries: Options[]
}

export default function BasicInfo({ countries }: BasicInfoProps) {
  const { t } = useTranslation('common')

  return (
    <div className="flex flex-col p-5 gap-5 dark:bg-dark-200 bg-white rounded-[10px]">
      <Text className="!text-primary-100 font-bold">
        {t('basic_information')}
      </Text>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-5">
        <Input
          name={'employee_name'}
          placeholder={t('employee_name')}
          label={t('employee_name')}
          isForm
        />
        <Input
          name={'job_title'}
          placeholder={t('job_title')}
          label={t('job_title')}
          isForm
        />
        <Input
          name={'email'}
          placeholder={t('email')}
          label={t('email')}
          type="email"
          isForm
        />
        <InputPhoneForm
          name="phone"
          label={`${t('phone')}*`}
          placeholder={t('phone_number')}
        />
        <Input
          name={'residence_permit_ID'}
          placeholder={t('residence_permit_ID')}
          label={t('residence_permit_ID')}
          isForm
        />
        <Input
          name={'salary'}
          placeholder={t('salary')}
          label={t('salary')}
          type="number"
          isForm
        />
        <DateInput
          name="residence_expiry_date"
          label={t('residence_expiry_date')}
          placeholder={t('residence_expiry_date')}
          isForm
        />
        <Select
          name="country"
          label={t('country')}
          placeholder={t('select_country')}
          options={countries}
        />
        <Input
          name={'user_name'}
          placeholder={t('user_name')}
          label={t('user_name')}
          isForm
        />
        <Input
          name={'password'}
          placeholder={t('password')}
          label={t('password')}
          type={'password'}
          isForm
        />
      </div>
    </div>
  )
}
