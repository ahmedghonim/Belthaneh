import Pos from 'components/pos'
import { CartCardProps } from 'components/pos/cart/card'
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
  const [openCustomerForm, setOpenAddCustomer] = useState(false)
  const [openAddService, setOpenAddService] = useState<{
    open: boolean
    service: null | unknown
  }>({ open: false, service: null })
  const [currentService, setCurrentService] = useState<
    'service' | 'package' | 'membership'
  >('service')
  const { t } = useTranslation('common')
  const [currentCategory, setCurrentCategory] = useState<number>(0)
  const [cart, setCart] = useState<CartCardProps[]>([])
  const screen = useScreen()

  const clientData = {
    systemType: 'booking' as const,
    handleSelectCustomer: (value: any) => undefined,
    customers: [],
    selectedCustomer: null,
    handleAddNewCustomer: () => {
      setOpenAddCustomer(true)
    },
    openCustomerForm,
    onSubmitAddCustomer: (values: any) => undefined,
    onCloseCustomerForm: () => {
      setOpenAddCustomer(false)
    }
  }
  const serviceTypesData = {
    currentService,
    onSelectService: (serviceName: any) => {
      setCurrentService(serviceName)
    }
  }
  const packages: PackagesProps = {
    packagesList: packagesData.map((_item) => ({
      ..._item,
      onClickAdd: () => {
        setOpenAddService({ open: true, service: _item })
      }
    })),
    systemType: 'queue' as const,
    bookingModalData: null,
    queueModalData: {
      employees,
      onSelect: (val: unknown) => undefined,
      open: openAddService.open,
      onClose: () => {
        setOpenAddService({ open: false, service: null })
      },
      onAdd: () => {
        setOpenAddService({ open: false, service: null })
        const newItem = { ...(openAddService.service as any) }
        setCart((prevEvents) => {
          const filtered = prevEvents.find((item) => item?.id === newItem?.id)
          return [
            {
              ...newItem,
              serviceType: 'package',
              qty: filtered !== undefined ? Number(filtered?.qty) + 1 : 1
            },
            ...cart
          ]
        })
      }
    }
  }
  const categories = [
    {
      label: t('waxing'),
      isActive: currentCategory === 0,
      onClick: () => {
        setCurrentCategory(0)
      },
      icon: (
        <HairIcon
          className={`dark:fill-white  ${
            currentCategory === 0 ? 'fill-white' : 'fill-secondary-100'
          }`}
        />
      )
    },
    {
      label: t('waxing'),
      isActive: currentCategory === 1,
      onClick: () => {
        setCurrentCategory(1)
      },
      icon: (
        <HairIcon
          className={`dark:fill-white  ${
            currentCategory === 1 ? 'fill-white' : 'fill-secondary-100'
          }`}
        />
      )
    },
    {
      label: t('waxing'),
      isActive: currentCategory === 2,
      onClick: () => {
        setCurrentCategory(2)
      },
      icon: (
        <HairIcon
          className={`dark:fill-white  ${
            currentCategory === 2 ? 'fill-white' : 'fill-secondary-100'
          }`}
        />
      )
    },
    {
      label: t('waxing'),
      isActive: currentCategory === 3,
      onClick: () => {
        setCurrentCategory(3)
      },
      icon: (
        <HairIcon
          className={`dark:fill-white  ${
            currentCategory === 3 ? 'fill-white' : 'fill-secondary-100'
          }`}
        />
      )
    }
  ]
  const servicesData = {
    services: services.map((_item) => ({
      ..._item,
      onClickAdd: () => {
        setOpenAddService({ open: true, service: _item })
      }
    })),
    categories,
    systemType: 'booking' as const,
    queueModalData: null,
    bookingModalData: {
      onChangeDate: () => undefined,
      employees,
      onSelect: (val: unknown) => undefined,
      open: openAddService.open,
      onClose: () => {
        setOpenAddService({ open: false, service: null })
      },
      onAdd: () => {
        setOpenAddService({ open: false, service: null })
        const newItem = { ...(openAddService.service as any) }
        setCart((prevEvents) => {
          const filtered = prevEvents.find((item) => item?.id === newItem?.id)
          return [
            {
              ...newItem,
              serviceType: 'service',
              qty: filtered !== undefined ? Number(filtered?.qty) + 1 : 1
            },
            ...cart
          ]
        })
      }
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
        handleAdd: () => undefined,
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
        handleAdd: () => undefined,
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
  const endShift = () => {
    //
  }

  const initialValues = {
    coupon: '',
    discount: 0,
    cash: '',
    credit: '',
    cart: [...cart],
    currentStep: screen === 'phone' ? null : 0
  }
  const onSubmit = () => undefined
  const invoiceFormData = {
    calcTotal: (discount: number) => undefined,
    onApplyCoupon: () => undefined,
    invoiceNumber: '123',
    footerProps: {
      subTotal: 150,
      taxPercentage: 10,
      tax: 20,
      total: 100
    }
  }
  const adaptedMemberships = membershipData.memberships.map((_item) => ({
    ..._item,
    handleAdd: () => {
      setCart((prevEvents) => {
        const filtered = prevEvents.find((item) => item?.id === _item?.id)
        return [
          {
            ..._item,
            name: _item.title,
            onAdd: () => undefined,
            onRemove: () => undefined,
            serviceType: 'membership',
            qty: filtered !== undefined ? Number(filtered?.qty) + 1 : 1
          },
          ...cart
        ]
      })
    }
  }))

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
        membershipsData={{ memberships: adaptedMemberships }}
        endShift={endShift}
        invoiceFormData={invoiceFormData}
        onSubmit={onSubmit}
        initialValues={initialValues}
      />
    </>
  )
}

export default POS
