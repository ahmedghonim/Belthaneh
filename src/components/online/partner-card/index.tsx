import React from 'react'
import GoIcon from 'svg/go.svg'
import { Button, Text } from 'ui'

interface PartnerCardProps {
  icon: SVGElement | any
  title: string
  description: string
  onClick: () => void
}

export default function PartnerCard({
  icon: Icon,
  title,
  description,
  onClick
}: PartnerCardProps) {
  return (
    <>
      <div className="group card sm:w-[309px]  shadow-xl dark:bg-dark-200 bg-white  h-full rounded-md   hover:-translate-y-1 hover:scale-110  duration-300">
        <div className="card-body justify-between hover:z-30">
          <div className="flex gap-[10px] items-center">
            <Icon className="fill-dark-200 dark:fill-white " />
            <Text size={'md'} className="font-bold">
              {title}
            </Text>
          </div>
          <Text>{description}</Text>
          <div className="card-actions justify-end">
            <Button primary onClick={onClick}>
              <GoIcon />
            </Button>
          </div>
        </div>
        <div className="absolute dark:bg-dark-200 w-full h-full opacity-[0.5] group-hover:hidden " />
      </div>
    </>
  )
}
