import React from 'react'
import RoundedBox from 'ui/rounded-box'
import ForexArrow from 'svg/forex-arrows.svg'

interface Props {
  heading: string
  data: string | number
  upLeft: string | number
}

function DataBox({ heading, data, upLeft }: Props) {
  return (
    <RoundedBox className="relative xs:w-full flex flex-col items-center gap-4 py-2 px-4 capitalize text-center">
      <h1 className="font-medium dark:text-white text-dark-100">{heading}</h1>
      <h2 className="xs:text-lg text-xl font-bold sm:mt-3 dark:text-white text-dark-100">
        {data}
      </h2>
      <div className="flex xs:gap-3 right-4 bottom-2">
        <div className="sm:absolute bottom-3 ltr:left-3 rtl:right-3">
          <ForexArrow />
        </div>
        <p className="text-sm lowercase dark:text-white text-dark-100">
          {upLeft}
        </p>
      </div>
    </RoundedBox>
  )
}

export default DataBox
