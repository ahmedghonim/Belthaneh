import EndOfDay from 'components/end-of-day'
import {
  bookingData,
  employeesData,
  orderData
} from 'components/end-of-day/mobile-cards/cards.mock'
import { CardTypes } from 'components/end-of-day/mobile-cards/navigation'
import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'
import React, { useState } from 'react'

function EndOfTheDay() {
  const { t } = useTranslation('common')
  const [selectedCard, setSelectedCard] = useState<CardTypes>('booking')
  const mobileCardData = {
    navigationTabsProps: {
      selectedCard,
      onSelect: (item: CardTypes) => {
        void setSelectedCard(item)
      }
    },
    booking: bookingData,
    employees: employeesData,
    orders: orderData
  }

  return (
    <>
      <Head>
        <title>{t('End_Of_The_Day_Report')}</title>
      </Head>
      <EndOfDay mobileCardData={mobileCardData} />
    </>
  )
}

export default EndOfTheDay
