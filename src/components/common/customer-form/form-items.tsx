import useTranslation from 'next-translate/useTranslation'
import DateInputForm from 'ui/dateInput'
import Input from 'ui/input'
import InputPhoneForm from 'ui/input-phone-form'
import Select, { Options } from 'ui/select'
import TextAreaForm from 'ui/text-area'
export default function CustomerFormItems(): JSX.Element {
  const { t } = useTranslation('common')
  const genderList: Options[] = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' }
  ]
  return (
    <>
      <InputPhoneForm
        name="phone"
        label={`${t('phone')}*`}
        placeholder={t('phone_number')}
        onlyCountries={['sa']}
        showSearch
      />
      <span className="flex flex-col sm:flex-row gap-4">
        <Input
          isForm
          name="name"
          label={`${t('name')}*`}
          placeholder={t('name')}
        />
        <Input
          isForm
          name="email"
          label={t('email')}
          placeholder={t('email')}
        />
      </span>
      <span className="flex flex-col sm:flex-row gap-4">
        <div className="relative w-full justify-between">
          <label
            htmlFor={'gender'}
            className={
              ' text-start block mb-2 text-sm  w-full text-dark-200 dark:text-white font-normal'
            }
          >
            {t('gender')}
          </label>
          <Select
            name={'gender'}
            options={genderList}
            className="w-full text-start"
            placeholder={t('select_gender')}
          />
        </div>
        <DateInputForm
          name="dob"
          label={t('dob')}
          placeholder={t('dob')}
          isForm
        />
      </span>
      <TextAreaForm
        name="message"
        label={t('message')}
        placeholder={t('Type_anything')}
        rows={4}
        isForm
      />
    </>
  )
}
