import React from 'react'
import SettingController from 'controller/Setting'
import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'

export function Setting() {
  const { t } = useTranslation('common')
  return (
    <>
      <Head>
        <title>{t('setting')}</title>
      </Head>
      <SettingController />
    </>
  )
}
export default Setting
