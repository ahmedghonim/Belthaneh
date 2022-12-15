import useTranslation from 'next-translate/useTranslation'
import React from 'react'
import { Button } from 'ui'
import Client, { ClientProps } from './client'
import Memberships, { MembershipsProps } from './memberships'
import Packages, { PackagesProps } from './packages'
import ServiceTypes, { ServiceTypesProps } from './service-types'
import Services, { ServicesProps } from './services'
import InvoiceForm, { InvoiceFormProps } from './form'
import { FormikHelpers, useFormik } from 'formik'
import { CartCardProps } from './cart/card'
import useScreen from 'hooks/useScreen'

export interface InvoiceFormValues {
  coupon: string
  discount: number
  cash: number | string
  credit: number | string
  cart: CartCardProps[]
  currentStep: number | null
}

interface PosProps {
  clientData: ClientProps
  serviceTypesData: ServiceTypesProps
  packagesData: PackagesProps
  servicesData: ServicesProps
  membershipsData: MembershipsProps
  invoiceFormData: Omit<InvoiceFormProps, 'formik'>
  endShift: () => void
  initialValues: InvoiceFormValues | null
  onSubmit: (
    values: InvoiceFormValues,
    helpers: FormikHelpers<InvoiceFormValues>
  ) => void
}

export default function Pos({
  clientData,
  serviceTypesData,
  packagesData,
  servicesData,
  membershipsData,
  endShift,
  invoiceFormData,
  initialValues,
  onSubmit
}: PosProps) {
  const { t } = useTranslation('common')
  const screen = useScreen()
  const defaultValues = {
    coupon: '',
    discount: 0,
    cash: '',
    credit: '',
    cart: [],
    currentStep: 0
  }

  const formik = useFormik({
    initialValues: { ...defaultValues, ...initialValues },
    onSubmit,
    enableReinitialize: true
  })
  const currentStep = formik.values.currentStep

  return (
    <>
      <div
        className={
          'sm:fixed xs:flex sm:ltr:right-11 sm:rtl:left-11  h-[10vh] xs:justify-end '
        }
      >
        <Button
          secondary={'light'}
          className={'sm:self-end self-start text-md font-bold'}
          onClick={endShift}
        >
          {t('end_shift')}
        </Button>
      </div>
      {currentStep !== null && screen === 'phone' ? (
        <InvoiceForm {...invoiceFormData} formik={formik} />
      ) : (
        <div className="flex justify-between sm:mt-16 w-full sm:flex-row flex-col">
          <div className="flex flex-col gap-4 sm:w-[calc(100%-321px)] w-full">
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
          <InvoiceForm {...invoiceFormData} formik={formik} />
        </div>
      )}
    </>
  )
}
