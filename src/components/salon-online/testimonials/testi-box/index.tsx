import React from 'react'
import Image from 'next/image'
import { TestimonialsDataType } from 'components/salon-online/type'
import { Text } from 'ui'
import Star from 'svg/star.svg'

const starsArray: string[] = ['1', '2', '3', '4', '5']

function TestimonialBox({
  src,
  client,
  stars,
  feedback
}: TestimonialsDataType) {
  return (
    <div className="flex flex-col gap-2 bg-white rounded-xl p-4 pt-10 relative">
      <div>
        <Text as="h1" className="!font-bold">
          {client}
        </Text>
      </div>
      <div className="flex gap-1">
        {starsArray.map((starNum) => {
          return (
            <Star
              key={starNum}
              className={`fill-[#F97E4E] ${
                starNum > stars ? 'opacity-25' : ''
              }`}
            />
          )
        })}
      </div>
      <div>
        <Text as="p" className="!text-sm">{`"${feedback}"`}</Text>
      </div>
      <div className="flex items-center justify-center w-[80px] h-[80px] rounded-full bg-white absolute -top-8 left-4">
        <Image
          width={60}
          height={60}
          src={src}
          alt="client image"
          className="rounded-full"
        />
      </div>
    </div>
  )
}

export default TestimonialBox
