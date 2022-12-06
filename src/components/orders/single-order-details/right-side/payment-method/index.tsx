import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import RoundedBox from 'ui/rounded-box'
import DetailsBox from 'ui/details-box'
import Checked from 'svg/checked.svg'
import Visa from 'svg/visa.svg'
import PayHand from 'svg/pay-hand.svg'

interface PaymentMethodProps {
  completed: boolean
  transaction: string
  date: string
  cashOnDelivery: boolean
}

function PaymentMethod({
  completed,
  transaction,
  date,
  cashOnDelivery
}: PaymentMethodProps) {
  const { t } = useTranslation('common')
  return (
    <RoundedBox className="px-4 pt-4 pb-10">
      <h2 className="dark:text-white text-dark-100 mb-4 font-bold text-md">
        {t('payment_method')}
      </h2>
      <ul className="flex flex-col gap-4">
        <DetailsBox
          text={completed ? t('Process_completed') : t('Process_not_completed')}
          icon={<Checked className="dark:stroke-white stroke-[#525252]" />}
          withIcon={true}
        />
        <DetailsBox
          text={transaction === 'cash' ? t('cash_method') : t('credit_method')}
          icon={<Visa className="dark:stroke-white stroke-[#525252]" />}
          withIcon={true}
        />
        <DetailsBox text={date} withIcon={false} textStyling="text-dark-300" />
        <DetailsBox
          text={
            cashOnDelivery ? t('cash_on_delivery') : t('no_cash_on_delivery')
          }
          icon={<PayHand className="dark:stroke-white stroke-[#525252]" />}
          withIcon={true}
        />
      </ul>
    </RoundedBox>
  )
}

export default PaymentMethod
