import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import CardInfo from 'components/common/card-info'
import moment from 'moment'
import { CustodySingleObjectType } from '../table'
function CustodyMobileCard({
  custody,
  amount,
  category,
  price,
  date
}: CustodySingleObjectType) {
  const { t } = useTranslation('common')
  return (
    <CardInfo
      header={{ first: t('custody'), second: custody }}
      body={[
        { label: t('amount'), value: amount },
        { label: t('category'), value: category },
        { label: t('price'), value: price },
        { label: t('date'), value: moment(date).format('DD/MM/YYYY') }
      ]}
    />
  )
}

export default CustodyMobileCard
