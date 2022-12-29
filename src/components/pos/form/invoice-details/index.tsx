import { useFormikContext } from 'formik'
import useTranslation from 'next-translate/useTranslation'
import { Button, Modal } from 'ui'
import InvoiceDetailsForm from './invoice-details-form'
import InvoiceDetailsSummary from './invoice-details-summary'
import { useReactToPrint } from 'react-to-print'
import { useRef } from 'react'

export default function InvoiceDetails({
  onApplyCoupon
}: {
  onApplyCoupon: () => void
}) {
  const { t } = useTranslation('common')
  const { setFieldValue, values } = useFormikContext<{
    openInvoiceDetails: boolean
  }>()

  const componentRef = useRef(null)
  const onClickPrint = useReactToPrint({
    content: () => componentRef?.current
  })
  return (
    <Modal
      open={values.openInvoiceDetails}
      onClose={() => {
        setFieldValue('openInvoiceDetails', false)
      }}
      wrapperClassName="xs:!px-0 "
    >
      <div className="flex flex-col sm:!w-[822px] w-screen py-[10px] xs:!bg-dark-100">
        <div className="flex gap-4 sm:flex-row flex-col">
          <div
            className="sm:w-[40%] flex !self-center print:!w-full print:px-4 print:bg-white"
            ref={componentRef}
          >
            <InvoiceDetailsSummary />
          </div>
          <div className="divider-vertical w-[1px] bg-dark-300 h-screen sm:flex hidden" />
          <div className="sm:w-[60%] xs:!px-6 ">
            <InvoiceDetailsForm onApplyCoupon={onApplyCoupon} />
          </div>
        </div>

        <div className="flex mt-auto gap-8 xs:pt-8 self-end me-8 ">
          <Button
            onClick={() => {
              setFieldValue('openInvoiceDetails', false)
            }}
            className="bg-transparent"
          >
            {t('cancel')}
          </Button>
          <Button primary onClick={onClickPrint} className="px-8">
            {t('print')}
          </Button>
        </div>
      </div>
    </Modal>
  )
}
