import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import WebClientBookings from './at-web'
import MobileClientBookings from './at-mobile'
import { BookingTableType } from 'components/client/client-profile/types'
interface Props {
  data: BookingTableType[]
}

function ClientBooking({ data }: Props) {
  const { t } = useTranslation('common')

  // see more functionality
  const seeMoreFun = () => {}

  return (
    <div>
      <WebClientBookings data={data} />
      <MobileClientBookings data={data} />
      <button
        className="sm:hidden block ml-auto my-4 text-base dark:text-white text-dark-100 font-medium capitalize"
        onClick={seeMoreFun}
      >
        {t('see_more')}
      </button>
    </div>
  )
}

export default ClientBooking
