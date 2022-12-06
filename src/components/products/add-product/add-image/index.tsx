import React from 'react'
import LargeAddImage from './at-large'
import MobileAddImage from './at-mobile'

function AddImages() {
  return (
    <section className="sm:dark:bg-[#1B1B1C] sm:bg-white  w-full sm:w-2/5 rounded-xl py-6 px-4">
      <div className="hidden sm:grid">
        <LargeAddImage />
      </div>
      <div className="grid sm:hidden">
        <MobileAddImage />
      </div>
    </section>
  )
}

export default AddImages
