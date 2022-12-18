import React from 'react'
import Image from 'next/image'
import { Text } from 'ui'
import { ServicesBoxDataType } from 'components/salon-online/type'

function ServiceBox({ src, service, description, price }: ServicesBoxDataType) {
  return (
    <div className="rounded-md overflow-hidden sm:h-[457px] h-[316px]">
      <div className="h-[50%]">
        <Image
          width={100}
          height={100}
          src={src}
          alt="service image"
          className="w-full h-full"
        />
      </div>
      <div className="bg-white !h-[50%] flex flex-col justify-between p-3 !pt-4">
        <div>
          <Text as="h1" className="!text-primary-100 !font-semibold">
            {service}
          </Text>
          <Text as="p" className="!text-[#686868] !font-semibold">
            {description}
          </Text>
        </div>
        <div className="flex justify-between items-center">
          <Text as="span" className="!text-secondary-100 !font-semibold">
            {price}
          </Text>
          <button className="bg-primary-100 text-white text-sm py-1 px-3 rounded-md duration-150 hover:opacity-70">
            Book Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default ServiceBox
