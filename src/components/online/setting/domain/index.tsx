import useTranslation from 'next-translate/useTranslation'
import { Button, Input } from 'ui'

export interface SettingDomainProps {
  onClickCopy: () => void
}

export default function SettingDomain({ onClickCopy }: SettingDomainProps) {
  const { t } = useTranslation('common')

  return (
    <div className="flex flex-col">
      <div className="flex  items-end gap-4">
        <Input
          name="domain"
          isForm
          label={t('your_domain')}
          EndComponent={() => (
            <span className="text-dark-300 px-2">@blthanih.com</span>
          )}
        />
        <Button primary onClick={onClickCopy}>
          {t('copy')}
        </Button>
      </div>
    </div>
  )
}
