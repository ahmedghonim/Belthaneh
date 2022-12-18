import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import DateInput from 'ui/dateInput'

function BestSellingHead() {
  // date change handler
  const dateChangeHandler = () => {}

  const { t } = useTranslation('common')
  return (
    <div className="sm:flex justify-between mb-5 mt-10 w-full items-center">
      <h2 className="dark:text-white text-dark-100 font-bold text-md xs:mb-3">
        {t('Best_selling_products')}
      </h2>
      <div>
        <DateInput
          name="dateInput"
          className="sm:w-80"
          onChange={dateChangeHandler}
        />
      </div>
    </div>
  )
}

export default BestSellingHead
