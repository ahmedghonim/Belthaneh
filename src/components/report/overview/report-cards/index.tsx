import useTranslation from 'next-translate/useTranslation'
import React from 'react'
import { Card, Text } from 'ui'
import WalletIcon from 'svg/wallet.svg'

function ReportCards() {
  const { t } = useTranslation('common')
  return (
    <div className="flex-1 gap-6 flex mt-9 flex-wrap">
      <Card className="h-fit flex flex-col gap-4">
        <Text as="h3" size="md">
          {t('Online')}
        </Text>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <Text>{t('sr')} 234 </Text>
            <Text className="!text-success-100">+0,94%</Text>
          </div>
          <div>
            <WalletIcon />
          </div>
        </div>
      </Card>

      <Card className="h-fit flex flex-col gap-4">
        <Text as="h3" size="md">
          {t('In Salon')}
        </Text>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <Text>{t('sr')} 234 </Text>
            <Text className="!text-success-100">+0,94%</Text>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col">
              <Text>{t('sr')} 234 </Text>
              <Text className="!text-error-300">-0,94%</Text>
            </div>
            <WalletIcon />
          </div>
        </div>
      </Card>
    </div>
  )
}

export default ReportCards