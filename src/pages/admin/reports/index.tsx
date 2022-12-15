import ReportRouter from 'components/reports'
import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'
import React from 'react'

function Report() {
  const { t } = useTranslation('pages-title')
  return (
    <>
      <Head>
        <title>{t('admin_reports')}</title>
      </Head>
      <ReportRouter />
    </>
  )
}

export default Report
