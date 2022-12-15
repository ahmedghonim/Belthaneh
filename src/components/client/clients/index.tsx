import React, { useState } from 'react'
import Actions from './actions'
import Data from './client'
import { Card } from 'ui'
import { CustomerForm } from 'components/common'

function Clients() {
  const [showForm, setShowForm] = useState<boolean>(false)

  // search for client functionality
  const searchHandler = () => {}

  const onSubmitFun = () => {}

  // add function
  const onCancelHandler = () => setShowForm(false)

  return (
    <section className="relative xs:pb-24">
      <Actions setMethod={setShowForm} searchHandler={searchHandler} />
      <Data />
      {showForm ? (
        <div className="fixed top-0 left-0 w-full h-full grid place-items-center bg-dark-100 !bg-opacity-50 z-50">
          <Card className="sm:w-2/4 w-[90%] m-auto p-4">
            <CustomerForm
              onSubmit={onSubmitFun}
              handleCancel={onCancelHandler}
            />
          </Card>
        </div>
      ) : (
        ''
      )}
    </section>
  )
}

export default Clients
