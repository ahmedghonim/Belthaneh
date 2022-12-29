import useTranslation from 'next-translate/useTranslation'
import { Button, Input, Text } from 'ui'
import Cash from 'svg/cash.svg'
import Credit from 'svg/credit.svg'
import { useFormikContext } from 'formik'

export interface PaymentProps {
  onApplyCoupon: () => void
}

export default function Payment({ onApplyCoupon }: PaymentProps) {
  const { t } = useTranslation('common')
  const { setFieldValue, values, handleChange } = useFormikContext<{
    coupon: string
    credit: number | string
    cash: number | string
  }>()

  return (
    <div className="flex flex-col gap-5 text-center w-full ">
      <div className="flex gap-3 items-end">
        <Input
          name="coupon"
          isForm
          label={t('coupon')}
          onChange={(e) => {
            handleChange(e)
          }}
        />
        <Button
          primary
          onClick={onApplyCoupon}
          className="font-semibold text-sm "
          disabled={values.coupon === ''}
        >
          {t('apply')}
        </Button>
      </div>
      <Input name="discount" isForm label={t('discount')} />
      <div className="flex flex-col">
        <Text size={'sm'} className="font-semibold self-start">
          {t('payment_method')}
        </Text>
        <div className="flex justify-between mt-3 gap-10">
          <div className="flex flex-col gap-[10px] flex-1">
            <Button
              primaryBorder={values.credit === ''}
              primary={values.credit !== ''}
              onClick={() => {
                setFieldValue('credit', values.credit === 0 ? '' : 0)
              }}
              className="bg-transparent text-sm xs:p-2 !px-2"
            >
              <Credit
                className={`${
                  values.credit !== '' ? 'fill-white' : 'fill-primary-100'
                }`}
              />
              {t('credit')}
            </Button>
            {values.credit !== '' && <Input type="number" name="cash" />}
          </div>
          <div className="flex flex-col gap-[10px] flex-1">
            <Button
              primaryBorder={values.cash === ''}
              primary={values.cash !== ''}
              onClick={() => {
                setFieldValue('cash', values.cash === 0 ? '' : 0)
              }}
              className="bg-transparent text-sm xs:p-2 !px-2"
            >
              <Cash
                className={`${
                  values.cash !== '' ? 'fill-white' : 'fill-primary-100'
                }`}
              />
              {t('cash')}
            </Button>
            {values.cash !== '' && <Input type="number" name="cash" />}
          </div>
        </div>
      </div>
    </div>
  )
}
