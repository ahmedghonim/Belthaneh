import useTranslation from 'next-translate/useTranslation'
import { Button, Input, Text } from 'ui'
import InputPhoneForm from 'ui/input-phone-form'

export default function SettingContacts() {
  const { t } = useTranslation('common')

  return (
    <div className="p-3 dark:bg-dark-200 bg-white rounded-md flex flex-col gap-2">
      <Text>{t('Contacts')}</Text>
      <div className="flex  items-end gap-4  w-full sm:flex-row flex-col">
        <InputPhoneForm label={t('phone')} name={'phone'} />
        <Button primary>{t('add')}</Button>
      </div>
      <div className="flex  items-end gap-4 sm:flex-row flex-col">
        <Input isForm name="email" type="email" label={t('Your_email')} />

        <Button primary>{t('add')}</Button>
      </div>
    </div>
  )
}
