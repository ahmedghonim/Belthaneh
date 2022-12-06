import React, { useState } from 'react'
import useTranslation from 'next-translate/useTranslation'
import { ButtonsObj } from '../../../../orders-details/'
import Button from 'ui/button'

function FilterButtons() {
  const { t } = useTranslation('common')

  const [active, setActive] = useState<string>('0')

  // filter function
  function filterButton(id: string) {
    setActive(id)
    // type filter functionality....
  }
  return (
    <>
      {ButtonsObj.map(({ id, label, value }) => {
        return (
          <Button
            key={id}
            onClick={() => filterButton(id)}
            primary={active === id && true}
            className={`${
              active !== id ? 'bg-transparent' : ''
            } w-40 justify-center !rounded-full border-2 border-primary-100`}
          >
            <span
              className={`${
                active !== id ? 'text-dark-100 dark:text-white' : ''
              }`}
            >
              {t(label)}
            </span>
            <span
              className={`text-primary-100 ${
                active === id ? '!text-light-100' : ''
              }`}
            >
              {t(value)}
            </span>
          </Button>
        )
      })}
    </>
  )
}

export default FilterButtons
