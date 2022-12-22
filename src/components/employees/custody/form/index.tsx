import useTranslation from 'next-translate/useTranslation'
import { Input, Button, DateInput } from 'ui'

function CustodyForm({ handleCancel }: { handleCancel: () => void }) {
  const { t } = useTranslation('common')
  return (
    <div className="flex flex-col gap-4 sm:w-[400px] ">
      <div className="flex flex-col gap-4">
        <div>
          <Input
            name="custody"
            label={t('custody')}
            placeholder={t('enter_custody_name')}
            isForm
          />
        </div>
        <div>
          <Input
            name="category"
            label={t('category')}
            placeholder={t('enter_custody_category')}
            isForm
          />
        </div>
        <div>
          <Input
            type="number"
            name="price"
            label={t('price')}
            placeholder={t('enter_custody_price')}
            isForm
          />
        </div>
        <div>
          <Input
            type="number"
            name="amount"
            label={t('amount')}
            placeholder={t('enter_custody_amount')}
            isForm
          />
        </div>
        <div>
          <DateInput
            name="date"
            label={t('date')}
            placeholder={t('enter_custody_date')}
            isForm
          />
        </div>
      </div>
      <div className="flex justify-end gap-2 !py-2 !px-4">
        <Button className="bg-transparent" type="reset" onClick={handleCancel}>
          {t('cancel')}
        </Button>
        <Button primary className="!py-2 !px-4" type="submit">
          {t('add')}
        </Button>
      </div>
    </div>
  )
}

export default CustodyForm
