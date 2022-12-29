import React from 'react'
import { FeaturesCardProps } from 'components/home/types'

const Icon = ({
  icon: Icon,
  fill
}: {
  icon: React.ElementType
  fill: string
}) => (
  <Icon
    className={`${
      fill === 'partners' ? 'fill-primary-100' : 'fill-secondary-100'
    } scale-75 icon duration-200`}
  />
)

const Line = ({ className }: { className: string }) => {
  return <div className={`absolute  bg-white !duration-700 ${className}`}></div>
}

function FeatureCard({ icon, title, desc, fill = '' }: FeaturesCardProps) {
  return (
    <div className="relative flex flex-col gap-[20px] border-transparent bg-white rounded-lg overflow-hidden px-8 py-10 box-shadow [&:hover>*]:text-white [&:hover>.icon]:fill-white [&:hover>.v-line]:h-full [&:hover>.h-line]:w-full hover:scale-[1.1] hover:border-white hover:bg-secondary-100 duration-300">
      <Icon icon={icon} fill={fill} />

      <h2 className="text-black text-lg font-semibold duration-200">{title}</h2>

      <p className="text-black text-md duration-200">{desc}</p>

      <Line className="v-line top-0 left-0 w-[2px] h-0" />

      <Line className="v-line bottom-0 right-0 w-[2px] h-0" />

      <Line className="h-line top-0 left-0 h-[2px] w-0" />

      <Line className="h-line bottom-0 right-0 h-[2px] w-0" />
    </div>
  )
}
export default FeatureCard
