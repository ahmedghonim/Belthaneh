import React from 'react'
import { Text } from 'ui'

interface Option {
  label: string | number
  value: string | number | React.ReactNode
}

export interface CardProps {
  header: { first: string; second: string | number }
  body: Option[]
}
export default function CardInfo({ header, body }: CardProps) {
  const RecordInfo = ({ label, value }: Option) => (
    <div className="flex justify-between">
      <Text className="capitalize">{label}</Text>
      <Text>{value}</Text>
    </div>
  )
  const Header = () => (
    <div className="flex justify-between rounded-[10px] dark:bg-dark-200 bg-dark-600 p-4">
      <Text>{header.first}</Text>
      <Text>{header.second}</Text>
    </div>
  )

  return (
    <div className="flex flex-col gap-4">
      <div className="sm:hidden block bg-white dark:bg-dark-100 rounded-[10px]">
        <Header />
        <div className="flex flex-col px-2 py-5 gap-1 ">
          {body.map((_item) => (
            <RecordInfo
              label={_item.label}
              value={_item.value}
              key={_item.label}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
