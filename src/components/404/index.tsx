import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'
import { Text, Button } from 'ui'
import { useRouter } from 'next/router'
import NotFoundFace from 'svg/404-face.svg'
import NumberFour from 'svg/number-4.svg'
import NumberZero from 'svg/number-0.svg'

const NotFoundPage = () => {
  const { t } = useTranslation('common')

  const { push } = useRouter()

  // route to home
  const routeToHome = async () => {
    await push('/admin/dashboard')
  }

  return (
    <>
      <Head>
        <title>{t('pages-title:_404')}</title>
      </Head>
      <section className="w-full h-full grid place-items-center relative">
        <div className="flex flex-col items-center gap-10">
          <div className="text-center">
            <Text as="h1" className="!font-bold sm:!text-[64px]">
              {t('opps')}
            </Text>
            <Text as="p" className="!text-lg !font-semibold">
              {t('page_not_found')}
            </Text>
          </div>
          <div className="flex xs:w-full sm:gap-3">
            <NumberFour />
            <NumberZero />
            <NumberFour />
          </div>
          <div className="flex flex-col items-center">
            <Text as="p" className="!text-lg !font-bold">
              {t('page_not_found_message')}
            </Text>
            <div className="mt-5">
              <Button
                primary
                className="!px-10 !rounded-full"
                onClick={routeToHome}
              >
                {t('back_home')}
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute">
          <NotFoundFace />
        </div>
      </section>
    </>
  )
}
export default NotFoundPage
