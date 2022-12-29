import useTranslation from 'next-translate/useTranslation'
import { Button, Input, Text } from 'ui'
import Cash from 'svg/cash.svg'
import Credit from 'svg/credit.svg'
import { useFormikContext } from 'formik'
import { PaymentProps } from '../../payment'
import { ServiceField } from 'components/pos/cart/card'

export default function InvoiceDetailsForm({ onApplyCoupon }: PaymentProps) {
  const { t } = useTranslation('common')
  const { setFieldValue, values } = useFormikContext<{
    coupon: string
    credit: number | string
    cash: number | string
    services: ServiceField[]
    packages: Array<Partial<ServiceField>>
    memberships: Array<Partial<ServiceField>>
  }>()

  const Coupon = () => (
    <div className="flex gap-3 items-end sm:w-2/3 w-full">
      <Input name="coupon" isForm label={t('coupon')} />
      <Button
        primary
        onClick={onApplyCoupon}
        className="font-semibold text-sm "
        disabled={values.coupon === ''}
      >
        {t('apply')}
      </Button>
    </div>
  )
  const PaymentMethod = () => (
    <div className="flex flex-col">
      <Text size={'sm'} className="font-semibold self-start">
        {t('payment_method')}
      </Text>
      <div className="flex justify-between mt-3 gap-5 sm:w-3/4 w-full">
        <div className="flex flex-col gap-[10px] flex-1">
          <Button
            primaryBorder={values.credit === ''}
            primary={values.credit !== ''}
            onClick={() => {
              setFieldValue('credit', values.credit === 0 ? '' : 0)
            }}
            className="bg-transparent text-sm xs:p-2 !px-2 sm:w-3/4"
          >
            <Credit
              className={`${
                values.credit !== '' ? 'fill-white' : 'fill-primary-100'
              }`}
            />
            {t('credit')}
          </Button>
          {values.credit !== '' && (
            <Input type="number" name="credit" label={t('credit')} />
          )}
        </div>
        <div className="flex flex-col gap-[10px] flex-1">
          <Button
            primaryBorder={values.cash === ''}
            primary={values.cash !== ''}
            onClick={() => {
              setFieldValue('cash', values.cash === 0 ? '' : 0)
            }}
            className="bg-transparent text-sm xs:p-2 !px-2  sm:w-3/4"
          >
            <Cash
              className={`${
                values.cash !== '' ? 'fill-white' : 'fill-primary-100'
              }`}
            />
            {t('cash')}
          </Button>
          {values.cash !== '' && (
            <Input type="number" name="cash" label={t('cash')} />
          )}
        </div>
      </div>
    </div>
  )

  return (
    <div className="flex flex-col gap-5 text-center pt-8 ">
      <Text className="self-start font-bold" size={'base'}>
        {t('invoice_details')}
      </Text>
      <PaymentMethod />
      <div className="flex sm:flex-col flex-row gap-5 sm:w-1/2">
        <Input name="discount" isForm label={t('discount')} type="number" />
        <Input name="tax" isForm label={t('tax')} type="number" />
      </div>
      <Coupon />
    </div>
  )
}
