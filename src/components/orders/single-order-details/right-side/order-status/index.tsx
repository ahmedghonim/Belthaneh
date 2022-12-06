import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Trans from 'next-translate/trans'
import Select from 'ui/select'

const paymentsOptions: Array<{ value: string; label: string | any }> = [
  { value: 'Paid', label: <Trans i18nKey="common:paid" /> },
  { value: 'Unpaid', label: <Trans i18nKey="common:un_paid" /> }
]

const statusOptions: Array<{ value: string; label: string | any }> = [
  { value: 'New', label: <Trans i18nKey="common:new" /> },
  { value: 'Ready', label: <Trans i18nKey="common:ready" /> },
  {
    value: 'Delivery',
    label: <Trans i18nKey="common:delivery_in_progress" />
  },
  { value: 'Completed', label: <Trans i18nKey="common:Completed" /> },
  { value: 'Canceled', label: <Trans i18nKey="common:Canceled" /> },
  { value: 'Preparation', label: 'preparation' }
]

function OrderStatus() {
  const { t } = useTranslation('common')

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
