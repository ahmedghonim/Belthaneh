import useTranslation from 'next-translate/useTranslation'
import { Text } from 'ui'
import TextArea from 'ui/text-area'

export default function SettingDescription() {
  const { t } = useTranslation('common')

  return (
    <div className="p-3 dark:bg-dark-200 bg-white rounded-md flex flex-col">
      <Text>{t('description')}</Text>
      <TextArea
        isForm
        name="description"
        label={t('your_description')}
        rows={6}
      />
    </div>
  )
}
