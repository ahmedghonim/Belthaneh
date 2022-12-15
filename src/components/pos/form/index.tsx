import { FormikProps, FormikProvider } from 'formik'
import useTranslation from 'next-translate/useTranslation'
import { Button, Text } from 'ui'
import Cart from '../cart'
import { CartCardProps } from '../cart/card'
import InvoiceFooter, { InvoiceFooterProps } from './invoice-footer'
import Payment from './payment'
import Next from 'svg/right-angle.svg'
import { InvoiceFormValues } from 'components/pos'

export interface InvoiceFormProps {
  formik: FormikProps<InvoiceFormValues>
  calcTotal: (discount: number) => void
  onApplyCoupon: () => void
  invoiceNumber: string
  footerProps: InvoiceFooterProps
}

export default function InvoiceForm({
  formik,
  footerProps,
  calcTotal,
  onApplyCoupon,
  invoiceNumber
}: InvoiceFormProps) {
  const { t } = useTranslation('common')

  const onConfirmPayment = () => {
    void formik.setFieldValue('currentStep', 1)
  }
  const handleCheckout = () => {
    void formik.setFieldValue('currentStep', 0)
  }
  const onAddQty = (item: CartCardProps) => {
    void formik.setFieldValue(
      'cart',
      formik.values.cart.map((_item) =>
        _item.id === item.id
          ? {
              ..._item,
              qty: _item.qty + 1
            }
          : _item
      )
    )
  }
  const onRemoveQty = (item: CartCardProps) => {
    void formik.setFieldValue(
      'cart',
      formik.values.cart.map((_item) =>
        _item.id === item.id
          ? {
              ..._item,
              qty: _item.qty - 1 < 0 ? 0 : _item.qty - 1,
              price: _item.price * (_item.qty - 1 < 0 ? 0 : _item.qty - 1)
            }
          : _item
      )
    )
  }
  const cartList = formik.values.cart.map((_item) => ({
    ..._item,
    onAdd: () => onAddQty(_item),
    onRemove: () => onRemoveQty(_item)
  }))
  return (
    <FormikProvider value={formik}>
      <div
        className={`${
          formik.values.currentStep !== null
            ? 'sm:fixed sm:overflow-hidden sm:h-[574px] sm:ltr:right-6 sm:rtl:left-6 sm:overflow-x-auto sm:w-[321px]  dark:bg-dark-200 py-4 px-3  '
            : 'hidden'
        }  sm:flex flex-col dark:bg-dark-100 bg-white rounded-md gap-4 `}
      >
        <Text>{invoiceNumber}</Text>
        {formik.values.currentStep === 0 && (
          <>
            <Cart list={cartList} />
            <InvoiceFooter {...footerProps} />

            <Button
              primary
              onClick={onConfirmPayment}
              className="w-full mt-[39px] justify-center"
              disabled={formik.values.cart.length === 0}
            >
              {t('Confirm_Payment')}
            </Button>
          </>
        )}
        {formik.values.currentStep === 1 && (
          <>
            <Payment
              form={formik}
              calcTotal={calcTotal}
              onApplyCoupon={onApplyCoupon}
            />
            <InvoiceFooter {...footerProps} />

            <Button
              primary
              type="submit"
              className="w-full font-semibold text-sm justify-center"
            >
              {t('get_invoice')}
            </Button>
          </>
        )}
      </div>
      <div className="sticky sm:hidden bottom-[8vh] pt-16 w-full">
        {formik.values.currentStep === null && (
          <Button
            onClick={handleCheckout}
            primary
            className="w-full h-[55px] justify-center text-md"
          >
            {t('checkout')} <Next className="mt-[4px]" />
          </Button>
        )}
      </div>
    </FormikProvider>
  )
}
