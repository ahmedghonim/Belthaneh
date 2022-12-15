import EndOfDay from 'components/end-of-day'
import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'
import React from 'react'

function EndOfTheDay() {
  const { t } = useTranslation('common')

  return (
    <>
      <Head>
        <title>{t('End_Of_The_Day_Report')}</title>
      </Head>
      <EndOfDay />
    </>
  )
}

export default EndOfTheDay
