import { FormValuesCustomerForm } from 'components/common/client-form'
import { ServiceField } from 'components/pos/cart/card'
import { useFormikContext } from 'formik'
import { useEffect } from 'react'
import { Options } from 'ui/select'

export interface InvoiceFormValues {
  coupon: string
  discount: number
  cash: number | string
  credit: number | string
  currentStep: number | null
  services: ServiceField[]
  packages: Array<Partial<ServiceField>>
  memberships: Array<Partial<ServiceField>>
  open: boolean
  openInvoiceDetails: boolean
  total: number
  tax: number
  subTotal: number
  couponValue: number
  taxPercentage: number
  invoiceNumber: string
  client: Options | null
  newClient: FormValuesCustomerForm | null
}
export const FormObserver: React.FC = () => {
  const { values, setValues } = useFormikContext<InvoiceFormValues>()
  const calcTotal = () => {
    const allServices = [
      ...values.services,
      ...values.packages,
      ...values.memberships
    ]
    const subTotal = allServices.reduce(
      (sum, curr) => sum + (curr?.qty ?? 0) * (curr.service?.price ?? 0),
      0
    )
    const total = subTotal - values.discount - values.couponValue + values.tax
    setValues({ ...values, total, subTotal })
  }
  useEffect(() => {
    calcTotal()
  }, [
    values.services,
    values.packages,
    values.memberships,
    values.discount,
    values.couponValue,
    values.tax
  ])

  return null
}
