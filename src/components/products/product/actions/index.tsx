import React from 'react'
import useTranslation from 'next-translate/useTranslation'

import Add from 'svg/add.svg'
import Input from 'ui/input'
import Button from 'ui/button'

function ProductsActions() {
  const { t } = useTranslation('common')

  return (
    <section className="flex justify-between mt-10">
      <div className="w-full sm:w-2/5">
        <Input
          name="product search"
          placeholder={t('Start_typing_to_search_for_products')}
        />
      </div>
      <Button className="justify-center w-44 hidden sm:flex" primary={true}>
        <Add />
        <p className="capitalize">{t('add_product')}</p>
      </Button>
    </section>
  )
}

export default ProductsActions
