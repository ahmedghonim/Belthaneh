import { useFormikContext } from 'formik'
import useTranslation from 'next-translate/useTranslation'
import { Button, Input, Tabs, Text } from 'ui'

export default function SettingSocialMedia() {
  const { t } = useTranslation('common')
  const { values, setFieldValue } = useFormikContext<{
    facebook: string
    twitter: string
    instagram: string
    currentTab: 'facebook' | 'instagram' | 'twitter'
  }>()

  const isActive = (value: string): boolean => {
    return values.currentTab === value
  }
  const tabs = [
    {
      isActive: isActive('facebook'),
      value: 'facebook',
      label: t('facebook'),
      onClick: () => {
        setFieldValue('currentTab', 'facebook')
      }
    },
    {
      isActive: isActive('twitter'),
      value: 'twitter',
      label: t('twitter'),
      onClick: () => {
        setFieldValue('currentTab', 'twitter')
      }
    },
    {
      isActive: isActive('instagram'),
      value: 'instagram',
      label: t('instagram'),
      onClick: () => {
        setFieldValue('currentTab', 'instagram')
      }
    }
  ]
  return (
    <div className="p-3 dark:bg-dark-200 bg-white rounded-md flex flex-col">
      <Text>{t('Social_Media')}</Text>
      <Tabs tabs={tabs} className="!bg-transparent xs:!px-0 !py-2" />

      <div className="flex  items-end gap-4 sm:flex-row flex-col">
        <Input name={values.currentTab} label={t('Your_Link')} isForm />
        <Button primary>{t('add')}</Button>
      </div>
    </div>
  )
}
