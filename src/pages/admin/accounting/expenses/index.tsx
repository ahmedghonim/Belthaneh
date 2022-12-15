import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'
import ExpensesFC from 'components/accounting/expenses'
function Expenses() {
  const { t } = useTranslation('pages-title')

  return (
    <>
      <Head>
        <title>{t('accounting_expenses')}</title>
      </Head>
      <ExpensesFC />
    </>
  )
}

export default Expenses
