import CardInfo, { CardProps } from 'components/common/card-info'
import ThreeDots from 'svg/dots.svg'
import EditIcon from 'svg/edit.svg'
import DeleteIcon from 'svg/delete.svg'
import useTranslation from 'next-translate/useTranslation'
import { Text } from 'ui'

export interface CardItem extends CardProps {
  id: string
  onEdit: () => void
  onDelete: () => void
}
export interface TableAsCardsProps {
  list: CardItem[]
}

export default function TableAsCards({ list }: TableAsCardsProps) {
  const { t } = useTranslation('common')

  const Actions = ({
    onEdit,
    onDelete
  }: {
    onDelete: () => void
    onEdit: () => void
  }) => (
    <>
      <div className="dropdown">
        <ThreeDots tabIndex={0} className="cursor-pointer" />
        <div
          tabIndex={0}
          className="dropdown-content menu py-5 px-1 w-14 items-center top-10 rounded-box right-0 ltr:mr-[-16px] rtl:mr-[-32px] flex flex-col gap-5 dark:bg-dark-200 bg-[#D4D6D9]"
        >
          <div
            className={
              'cursor-pointer hover:bg-white dark:hover:bg-dark-100 flex justify-center'
            }
          >
            <EditIcon
              onClick={onEdit}
              className={'stroke-secondary-100 scale-[0.7]'}
            />
          </div>
          <div
            className={
              'cursor-pointer hover:bg-white dark:hover:bg-dark-100 flex justify-center'
            }
          >
            <DeleteIcon onClick={onDelete} className={'stroke-secondary-100'} />
          </div>
        </div>
      </div>
    </>
  )
  const formattedList = list.map((_item) => ({
    ..._item,
    header: {
      first: t(_item.header.first),
      second: (
        <div className="flex gap-3 items-center">
          {_item.header.second}{' '}
          <Actions onEdit={_item.onEdit} onDelete={_item.onDelete} />
        </div>
      )
    },
    body: _item.body.map(({ label, value }) => {
      if (label === 'state') {
        value = (
          <Text
            className="capitalize"
            danger={value === 'cancelled'}
            success={value === 'completed'}
          >
            {value}
          </Text>
        )
      }
      label = t(label as string)
      return { label, value }
    })
  }))

  return (
    <div className="flex flex-col gap-4">
      {formattedList.map((_item) => (
        <CardInfo key={_item.id} {..._item} />
      ))}
    </div>
  )
}
