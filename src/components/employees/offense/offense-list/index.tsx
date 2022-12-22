import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import { Text } from 'ui'
import Edit from 'svg/edit.svg'
import Trash from 'svg/trash.svg'
import moment from 'moment'

export interface OffenseItem {
  title: string
  date: Date
  category: string
  type: string
  id: string
  onDelete?: () => void
  onEdit?: () => void
}
function OffenseList({ data }: { data: OffenseItem[] }) {
  const { t } = useTranslation('common')
  const Header = () => (
    <div className="flex justify-between items-center w-[75%] px-6">
      <div>
        <Text as="span" className="!text-sm">
          {t('title')}
        </Text>
      </div>
      <div>
        <Text as="span" className="!text-sm">
          {t('date')}
        </Text>
      </div>
      <div>
        <Text as="span" className="!text-sm">
          {t('category')}
        </Text>
      </div>
      <div>
        <Text as="span" className="!text-sm">
          {t('offense_type')}
        </Text>
      </div>
    </div>
  )
  const OffenseItemCard = ({
    title,
    date,
    category,
    type,
    onEdit,
    onDelete
  }: OffenseItem) => (
    <div className="flex justify-between items-center dark:bg-dark-100 bg-[#F1F1F1] px-6 py-5 rounded-lg">
      <div className="flex justify-between items-center w-[75%]">
        <div className="max-w-[20%]">
          <Text as="span" className="!text-sm">
            {title}
          </Text>
        </div>
        <div className="max-w-[20%]">
          <Text as="span" className="!text-sm">
            {moment(date).format('DD/MM/YYYY')}
          </Text>
        </div>
        <div className="max-w-[20%]">
          <Text as="span" className="!text-sm">
            {category}
          </Text>
        </div>
        <div className="max-w-[20%]">
          <Text as="span" className="!text-sm">
            {type}
          </Text>
        </div>
      </div>
      <div className="flex items-center justify-end gap-4 w-[15%] ">
        <button onClick={onEdit}>
          <Edit className="dark:stroke-light-200 stroke-dark-100" />
        </button>
        <button onClick={onDelete}>
          <Trash />
        </button>
      </div>
    </div>
  )

  return (
    <div className="flex flex-col gap-5 xs:hidden">
      <Header />
      {data.map((offense) => {
        return <OffenseItemCard {...offense} key={offense.id} />
      })}
    </div>
  )
}
export default OffenseList
