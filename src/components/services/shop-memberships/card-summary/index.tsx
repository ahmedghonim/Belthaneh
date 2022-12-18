import User from 'svg/users.svg'
import { Text } from 'ui'
export interface CardSummaryProps {
  title: string
  total: number
  id: string
}

export default function CardSummary({ title, total }: CardSummaryProps) {
  return (
    <div className="bg-white dark:bg-dark-200 rounded-[10px] justify-between w-full shadow-md px-5 sm:py-11 py-3 flex items-center flex-wrap ">
      <User className="fill-secondary-100 scale-150" />
      <Text className="font-bold capitalize xs:text-md">{title}</Text>
      <Text className="font-bold xs:basis-full xs:pt-8 text-center xs:text-md">
        {total}
      </Text>
    </div>
  )
}
