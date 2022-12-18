import React from 'react'
import Image from 'next/image'
import SocialPlatforms from '../social-platforms'
import { Text } from 'ui'

import { ContactDataTypes } from 'components/salon-online/type'

function GitInTouch({
  mail,
  phone,
  address,
  src,
  socialPlatforms
}: ContactDataTypes) {
  return (
    <div className="sm:h-[50vh] sm:bg-[#9747ff33] sm:p-10 p-5 relative after:absolute after:content-[''] after:left-0 after:top-0 after:w-full after:h-[90%] xs:after:bg-[#9747ff33]">
      <div className="flex xs:flex-col gap-8 relative z-50">
        <div className="flex flex-col flex-1 sm:gap-16 gap-6">
          <Text as="h1" className="!text-primary-100 !text-lg !font-bold">
            Get In Touch
          </Text>
          <div className="flex xs:flex-col xs:gap-5 justify-between">
            <div>
              <Text
                as="h1"
                className="!text-secondary-100 !font-bold !text-lg !mb-3"
              >
                Contacts
              </Text>
              <div className="mb-2">
                <a
                  href={`mailto:${mail}`}
                  className="text-dark-100 font-semibold underline duration-150 hover:text-primary-100"
                >
                  {mail}
                </a>
              </div>
              <div>
                <a
                  href={`tel:${phone}`}
                  className="text-dark-100 font-semibold hover:opacity-75 duration-150 hover:text-primary-100"
                >
                  {phone}
                </a>
              </div>
            </div>
            <div>
              <Text
                as="h1"
                className="!text-secondary-100 !font-bold !text-lg !mb-3"
              >
                Address
              </Text>
              <div>
                <address className="text-dark-100 font-semibold">
                  {address}
                </address>
              </div>
            </div>
            <div>
              <Text
                as="h1"
                className="!text-secondary-100 !font-bold !text-lg !mb-3"
              >
                Social
              </Text>
              <SocialPlatforms {...socialPlatforms} />
            </div>
          </div>
        </div>
        <div className="sm:w-1/4 w-full relative sm:-top-[17vh]">
          <Image
            width={100}
            height={100}
            src={src}
            alt="git in touch image"
            className="w-full max-w-full h-[438px]"
          />
        </div>
      </div>
    </div>
  )
}
export default GitInTouch
