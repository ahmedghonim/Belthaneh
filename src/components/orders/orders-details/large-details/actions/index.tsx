import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Input from 'ui/input'
import FilterButtons from './filter-buttons'

function OrdersDetailsActions() {
  const { t } = useTranslation('common')
  return (
    <section className="hidden sm:block mt-10">
      <div className="w-1/3 mb-5">
        <Input
          name="search-order"
          placeholder={t('Start_Typing_To_Search_For_Order')}
        />
      </div>
      <div className="flex gap-5 mb-6">
        <FilterButtons />
      </div>
    </section>
  )
}

export default OrdersDetailsActions
