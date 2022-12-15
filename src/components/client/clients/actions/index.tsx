import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import { Button, Input } from 'ui'
import { AddCustomerFunctionProp } from 'components/client/clients/types'
import NavigatorTabs from 'components/client/navigator-tabs'
import Plus from 'svg/plus.svg'

function Actions({ searchHandler, setMethod }: AddCustomerFunctionProp) {
  const { t } = useTranslation('common')

  // add function
  const addHandler = () => setMethod(true)

  return (
    <section>
      <div className="flex justify-between">
        <div className="xs:w-2/3">
          <NavigatorTabs splitNum={2} />
        </div>
        <Button primary={true} className="px-5 sm:hidden" onClick={addHandler}>
          <Plus />
        </Button>
        <Button primary={true} onClick={addHandler} className="xs:hidden">
          {t('add_client')}
        </Button>
      </div>
      <div className="sm:w-1/3 mt-4">
        <Input
          name="client-search"
          placeholder={t('start_type_to_search_for_client')}
          onChange={searchHandler}
        />
      </div>
    </section>
  )
}
export default Actions
