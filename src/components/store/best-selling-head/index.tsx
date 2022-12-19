import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import DateInput from 'ui/dateInput'

function BestSellingHead() {
  // date change handler
  const dateChangeHandler = () => {}

  const { t } = useTranslation('common')
  return (
    <div className="mt-10">
      <div className="sm:flex justify-between mb-5">
        <h2 className="dark:text-white text-dark-100 font-bold text-md flex-1 xs:mb-3">
          {t('Best_selling_products')}
        </h2>
        <div className="sm:w-[15%]">
          <DateInput name="dateInput" onChange={dateChangeHandler} />
        </div>
      </div>
    </div>
  )
}

export default BestSellingHead
