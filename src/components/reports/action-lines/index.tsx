import moment from 'moment'
import useTranslation from 'next-translate/useTranslation'
import React from 'react'
import { Button, Text } from 'ui'

export interface ActionLineItem {
  date: Date
  name: string
  action: string
  id: string
}

interface ActionLinesProps {
  items: ActionLineItem[]
}
export default function ActionLines({ items }: ActionLinesProps) {
  const { t } = useTranslation('common')

  const initialValue: { [key: string]: ActionLineItem[] } = {}
  const groupByDate = items.reduce((acc, current) => {
    const currentDate: string = moment(current.date).format('DD/MM/YYYY')
    if (acc[currentDate]?.length > 0) {
      acc[currentDate].push(current)
    } else {
      acc[currentDate] = [current]
    }
    return acc
  }, initialValue)
  const getLabel = (date: string) => {
    switch (true) {
      case moment(date, 'DD/MM/YYYY').format('DD/MM/YYYY') ===
        moment().format('DD/MM/YYYY'): {
        return t('today')
      }
      case moment(date, 'DD/MM/YYYY').format('DD/MM/YYYY') ===
        moment().subtract(1, 'day').format('DD/MM/YYYY'): {
        return t('yesterday')
      }

      default: {
        return moment(date, 'DD/MM/YYYY').format('DD/MM/YYYY')
      }
    }
  }

  const CardInfo = ({ date, name, action, id }: ActionLineItem) => (
    <div key={id}>
      <div className="flex flex-col gap-[10px] px-4 py-2 dark:bg-dark-200 bg-white rounded-[10px] justify-between">
        <Text className="flex-1 font-bold" size={'sm'}>
          {name}
        </Text>
        <div className="flex justify-between">
          <Text className="text-[10px]">{action}</Text>
          <Text className="text-[10px] font-bold">
            {moment(date).format('hh:mm A')}
          </Text>
        </div>
      </div>
    </div>
  )

  const Date = ({
    date,
    cardList
  }: {
    date: string
    cardList: ActionLineItem[]
  }) => (
    <div key={date} className="space-y-5">
      <Button primary className="rounded-[30px]">
        {getLabel(date)}
      </Button>
      {cardList.map((cardItem) => (
        <CardInfo {...cardItem} key={cardItem.id} />
      ))}
    </div>
  )

  return (
    <div className="space-y-5">
      {Object.keys(groupByDate).map((_item) => (
        <Date key={_item} date={_item} cardList={groupByDate[_item]} />
      ))}
    </div>
  )
}
