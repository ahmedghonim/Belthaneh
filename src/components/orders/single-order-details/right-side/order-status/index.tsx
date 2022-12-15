import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Select from 'ui/select'

function OrderStatus() {
  const { t } = useTranslation('common')

  const paymentsOptions: Array<{ value: string; label: string | any }> = [
    { value: 'Paid', label: t('paid') },
    { value: 'Unpaid', label: t('un_paid') }
  ]

  const statusOptions: Array<{ value: string; label: string | any }> = [
    { value: 'New', label: t('new') },
    { value: 'Ready', label: t('ready') },
    {
      value: 'Delivery',
      label: t('delivery_in_progress')
    },
    { value: 'Completed', label: t('Completed') },
    { value: 'Canceled', label: t('Canceled') },
    { value: 'Preparation', label: t('preparation') }
  ]

  // Status Options Change Handler
  const statusChangeHandler = () => {}

  // Payment Options Change Handler
  const paymentChangeHandler = () => {}

  return (
    <div className="hidden w-full sm:flex justify-between">
      <div className="w-48">
        <p className="dark:text-white text-dark-100 mb-2">
          {t('Order_Status')}
        </p>
        <Select
          isMulti={true}
          options={statusOptions}
          name="statusOptions"
          onChange={statusChangeHandler}
        />
      </div>
      <div className="w-48">
        <p className="dark:text-white text-dark-100 mb-2">
          {t('Payment_Status')}
        </p>
        <Select
          isMulti={true}
          options={paymentsOptions}
          name="paymentOptions"
          onChange={paymentChangeHandler}
        />
      </div>
    </div>
  )
}

export default OrderStatus
