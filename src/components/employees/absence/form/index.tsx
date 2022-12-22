import useTranslation from 'next-translate/useTranslation'
import { Input, Button } from 'ui'

// forminitial values

function AbsenceForm({ onCancel }: { onCancel: () => void }) {
  const { t } = useTranslation('common')

  return (
    <div className="flex flex-col gap-4 py-4 px-6 rounded-lg sm:w-96 w-full">
      <div className="flex flex-col gap-4">
        <div>
          <Input
            name="date"
            label={t('absence_date')}
            placeholder={t('enter_absence_date')}
            isForm
          />
        </div>
        <div>
          <Input
            name="period"
            label={t('absence_period')}
            placeholder={t('enter_absence_period')}
            isForm
          />
        </div>
        <div>
          <Input
            name="type"
            label={t('absence_type')}
            placeholder={t('enter_absence_type')}
            isForm
          />
        </div>
        <div>
          <Input
            name="reason"
            label={t('absence_reason')}
            placeholder={t('enter_absence_reason')}
            isForm
          />
        </div>
      </div>
      <div className="flex justify-end gap-2 !py-2 !px-4">
        <Button className="bg-transparent" onClick={onCancel}>
          {t('cancel')}
        </Button>
        <Button primary className="!py-2 !px-4" type="submit">
          {t('add')}
        </Button>
      </div>
    </div>
  )
}

export default AbsenceForm
