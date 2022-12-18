import React from 'react'
import Image from 'next/image'
import Header from '../header'
import { LandingSectionPropsType } from 'components/salon-online/type'
// import BackgroundCircles from 'svg/bg-circles.svg'

function LandingSection({ coverImage }: LandingSectionPropsType) {
  return (
    <section className="bg-gradient-to-r from-[#d1d6dc] to-[#e5e9ef] rounded-bl-xl rounded-br-xl">
      <div className="p-5">
        <div className="sm:px-8">
          <Header />
        </div>
        <div className="sm:h-[60vh]  relative top-20">
          <Image
            height={100}
            width={100}
            src={coverImage}
            alt="slaon cover"
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  )
}

export default LandingSection
