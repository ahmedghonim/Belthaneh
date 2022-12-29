import Client, { ClientProps } from './client'
import Memberships, { MembershipsProps } from './memberships'
import Packages, { PackagesProps } from './packages'
import ServiceTypes, { ServiceTypesProps } from './service-types'
import Services, { ServicesProps } from './services'
import InvoiceForm, { InvoiceFormProps } from './form'
import { Form, Formik, FormikHelpers } from 'formik'
import { FormObserver, InvoiceFormValues } from './form/form-observe'

interface PosProps {
  clientData: ClientProps
  serviceTypesData: ServiceTypesProps
  packagesData: PackagesProps
  servicesData: ServicesProps
  membershipsData: MembershipsProps
  invoiceFormData: Omit<InvoiceFormProps, 'formik'>
  initialValues: InvoiceFormValues | null
  onSubmit: (values: InvoiceFormValues, helpers: FormikHelpers<any>) => void
}

export default function Pos({
  clientData,
  serviceTypesData,
  packagesData,
  servicesData,
  membershipsData,
  invoiceFormData,
  initialValues,
  onSubmit
}: PosProps) {
  const defaultValues = {
    coupon: '',
    discount: 0,
    cash: '',
    credit: '',
    currentStep: 0,
    services: [],
    packages: [],
    memberships: [],
    open: false,
    openInvoiceDetails: false,
    total: 0,
    tax: 0,
    subTotal: 0,
    couponValue: 0,
    taxPercentage: 0,
    invoiceNumber: '',
    client: null,
    newClient: null
  }

  return (
    <Formik
      initialValues={{ ...defaultValues, ...initialValues }}
      onSubmit={onSubmit}
      enableReinitialize={true}
    >
      <Form className="flex flex-col">
        <FormObserver />
        <InvoiceForm {...invoiceFormData}>
          <div className="flex justify-between sm:mt-16  sm:flex-row flex-col sm:w-[calc(100%-321px)] w-full">
            <div className="flex flex-col gap-5 w-full">
              <Client {...clientData} />

              <ServiceTypes {...serviceTypesData} />

              {serviceTypesData.currentService === 'package' && (
                <Packages {...packagesData} />
              )}

              {serviceTypesData.currentService === 'service' && (
                <Services {...servicesData} />
              )}

              {serviceTypesData.currentService === 'membership' && (
                <Memberships {...membershipsData} />
              )}
            </div>
          </div>
        </InvoiceForm>
      </Form>
    </Formik>
  )
}
