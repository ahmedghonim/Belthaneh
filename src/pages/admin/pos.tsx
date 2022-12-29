import Pos from 'components/pos'
import { MembershipsProps } from 'components/pos/memberships'
import { PackagesProps } from 'components/pos/packages'
import { packagesData } from 'components/pos/packages/index.mock'
import { services, employees } from 'components/pos/services/index.mock'
import useScreen from 'hooks/useScreen'
import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'
import { useState } from 'react'
import HairIcon from 'svg/hair.svg'
import { Text } from 'ui'

function POS() {
  const [currentService, setCurrentService] = useState<
    'service' | 'package' | 'membership'
  >('service')
  const { t } = useTranslation('common')
  const screen = useScreen()

  const clientData = {
    clients: [
      {
        label: 'Ahmed Sameh',
        value: '1'
      },
      {
        label: 'Kaled Dahy',
        value: '2'
      },
      {
        label: 'Somia Ali',
        value: '3'
      }
    ]
  }
  const serviceTypesData = {
    currentService,
    onSelectService: (serviceName: any) => {
      setCurrentService(serviceName)
    }
  }
  const packages: PackagesProps = {
    packagesList: packagesData.map((_item) => ({
      ..._item
    })),
    systemType: 'queue' as const,
    bookingModalData: null,
    queueModalData: {
      employees
    }
  }
  const categories = [
    {
      label: t('waxing'),
      id: '0',
      icon: HairIcon,
      onClick: () => undefined
    },
    {
      label: t('waxing'),
      id: '1',
      icon: HairIcon,
      onClick: () => undefined
    },
    {
      label: t('waxing'),
      id: '2',
      icon: HairIcon,
      onClick: () => undefined
    },
    {
      label: t('waxing'),
      id: '3',
      icon: HairIcon,
      onClick: () => undefined
    }
  ]
  const servicesData = {
    services: services.map((_item) => ({
      ..._item
    })),
    categories,
    systemType: 'booking' as const,
    queueModalData: null,
    bookingModalData: {
      employees
    }
  }
  const membershipData: MembershipsProps = {
    memberships: [
      {
        title: 'Loyalty',
        id: '1',
        subTitle: 'Essential Features',
        oldPrice: 59.99,
        price: 53.99,
        body: (
          <div className="flex flex-col gap-[13px]">
            <div className="flex-1 flex gap-2 items-center">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-primary-100 dark:bg-dark-100 bg-white border-primary-100 focus:ring-primary-100 dark:focus:ring-primary-100 focus:ring-2 accent-primary-100"
              />
              <Text size="xs">Access to all features</Text>
            </div>
            <div className="flex-1 flex gap-2 items-center">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-primary-100 dark:bg-dark-100 bg-white border-primary-100 focus:ring-primary-100 dark:focus:ring-primary-100 focus:ring-2 accent-primary-100"
              />
              <Text size="xs">Access to all features</Text>
            </div>
            <div className="flex-1 flex gap-2 items-center">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-primary-100 dark:bg-dark-100 bg-white border-primary-100 focus:ring-primary-100 dark:focus:ring-primary-100 focus:ring-2 accent-primary-100"
              />
              <Text size="xs">Access to all features</Text>
            </div>
          </div>
        )
      },
      {
        title: 'Pro',
        id: '2',
        subTitle: 'Advanced Features',
        oldPrice: 120.99,
        price: 109.99,
        body: (
          <div className="flex flex-col gap-[13px]">
            <div className="flex-1 flex gap-2 items-center">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-primary-100 dark:bg-dark-100 bg-white border-primary-100 focus:ring-primary-100 dark:focus:ring-primary-100 focus:ring-2 accent-primary-100"
              />
              <Text size="xs">Access to all features</Text>
            </div>
            <div className="flex-1 flex gap-2 items-center">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-primary-100 dark:bg-dark-100 bg-white border-primary-100 focus:ring-primary-100 dark:focus:ring-primary-100 focus:ring-2 accent-primary-100"
              />
              <Text size="xs">Access to all features</Text>
            </div>
            <div className="flex-1 flex gap-2 items-center">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-primary-100 dark:bg-dark-100 bg-white border-primary-100 focus:ring-primary-100 dark:focus:ring-primary-100 focus:ring-2 accent-primary-100"
              />
              <Text size="xs">Access to all features</Text>
            </div>
          </div>
        )
      }
    ]
  }

  const initialValues = {
    coupon: '',
    discount: 0,
    cash: '',
    credit: '',
    open: false,
    openInvoiceDetails: false,
    currentStep: screen === 'phone' ? null : 0,
    services: [],
    packages: [],
    memberships: [],
    category: '0',
    total: 0,
    tax: 0,
    subTotal: 0,
    couponValue: 0,
    taxPercentage: 0,
    client: null,
    newClient: null,
    invoiceNumber: '#123'
  }
  const onSubmit = () => undefined
  const invoiceFormData = {
    onApplyCoupon: () => undefined,
    children: null
  }

  return (
    <>
      <Head>
        <title>{t('pos')}</title>
      </Head>
      <Pos
        clientData={clientData}
        serviceTypesData={serviceTypesData}
        packagesData={packages}
        servicesData={servicesData}
        membershipsData={membershipData}
        invoiceFormData={invoiceFormData}
        onSubmit={onSubmit}
        initialValues={initialValues}
      />
    </>
  )
}

export default POS
