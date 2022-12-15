import useTranslation from 'next-translate/useTranslation'
import Partner from 'components/online/partner'
import { Text } from 'ui'

export default function Online() {
  const { t } = useTranslation('common')

  return (
    <div>
      <Text>{t('Blthanih_Partner')}</Text>
      <div className="mt-4">
        <Partner />
      </div>
    </div>
  )
}
