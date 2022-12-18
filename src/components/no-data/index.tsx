import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import { Text, Button } from 'ui'
import NotFoundBox from 'svg/not-found-box.svg'
import { useRouter } from 'next/router'

const NoDataFounded = () => {
  const { t } = useTranslation('common')
  const { back } = useRouter()

  // route to home
  const addFun = async () => {
    await back()
  }

  return (
    <section className="w-full h-full grid place-items-center">
      <div className="flex flex-col items-center gap-5">
        <div>
          <NotFoundBox />
        </div>
        <div className="flex flex-col items-center">
          <Text as="h1" className="!font-bold !text-xl">
            {t("it's_empty")}
          </Text>
          <Text as="p" className="!text-md">
            {t('empty_message')}
          </Text>
          <div className="mt-5">
            <Button primary className="px-10" onClick={addFun}>
              {t('add')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
export default NoDataFounded
