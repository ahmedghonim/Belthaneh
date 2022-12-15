import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import RoundedBox from 'ui/rounded-box'
import DetailsBox from 'ui/details-box'
import { OrdersDetailsType } from 'components/orders/orders-details'
import User from 'svg/user.svg'
import RightAngle from 'svg/right-angle.svg'

function OrdersDetailsBox({
  order,
  date,
  status,
  customer,
  orderNum = 0,
  price
}: OrdersDetailsType) {
  const { t } = useTranslation('common')
  return (
    <RoundedBox className="dark:bg-[#151518] mb-5">
      <div className=" bg-[#D4D6D9] flex justify-between items-center px-2 py-3 rounded-xl capitalize dark:bg-[#1E1E22] ">
        <div className="flex gap-3 items-center">
          <User className="dark:fill-white fill-dark-100" />
          <div>
            <p className="mb-1 font-medium text-dark-100 dark:text-white">
              {order}
            </p>
            <p className="text-dark-100 dark:text-dark-300">{date}</p>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <p
            className={` ${
              status === 'canceled' ? 'text-[#FD483C]' : 'text-green-600'
            }`}
          >
            {status === 'canceled' ? t('Canceled') : t('Completed')}
          </p>
          <RightAngle className="stroke-[#797979E0] scale-90 ltr:rotate-0 rtl:rotate-180" />
        </div>
      </div>
      <ul className="flex flex-col gap-4 p-3 ">
        <DetailsBox
          withLabel={true}
          labelType={t('customer')}
          text={customer}
        />
        <DetailsBox
          withLabel={true}
          labelType={t('order')}
          text={`#${orderNum}`}
        />
        <DetailsBox
          withLabel={true}
          labelType={t('price')}
          text={`$${price}`}
        />
      </ul>
    </RoundedBox>
  )
}

export default OrdersDetailsBox
