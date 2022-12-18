import React from 'react'
import { Text } from 'ui'
import { DescriptionPropsType } from 'components/salon-online/type'
import DescriptionImage from 'svg/salon-desc-image.svg'

function Description({ salonDescription }: DescriptionPropsType) {
  return (
    <section className="relative -top-16 z-50 flex flex-col gap-4 xs:pb-6 pb-20">
      {/* <div className="w-[200px] h-[200px] rounded-full bg-white border-[5px] border-secondary-100 relative -left-10"></div> */}

      <div className="relative -left-10">
        <DescriptionImage className="xs:scale-75" />
      </div>

      <Text as="h1" className="!text-primary-100 !text-lg !font-semibold">
        Description
      </Text>
      <Text as="p" className="!font-semibold leading-8">
        {salonDescription}
      </Text>
    </section>
  )
}

export default Description
