import { FormikProps } from 'formik'
import useTranslation from 'next-translate/useTranslation'
import { Button, Input, Text } from 'ui'
import Cash from 'svg/cash.svg'
import Credit from 'svg/credit.svg'
import { InvoiceFormValues } from 'components/pos'

export interface PaymentProps {
  form: FormikProps<InvoiceFormValues>
  calcTotal: (discount: number) => void
  onApplyCoupon: () => void
}

export default function Payment({
  form,
  calcTotal,
  onApplyCoupon
}: PaymentProps) {
  const { t } = useTranslation('common')

  return (
    <div className="flex flex-col gap-5 text-center ">
      <div className="flex gap-3 items-end">
        <Input
          name="coupon"
          isForm
          label={t('coupon')}
          onChange={(e) => {
            form.handleChange(e)
            calcTotal(Number(e.target.value))
          }}
        />
        <Button
          primary
          onClick={onApplyCoupon}
          className="font-semibold text-sm "
          disabled={form.values.coupon === ''}
        >
          {t('apply')}
        </Button>
      </div>
      <Input name="discount" isForm label={t('discount')} />
      <div className="flex flex-col">
        <Text size={'sm'} className="font-semibold self-start">
          {t('payment_method')}
        </Text>
        <div className="flex justify-between mt-3">
          <div className="flex flex-col gap-[10px]">
            <Button
              primaryBorder={form.values.credit === ''}
              primary={form.values.credit !== ''}
              onClick={() => {
                form.setFieldValue('credit', form.values.credit === 0 ? '' : 0)
              }}
              className="bg-transparent w-[130px] text-sm xs:p-2"
            >
              <Credit
                className={`${
                  form.values.credit !== '' ? 'fill-white' : 'fill-primary-100'
                }`}
              />
              {t('credit')}
            </Button>
            {form.values.credit !== '' && (
              <Input className="w-[130px]" type="number" name="cash" />
            )}
          </div>
          <div className="flex flex-col gap-[10px]">
            <Button
              primaryBorder={form.values.cash === ''}
              primary={form.values.cash !== ''}
              onClick={() => {
                form.setFieldValue('cash', form.values.cash === 0 ? '' : 0)
              }}
              className="bg-transparent w-[126px] text-sm xs:p-2"
            >
              <Cash
                className={`${
                  form.values.cash !== '' ? 'fill-white' : 'fill-primary-100'
                }`}
              />
              {t('cash')}
            </Button>
            {form.values.cash !== '' && (
              <Input className="w-[126px]" type="number" name="cash" />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
