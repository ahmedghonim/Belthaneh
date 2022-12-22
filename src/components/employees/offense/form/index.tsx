import useTranslation from 'next-translate/useTranslation'
import { Input, Button } from 'ui'

function OffenseForm({ onCancel }: { onCancel: () => void }) {
  const { t } = useTranslation('common')

  return (
    <div className="flex flex-col gap-4  sm:w-[400px]">
      <div className="flex flex-col gap-4">
        <div>
          <Input
            name="title"
            label={t('offense_title')}
            placeholder={t('enter_offense_title')}
            isForm
          />
        </div>
        <div>
          <Input
            name="date"
            label={t('offense_date')}
            placeholder={t('enter_offense_date')}
            isForm
          />
        </div>
        <div>
          <Input
            name="category"
            label={t('offense_category')}
            placeholder={t('enter_offense_category')}
            isForm
          />
        </div>
        <div>
          <Input
            name="type"
            label={t('offense_type')}
            placeholder={t('enter_offense_type')}
            isForm
          />
        </div>
      </div>
      <div className="flex justify-end gap-2 !py-2 !px-4">
        <Button className="bg-transparent" type="reset" onClick={onCancel}>
          {t('cancel')}
        </Button>
        <Button primary className="!py-2 !px-4" type="submit">
          {t('add')}
        </Button>
      </div>
    </div>
  )
}

export default OffenseForm
