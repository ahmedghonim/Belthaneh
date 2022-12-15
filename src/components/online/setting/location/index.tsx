import useTranslation from 'next-translate/useTranslation'
import { Button, Input, Text } from 'ui'

export default function SettingLocation() {
  const { t } = useTranslation('common')

  return (
    <div className="p-3 dark:bg-dark-200 bg-white rounded-md flex flex-col">
      <Text>{t('location')}</Text>
      <div className="flex  items-end gap-4 sm:flex-row flex-col">
        <Input
          isForm
          name="location"
          value={location ?? ''}
          label={t('Your_Location')}
        />
        <Button primary>{t('add')}</Button>
      </div>
    </div>
  )
}
