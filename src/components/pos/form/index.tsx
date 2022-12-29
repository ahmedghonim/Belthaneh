import useTranslation from 'next-translate/useTranslation'
import { Button, Text } from 'ui'
import Cart from '../cart'
import InvoiceFooter from './invoice-footer'
import Payment from './payment'
import Next from 'svg/right-angle.svg'
import { useFormikContext } from 'formik'
import { ServiceField } from '../cart/card'
import InvoiceDetails from './invoice-details'

export interface InvoiceFormProps {
  onApplyCoupon: () => void
  children: JSX.Element | null
}

export default function InvoiceForm({
  onApplyCoupon,
  children
}: InvoiceFormProps) {
  const { t } = useTranslation('common')
  const { setFieldValue, values } = useFormikContext<{
    currentStep: number
    services: ServiceField[]
    packages: Array<Partial<ServiceField>>
    memberships: Array<Partial<ServiceField>>
    shiftStarted: boolean
    invoiceNumber: string
  }>()
  const endShift = () => {
    setFieldValue('shiftStarted', false)
  }
  const startShift = () => {
    setFieldValue('shiftStarted', true)
  }
  const onConfirmPayment = () => {
    void setFieldValue('currentStep', 1)
  }
  const handleCheckout = () => {
    void setFieldValue('currentStep', 0)
  }

  const Body = () => {
    const cartDetails = (
      <>
        <Cart />
        <div className="py-5">
          <InvoiceFooter />
        </div>
        <Button
          primary
          onClick={onConfirmPayment}
          className="w-full mt-[39px] justify-center"
          disabled={
            values.services.length === 0 &&
            values.memberships.length === 0 &&
            values.packages.length === 0
          }
        >
          {t('Confirm_Payment')}
        </Button>
        <Button
          primaryBorder
          onClick={() => {
            setFieldValue('currentStep', null)
          }}
          className="w-full mt-5 justify-center sm:hidden"
        >
          {t('back')}
        </Button>
      </>
    )
    const paymentDetails = (
      <div className="max-h-[40vh]">
        <Payment onApplyCoupon={onApplyCoupon} />
        <InvoiceFooter />
        <Button
          primary
          type="submit"
          className="w-full font-semibold text-sm justify-center"
          onClick={() => {
            setFieldValue('openInvoiceDetails', true)
          }}
        >
          {t('get_invoice')}
        </Button>
        <Button
          primaryBorder
          onClick={() => {
            setFieldValue('currentStep', values.currentStep - 1)
          }}
          className="w-full mt-5 justify-center"
        >
          {t('back')}
        </Button>
      </div>
    )
    switch (values.currentStep) {
      case 0:
        return cartDetails
      case 1:
        return paymentDetails
      default:
        return cartDetails
    }
  }

  const InvoiceData = () => (
    <div className="sm:h-[70vh] h-screen overflow-auto sm:w-[321px] w-full sm:dark:bg-dark-200 dark:bg-dark-100  sm:py-4 sm:px-3 bg-white sm:right-6 rounded-md">
      <Text className="pb-3">{values.invoiceNumber}</Text>
      <Body />
    </div>
  )

  const LargeScreen = () => (
    <div className="sm:flex gap-4 flex-col hidden top-0 ">
      {children}
      <aside className="md:fixed ltr:right-6 rtl:left-6 sm:flex flex-col hidden top-[26.5vh]">
        <InvoiceData />
      </aside>
    </div>
  )

  const MobileScreen = () => (
    <div className="sm:hidden flex gap-4 flex-col w-full ">
      {values.currentStep === null && children}
      {values.currentStep !== null && <InvoiceData />}
      {values.currentStep === null && (
        <div className="sticky bottom-[-5vh] pt-5 w-full">
          <Button
            onClick={handleCheckout}
            primary
            className="w-full h-[55px] justify-center text-md"
          >
            {t('checkout')} <Next className="mt-[4px]" />
          </Button>
        </div>
      )}
    </div>
  )

  const Overlay = () => (
    <div
      className={`${
        !values?.shiftStarted ? 'fixed' : 'hidden'
      } sm:w-[82%] w-full h-full opacity-[0.5] bg-dark-100 xs:right-0 xs:h-full bottom-0 sx:right-0`}
    />
  )
  const ShiftActions = () => (
    <div
      className={
        'self-end sm:ltr:right-11 sm:rtl:left-11 pb-4 md:fixed right-6 sm:flex flex-col z-40'
      }
    >
      <Button
        secondary={values.shiftStarted && 'light'}
        className={'sm:self-end self-start text-md font-bold'}
        primary={!values.shiftStarted}
        onClick={values?.shiftStarted ? endShift : startShift}
      >
        {t(values.shiftStarted ? 'end_shift' : 'start_shift')}
      </Button>
    </div>
  )

  return (
    <>
      <ShiftActions />
      <LargeScreen />
      <MobileScreen />
      <Overlay />
      <InvoiceDetails onApplyCoupon={onApplyCoupon} />
    </>
  )
}
