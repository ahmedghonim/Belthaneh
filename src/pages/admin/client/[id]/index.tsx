import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'
import ProfileFC from 'components/client/client-profile'

const Profile = () => {
  const { t } = useTranslation('pages-title')
  return (
    <>
      <Head>
        <title>{t('')}</title>
      </Head>
      <ProfileFC />
    </>
  )
}

export default Profile
