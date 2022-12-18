import React from 'react'
import AddImages from './add-image'
import BasicInfo from './basic-info'

function AddProducts() {
  return (
    <section className="flex flex-col sm:flex-row items-start xs:gap-2 gap-6">
      <BasicInfo />
      <AddImages />
    </section>
  )
}

export default AddProducts
