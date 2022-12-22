import React from 'react'
import { TotalBookingBoxProps } from 'components/employees/total-booking/types'
import { Text } from 'ui'

function BookingBox({ num, type }: TotalBookingBoxProps) {
  return (
    <div className="flex flex-col gap-3 dark:bg-[#303030] sm:bg-[#EEEEEE] bg-white sm:px-3 px-1 py-4 text-center sm:w-[32%] w-full rounded-md">
      <span className="text-primary-100 font-bold text-lg">{num}</span>
      <Text as="h1" className="xs:!text-md">
        {type}
      </Text>
    </div>
  )
}

export default BookingBox
