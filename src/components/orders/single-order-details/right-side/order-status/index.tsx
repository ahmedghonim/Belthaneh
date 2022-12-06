import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Select from 'ui/select'

function OrderStatus() {
  const { t } = useTranslation('common')
  const paymentsOptions: Array<{ value: string; label: string | any }> = [
    { value: 'Paid', label: t('common:paid') },
    { value: 'Unpaid', label: t('common:un_paid') }
  ]

  const statusOptions: Array<{ value: string; label: string | any }> = [
    { value: 'New', label: t('common:new') },
    { value: 'Ready', label: t('common:ready') },
    {
      value: 'Delivery',
      label: t('common:delivery_in_progress')
    },
    { value: 'Completed', label: t('common:Completed') },
    { value: 'Canceled', label: t('common:Canceled') },
    { value: 'Preparation', label: 'preparation' }
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
